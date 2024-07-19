import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [
        sveltekit(),
        Icons({
            customCollections: {
              'skills': async (iconName) => {
                const [name, theme] = iconName.split('-');
                return await fetch(`https://go-skill-icons.vercel.app/api/icons?i=${name}&theme=${theme ?? 'dark'}`).then((res) => res.text())
              }
            },
            compiler: 'svelte'
        })]
});
