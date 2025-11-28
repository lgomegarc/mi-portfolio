<script>
    // 1. Importamos las transiciones para las animaciones
    import { fly, fade } from 'svelte/transition';
    import ProjectCard from '$lib/components/ProjectCard.svelte';

    // Lista de Proyectos (el resto de tus proyectos irían aquí)
    const allProjects = [
        // Asegúrate de que tus imágenes estén en la carpeta /static
        {
            title: 'Portfolio',
            description: 'Web que describe los proyectos en los que he trabajado y mi formación profesional.',
            // image: 'https://via.placeholder.com/350x200?text=Portfolio', // URL de ejemplo, usa una local
            image: '/portfolio.png', // URL de imagen de ejemplo
            link: '#',
            github: 'https://github.com/lgomegarc/mi-portfolio',
            tags: ['SvelteKit', 'Typescript', 'TailwindCSS'],
            disableLink: false,       
            disableGithub: false
        },
         {
            title: 'Soporte E-commerce',
            description: 'Soporte a aplicaciones y páginas web del grupo Inditex ',
            image: '/Jira.png',
            link: '#',
            github: '',
            tags: ['DB2', 'Jira', 'Grafana', 'Confluence'],
            disableLink: true,       
            disableGithub: true
        },
         {
            title: 'Mic-Prices',
            description: 'Desarrollo de cero de un proyecto e-commerce con Spring Boot.',
            image: '/codigo.png',
            link: '#',
            github: 'https://github.com/lgomegarc/mic-prices/tree/main/mic-prices-develop/mic-prices-develop',
            tags: ['Java', 'Spring Boot', 'Kafka', 'Spring JPA', 'React', 'TailwindCSS'],
            disableLink: true,        
            disableGithub: false
        },
    ];
</script>

<div class="py-20 px-4 sm:px-6 lg:px-8"> 
    <div class="container mx-auto">
        
        <h1 
            class="text-4xl md:text-5xl font-extrabold text-center mb-4 text-white"
            in:fly={{ y: -30, duration: 600 }}
        >
            Proyectos
        </h1>
        
        <p 
            class="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto"
            in:fade={{ duration: 800, delay: 200 }}
        >
            Estos son los proyectos en los que he trabajado
         </p>

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
             {#each allProjects as project, i (project.title)}
                 <div in:fly={{ y: 50, duration: 800, delay: 400 + (i * 150) }}>
                     <ProjectCard {...project} /> 
                 </div>
            {/each}
        </div>
    </div>
</div>