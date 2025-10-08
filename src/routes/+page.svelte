<script>
    import { quintOut } from 'svelte/easing';
</script>

<div class="flex items-center justify-center min-h-screen bg-secondary-bg px-4 sm:px-6 lg:px-8">
    
    <!-- Contenedor Principal Centrado con Sombra -->
    <div class="container py-24 text-center">
        
        <!-- Saludo Principal -->
        <h1 
            class="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 text-gray-900 leading-tight"
            style="color: #1f2937;" 
            in:fly={{ y: -50, duration: 800, easing: quintOut }}
        >
            ¡Hola! Soy <span class="text-primary">Leila</span>
        </h1>
        
        <!-- Descripción y Presentación -->
        <p 
            class="text-xl sm:text-2xl max-w-2xl mx-auto mb-10 text-gray-600"
            in:fade={{ delay: 500, duration: 1000 }}
        >
            Bienvenido a mi portafolio. Aquí muestro mis **proyectos**, **habilidades** y el camino que sigo como desarrolladora.
        </p>
        
        <!-- Botón/Enlace Principal -->
        <a 
            href="/about" 
            class="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg 
                   hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105"
            in:blur={{ delay: 1000, duration: 500 }}
        >
            Ver Mi Trayectoria →
        </a>

        <!-- Nota sobre el portafolio -->
        <p class="mt-8 text-sm text-gray-500">
            Desarrollado con SvelteKit y Tailwind CSS.
        </p>
    </div>

</div>
