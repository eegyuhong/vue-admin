<script setup lang="ts">
import MenuItem from './MenuItem.vue';
import MenuWithChildren from './MenuWithChildren.vue';
import { useRouteStore } from '@/stores';
import type { RouteModuleList } from '@/router/routes/typings';

const selectedKeys = ref<string[]>([]);
const openKeys = ref<string[]>([]);

const router = useRouter();
const routeStore = useRouteStore();
const menus = ref<RouteModuleList>([]);

watch(
	() => routeStore.getRoutes,
	routes => {
		menus.value = routes;
	},
	{ immediate: true },
);

watch(
	() => router.currentRoute.value,
	currentRoute => {
		selectedKeys.value = [currentRoute.path];
	},
);

function setupCurrentMenu() {
	const currentRoute = router.currentRoute.value;
	selectedKeys.value = getCurrentMenuRecursive(menus.value, currentRoute.path);
	openKeys.value = selectedKeys.value;
}

setupCurrentMenu();

function getCurrentMenuRecursive(
	menus: RouteModuleList,
	targetKey: string,
	parentPath = '',
	parentMenus: GetArrayItemType<RouteModuleList>[] = [],
) {
	let keys: string[] = [];
	for (let i = 0; i < menus.length; i++) {
		const menu = menus[i];
		const path = parentPath ? `${parentPath}/${menu.path}` : menu.path;
		if (path === targetKey) {
			keys = [...parentMenus.map(item => item.path), path];
			break;
		}
		if (menu.children) {
			keys = getCurrentMenuRecursive(menu.children, targetKey, path, [
				...parentMenus,
				menu,
			]);
			if (keys && keys.length) return keys;
		}
	}
	return keys;
}
</script>

<template>
	<a-menu
		v-model:openKeys="openKeys"
		v-model:selectedKeys="selectedKeys"
		mode="inline"
		theme="dark"
	>
		<template v-for="menu in menus" :key="menu.path">
			<menu-item v-if="menu.meta?.single" :menu="menu" />
			<menu-with-children
				v-else
				:menu="menu"
				:parent-path="menu.path"
				:current-depth="1"
			/>
		</template>
	</a-menu>
</template>

<style scoped></style>
