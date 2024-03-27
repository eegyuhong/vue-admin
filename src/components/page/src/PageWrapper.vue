<script setup lang="ts">
interface Props {
	title?: string;
	content?: string;
}

defineProps<Props>();
</script>

<template>
	<div>
		<a-page-header v-if="title" :title="title" class="page-header">
			<template v-if="content">
				{{ content }}
			</template>
		</a-page-header>

		<div class="content-container">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss">
.page-header {
	@apply bg-white border-t border-gray-500/20;
}

.content-container {
	@apply p-4;
}
</style>
