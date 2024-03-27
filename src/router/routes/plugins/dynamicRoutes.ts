import type { RouteModuleList } from '../typings';
import { useRouteStore } from '@/stores';

type RouteModule = GetArrayItemType<RouteModuleList>;

function sortBySortKey(
	routerModuleList: RouteModuleList | RouteModule['children'],
) {
	return routerModuleList!.sort(
		(a: RouteModule, b: RouteModule) =>
			+(a.meta?.sort || Number.MAX_VALUE) - +(b.meta?.sort || Number.MAX_VALUE),
	);
}

function sortRoutesBySortKey(routerModuleList: RouteModuleList) {
	for (const routerModule of routerModuleList) {
		const single = routerModule.meta?.single || false;
		if (!single) routerModule.children = sortBySortKey(routerModule.children);
	}
	return sortBySortKey(routerModuleList);
}

function filterHideRoute(
	routerModuleList: RouteModuleList | RouteModule['children'],
) {
	if (!routerModuleList) return [];
	const filteredModuleList = [];

	for (let i = 0; i < routerModuleList.length; i++) {
		const routeModule = routerModuleList[i];
		if (routeModule.meta?.isHide) continue;
		let { children } = routeModule;
		if (children && children.length) {
			children = routeModule.children = filterHideRoute(routeModule.children);
			if (!children.length) Reflect.deleteProperty(routeModule, 'children');
		}
		filteredModuleList.push(routeModule);
	}
	return filteredModuleList;
}

export function setupDynamicRoutes(routerModuleList: RouteModuleList) {
	const store = useRouteStore();
	store.appendRoute(sortRoutesBySortKey(filterHideRoute(routerModuleList)));
}
