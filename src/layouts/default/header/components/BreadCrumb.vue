<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import type { RouteLocationMatched } from 'vue-router';

const route = useRoute();
const routes = ref<RouteLocationMatched[]>([]);

watchEffect(() => {
	routes.value = route.matched.filter(item => !!item.meta?.title);
});
</script>

<template>
	<a-breadcrumb class="!ml-2">
		<a-breadcrumb-item v-for="(item, index) in routes" :key="index">
			{{ item.meta.title }}
		</a-breadcrumb-item>
	</a-breadcrumb>
</template>
