<script>
    import { slide } from 'svelte/transition';

    const links = [
        { name: 'Inicio', path: '#home' },
        { name: 'Sobre Mí', path: '#about' },
        { name: 'Proyectos', path: '#projects' },
        { name: 'Contacto', path: '#contact' },
    ];

    let isMenuOpen = false;

    function closeMenu() {
        isMenuOpen = false;
    }
</script>

<!-- Navbar -->
<nav class="flex justify-between items-center py-5 px-5 sm:px-12
            bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700
            shadow-md sticky top-0 z-30">
    <div class="logo z-30">
        <a href="#home" class="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300">
            MI PORTFOLIO
        </a>
    </div>

    <!-- Links de escritorio -->
    <div class="hidden md:flex space-x-8">
        {#each links as link}
            <a 
                href={link.path}
                on:click={closeMenu}
                class="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
                {link.name}
                <span 
                    class="absolute bottom-[-5px] left-0 w-full h-[3px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                ></span>
            </a>
        {/each}
    </div>

    <!-- Botón menú móvil -->
    <button 
        class="md:hidden p-2 z-30 focus:outline-none" 
        on:click={() => isMenuOpen = !isMenuOpen}
        aria-label="Abrir menú de navegación"
    >
        <svg 
            class="w-6 h-6 text-white transform transition duration-300" 
            class:rotate-90={isMenuOpen}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
        >
            <path 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
        </svg>
    </button>
</nav>

<!-- Menú móvil -->
{#if isMenuOpen}
    <div 
        class="fixed inset-0 top-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 z-20 pt-20 shadow-xl md:hidden flex flex-col items-center space-y-6"
        transition:slide={{ duration: 300 }}
    >
        {#each links as link}
            <a 
                href={link.path}
                on:click={closeMenu}
                class="text-3xl font-bold text-white hover:text-cyan-400 transition-colors duration-300 py-3"
            >
                {link.name}
            </a>
        {/each}
    </div>
{/if}

<style>
    html {
        scroll-behavior: smooth; /* Scroll suave en todo el sitio */
    }
</style>
