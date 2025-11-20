// svelte.config.js
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';// O usa el formato sugerido por el error: import pkg from 'vite-plugin-svelte-svg'; const svelteSVG = pkg.svelteSVG;// <-- Importa esto

export default defineConfig({
    plugins: [
        sveltekit()
    ]
});