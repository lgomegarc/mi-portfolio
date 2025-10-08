/** @type {import('tailwindcss').Config} */
module.exports = {
  // 🔑 CLAVE: Rutas de escaneo exhaustivas para SvelteKit
  content: [
    "./src/**/*.{html,js,ts,svelte}",
    "./src/routes/**/*.{html,js,ts,svelte}",
    "./src/lib/**/*.{html,js,ts,svelte}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5a5edc', 
        'secondary-bg': '#f0f0f5', 
      },
    },
  },
  plugins: [],
};
