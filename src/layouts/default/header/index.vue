<script setup lang="ts">
import SiderTrigger from './components/SiderTrigger.vue';
import BreadCrumb from './components/BreadCrumb.vue';

import { useCollapsed } from '@/layouts/default/useCollapsed';

const { getCollapsed } = useCollapsed();
const getLayoutClass = computed(() => {
	return {
		'layout-header': true,
		'layout-header--fixed': true,
		'layout-header--light': true,
		'layout-header--collapsed': getCollapsed.value,
	};
});
</script>

<template>
	<a-layout-header :class="getLayoutClass">
		<div class="h-full flex items-center">
			<sider-trigger />
			<bread-crumb />
		</div>

		<!-- <div class="flex h-full mr-5">
			<user-dropdown class="layout-header-action" />
		</div> -->
	</a-layout-header>
</template>

<style scoped lang="scss">
.layout-header {
	@apply flex justify-between items-center pr-0 transition-all duration-200;

	padding-left: var(--sidebar-width);
	height: var(--header-height);
	line-height: var(--header-height);
	&.layout-header--fixed {
		@apply z-10 fixed top-0 right-0 left-0;
	}
	&.layout-header--light {
		@apply bg-white;
	}
	&.layout-header--collapsed {
		padding-left: var(--sidebar-collapsed-width);
	}
	&.layout-header-action {
		@apply flex justify-center items-center px-[10px] h-full text-base cursor-pointer transition-color hover:bg-gray-100;
	}
}
</style>
