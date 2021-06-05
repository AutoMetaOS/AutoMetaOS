import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';

export default {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: statix(),

		target: 'body',
		paths: {
			base: '/Ronin',
			assets: '/Ronin'
		},
	}
};
