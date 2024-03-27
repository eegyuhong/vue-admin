import type { RouteRecordRaw } from 'vue-router';
import { CustomerServiceOutlined } from '@ant-design/icons-vue';
import { DefaultLayout } from '@/layouts';

const route: RouteRecordRaw = {
	path: '/test',
	name: 'test',
	component: DefaultLayout,
	meta: {
		icon: CustomerServiceOutlined,
		auth: true,
		title: '테스트',
		sort: 1,
	},
	children: [
		{
			path: 'list',
			name: 'service-coupon-list',
			component: () => import('@/views/test/list/index.vue'),
			meta: {
				title: '리스트',
				sort: 1,
			},
		},
		{
			path: ':couponId(\\d+)',
			name: 'service-coupon-detail',
			component: () => import('@/views/test/detail/index.vue'),
			meta: {
				title: '디테일',
				sort: 2,
				isHide: true,
			},
		},
	],
};

export default route;
