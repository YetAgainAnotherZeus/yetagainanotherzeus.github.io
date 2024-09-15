import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
	plugins: [
		sveltekit(),
		Inspect(),
		Icons({
			customCollections: {
				skills: async (iconName) => {
					const [name, theme] = iconName.split('-');
					return await fetch(
						`https://go-skill-icons.vercel.app/api/icons?i=${name}&theme=${theme ?? 'dark'}`
					).then((res) => res.text());
				}
			},
			compiler: 'svelte'
		})
	]
});
