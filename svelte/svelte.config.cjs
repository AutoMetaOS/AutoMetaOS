const sveltePreprocess = require( 'svelte-preprocess' );
const static = require( '@sveltejs/adapter-static' );
const node = require( '@sveltejs/adapter-node' );
const pkg = require( './package.json' );
module.exports = {
	preprocess: sveltePreprocess(),
	kit: {
		adapter: node(),

		files: {
			assets: 'static',
			lib: 'src/lib',
		},

		// hydrate the <div id="svelte"> element in src/app.html
		target: 'body',

		vite: {
			ssr: {
				noExternal: Object.keys( pkg.dependencies || {} )
			}
		}
	}
};
