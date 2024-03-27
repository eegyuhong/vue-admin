import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unocss from 'unocss/vite';
import setupAutoImport from './auto-import';
import setupVueComponents from './vue-components';

export default function setupVitePlugins() {
	const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), Unocss()];

	// unplugin-auto-import
	vitePlugins.push(setupAutoImport());

	// unplugin-vue-components
	vitePlugins.push(setupVueComponents());

	return vitePlugins;
}
