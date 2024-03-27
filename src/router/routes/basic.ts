import type { RouteRecordRaw } from 'vue-router';
import { EnumPath } from '@/enums';

export const basicRoutes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'root',
		redirect: EnumPath.HOME,
	},
];
