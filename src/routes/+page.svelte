<script lang="ts">
    import { quintOut } from 'svelte/easing';
    import { fade, fly, blur } from 'svelte/transition';
    import SocialLinks from '$lib/components/SocialLinks.svelte';
    import AboutSection from '$lib/components/AboutSection.svelte';
    import ContactSection from '$lib/components/ContactSection.svelte';
    import ProjectsSection from '$lib/components/ProjectsSection.svelte';


</script>

<div class="relative min-h-screen overflow-hidden" id="home">
    
    <div class="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div class="container py-24 text-center">
            <h1 class="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-4 text-white leading-tight"
                in:fly={{ y: -50, duration: 800, easing: quintOut }}>
                ¡Hola! Soy <span class="text-cyan-400">Leila</span>
            </h1>
            <p class="text-xl sm:text-2xl max-w-2xl mx-auto mb-10 text-gray-200"
                in:fly={{ y: 30, duration: 1000, delay: 500, easing: quintOut }}>
                Bienvenido a mi portafolio. Aquí muestro mis <a href="#projects" class="text-cyan-400">proyectos</a>, <a href="#about" class="text-cyan-400">habilidades</a> y el camino que sigo como desarrolladora backend.
            </p>
            <a href="#about" 
                class="inline-block px-8 py-3 font-semibold rounded-lg shadow-lg
                       bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600
                       text-white hover:opacity-90 transform hover:scale-105 transition duration-300 ease-in-out"
                in:blur={{ delay: 250, duration: 500 }}>
                Ver Mi Trayectoria →
            </a>
            <div class="flex justify-center space-x-8 mt-10" in:fade={{ delay: 1200, duration: 600 }}>
                <SocialLinks/>
            </div>
            <p class="mt-8 text-sm text-gray-400">
                Desarrollado con SvelteKit y Tailwind CSS.
            </p>
        </div>
    </div>
</div>

<section id="about">
    <AboutSection />
</section>

<section id="projects">
    <ProjectsSection />
</section>

<section id="contact">
    <ContactSection />
</section>