<script setup lang="ts">
import SideLogo from './components/Logo.vue';
import SideMenu from './components/Menu.vue';
import { useCollapsed } from '@/layouts/default/useCollapsed';
const { getCollapsed } = useCollapsed();
</script>

<template>
	<a-layout-sider
		v-model:collapsed="getCollapsed"
		:trigger="null"
		collapsible
		collapsed-width="56"
		class="layout-sidebar"
	>
		<side-logo :show-title="!getCollapsed" />
		<side-menu />
	</a-layout-sider>
</template>

<style scoped lang="scss">
.layout-sidebar {
	@apply z-20 fixed top-0 bottom-0 left-0;
}
</style>
