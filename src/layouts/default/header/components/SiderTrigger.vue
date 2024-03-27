<script setup lang="ts">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import { useCollapsed } from '@/layouts/default/useCollapsed';
const { getCollapsed, toggleCollapsed } = useCollapsed();
</script>

<template>
	<div class="layout-header-action" @click="toggleCollapsed">
		<menu-unfold-outlined v-if="getCollapsed" />
		<menu-fold-outlined v-else />
	</div>
</template>

<style scoped lang="scss">
.layout-header-action {
	@apply flex justify-center items-center px-10px h-full text-base cursor-pointer transition-color hover:bg-gray-100;
}
</style>
