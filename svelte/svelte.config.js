import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';

export default {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: node(),

		files: { assets: 'static', lib: 'src/lib' },

		target: 'body',

		vite: {
		}
	}
};
