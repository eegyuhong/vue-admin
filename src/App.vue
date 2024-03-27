<script setup lang="ts">
import koKR from 'ant-design-vue/es/locale/ko_KR';
</script>

<template>
	<a-config-provider :locale="koKR">
		<router-view />
	</a-config-provider>
</template>
