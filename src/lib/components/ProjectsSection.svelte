<script>
    // 🔑 CLAVE 1: Importar el componente ProjectCard
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    const allProjects = [
        // ... (Tu lista de proyectos aquí)
         {
            title: 'Svelte Dashboard Analítico',
            description: 'Un panel de control de datos en tiempo real...',
            image: 'https://via.placeholder.com/350x200?text=Dashboard+UI',
            link: '#',
            github: '#',
            tags: ['SvelteKit', 'Chart.js', 'Tailwind']
        },
         // ... (más proyectos)
    ];
</script>

<div class="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-16 px-4">
    <div class="container mx-auto">
        <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white">
            Proyectos
        </h1>
        <p class="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Estos son los proyectos en los que he trabajado
         </p>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {#each allProjects as project}
                 <ProjectCard {...project} /> 
            {/each}
        </div>
    </div>
</div>