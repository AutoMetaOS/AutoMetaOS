import sveltePreprocess from 'svelte-preprocess';
import statix from '@sveltejs/adapter-static';
import node from '@sveltejs/adapter-node';
// import config from "./build.js";

export default {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: statix(),

		target: 'body'
		// paths:
		// 	config.prod ?
		// 		{
		// 			base: '/Ronin',
		// 			assets: '/Ronin'
		// 		} :
		// 		{}
	}
};
