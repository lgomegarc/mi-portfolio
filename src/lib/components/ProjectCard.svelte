<script>
    // Declaración de propiedades
    export let title;
    export let description;
    export let image;
    export let link;
    export let github;
     
    export let tags; 

    // Asignar valor por defecto DESPUÉS de la declaración
    if (!tags) {
        tags = [];
    }
</script>

<div class="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/50 transition duration-300 transform hover:-translate-y-1 border border-gray-700">
    
    <img src={image} alt={`Captura de pantalla de ${title}`} class="w-full h-52 object-cover" />
    
    <div class="p-6">
        <h3 class="text-2xl font-bold text-white mb-2">{title}</h3>
        
        <div class="flex flex-wrap gap-2 mb-4">
            {#if tags && tags.length > 0} 
                {#each tags as tag}
                    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-700/30 text-cyan-400 border border-cyan-700">
                        {tag}
                    </span>
                {/each}
            {/if}
        </div>

        <p class="text-gray-400 mb-5">{description}</p>
        
        <div class="flex space-x-4">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer external" 
                class="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium py-2 px-4 rounded-md hover:opacity-90 transition duration-300 shadow-md"
            >
                Ver Sitio
            </a>
            <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer external" 
                class="border border-gray-600 text-gray-300 font-medium py-2 px-4 rounded-md hover:bg-gray-700 transition duration-300"
            >
                GitHub
            </a>
        </div>
    </div>
</div>