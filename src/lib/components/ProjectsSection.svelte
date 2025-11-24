<script>
    // 🔑 CLAVE 1: Importar el componente ProjectCard
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    const allProjects = [
        // ... (Tu lista de proyectos aquí)
         {
            title: 'Portfolio',
            description: 'Vida laboral y profesional',
            image: 'https://via.placeholder.com/350x200?text=Dashboard+UI',
            link: '#',
            github: 'https://github.com/lgomegarc/mi-portfolio',
            tags: ['SvelteKit', 'Typescript', 'TailwindCSS']
        },
         {
            title: 'Soporte E-commerce Inditex',
            description: 'Soporte a aplicaciones del grupo Inditex',
            image: '/Jira.png',
            link: '#',
            github: '',
            tags: ['DB2', 'Jira', 'Grafana', 'Confluence']
        },
         {
            title: 'Mic-Prices',
            description: 'Desarrollo de cero de un proyecto e-commerce con Spring Boot',
            image: '/codigo.png',
            link: '#',
            github: 'https://github.com/lgomegarc/mic-prices/tree/main/mic-prices-develop/mic-prices-develop',
            tags: ['Java', 'Spring Boot', 'Kafka', 'Spring JPA', 'React', 'TailwindCSS']
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