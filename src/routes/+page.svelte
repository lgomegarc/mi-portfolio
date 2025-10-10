<script>
    import { quintOut } from 'svelte/easing';
    import { fade, fly, blur } from 'svelte/transition';
</script>

<div class="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8
            bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
  <div class="container py-24 text-center">
    <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 text-white leading-tight"
        in:fly={{ y: -50, duration: 800, easing: quintOut }}>
      ¡Hola! Soy <span class="text-cyan-400">Leila</span>
    </h1>
    <p class="text-xl sm:text-2xl max-w-2xl mx-auto mb-10 text-gray-200"
       in:fly={{ y: 30, duration: 1000, delay: 500, easing: quintOut }}>
      Bienvenido a mi portafolio. Aquí muestro mis <strong>proyectos</strong>, <strong>habilidades</strong> y el camino que sigo como desarrolladora.
    </p>
    <a href="/about"
       class="inline-block px-8 py-3 font-semibold rounded-lg shadow-lg
              bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600
              text-white hover:opacity-90 transform hover:scale-105 transition duration-300 ease-in-out"
       in:blur={{ delay: 1000, duration: 500 }}>
      Ver Mi Trayectoria →
    </a>
    <p class="mt-8 text-sm text-gray-400">
      Desarrollado con SvelteKit y Tailwind CSS.
    </p>
  </div>
</div>

