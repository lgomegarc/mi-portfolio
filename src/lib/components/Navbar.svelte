<script>
    import { page } from '$app/stores';
    import { slide } from 'svelte/transition'; // 🔑 ¡IMPORTANTE!

    const links = [
        { name: 'Inicio', path: '/' },
        { name: 'Sobre Mí', path: '/about' },
        { name: 'Proyectos', path: '/projects' },
        { name: 'Contacto', path: '/contact' },
    ];
    
    // Variable de estado para controlar si el menú móvil está abierto
    let isMenuOpen = false;

    // Función para cerrar el menú (útil para móviles)
    function closeMenu() {
        isMenuOpen = false;
    }
</script>

<nav class="flex justify-between items-center py-5 px-5 sm:px-12 bg-white shadow-md sticky top-0 z-20">
    <div class="logo z-30">
        <a href="/" class="text-2xl font-bold text-gray-800 hover:text-primary transition-colors duration-300">
            MI PORTFOLIO
        </a>
    </div>

    <div class="nav-links hidden md:flex space-x-8">
        {#each links as link}
            <a 
                href={link.path}
                on:click={closeMenu}
                class:active={$page.url.pathname === link.path}
                class="text-lg font-semibold text-gray-500 hover:text-primary transition-colors duration-300 relative group"
            >
                {link.name}
                <span 
                    class:active-indicator={$page.url.pathname === link.path} 
                    class="absolute bottom-[-5px] left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"
                ></span>
            </a>
        {/each}
    </div>
    
    <button 
        class="md:hidden p-2 z-30 focus:outline-none" 
        on:click={() => isMenuOpen = !isMenuOpen}
        aria-label="Abrir menú de navegación"
    >
        <svg 
            class="w-6 h-6 text-gray-800 transform transition duration-300" 
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

{#if isMenuOpen}
    <div 
        class="fixed inset-0 top-0 bg-white z-20 pt-20 shadow-xl md:hidden flex flex-col items-center space-y-6"
        transition:slide="{{ duration: 300 }}"
    >
        {#each links as link}
            <a 
                href={link.path}
                on:click={closeMenu}
                class:text-primary={$page.url.pathname === link.path}
                class="text-3xl font-bold text-gray-800 hover:text-primary transition-colors duration-300 py-3"
            >
                {link.name}
            </a>
        {/each}
    </div>
{/if}

<style>
    /* Asegura que el indicador de escritorio se vea cuando la página está activa */
    .active-indicator {
        transform: scaleX(1); 
    }
</style>