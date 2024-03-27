import { defineConfig } from 'vite';
import setupVitePlugins from './build/plugins';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: setupVitePlugins(),
	resolve: { alias: [{ find: '@', replacement: '/src' }] },
});
