import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default function setupVueComponents() {
	return Components({
		dirs: [],
		extensions: ['vue'],
		include: [/\.vue$/, /\.vue\?vue/],
		dts: 'types/components.d.ts',
		resolvers: [
			AntDesignVueResolver({
				resolveIcons: true,
				importStyle: false, // css in js
			}),
		],
	});
}
