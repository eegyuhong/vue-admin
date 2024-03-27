<script setup lang="ts">
import LogoUrl from '@/assets/vue.svg';
import { EnumPath } from '@/enums';
import { router } from '@/router';

defineProps({
	showTitle: { type: Boolean, default: true },
});
</script>

<template>
	<div class="logo" @click="router.push(EnumPath.HOME)">
		<img :src="LogoUrl" alt="Logo" />
		<span v-show="showTitle">Vue admin</span>
	</div>
</template>

<style scoped lang="scss">
.logo {
	@apply flex items-center p-10px w-full cursor-pointer;
	height: var(--header-height);

	img {
		@apply max-h-full;
	}

	span {
		@apply ml-8px text-white text-base font-bold whitespace-nowrap;
	}
}
</style>
