<script>
    // Declaración estándar de propiedades (sin valor por defecto)
    export let title;
    export let description;
    export let image;
    export let link;
    export let github;
    
    // 🔑 CLAVE: Declaramos 'tags' sin inicializar,
    // y luego le asignamos un valor por defecto si es 'undefined'
    export let tags; 

    // Asignar valor por defecto DESPUÉS de la declaración
    // Esto asegura que la propiedad existe, pero le da un valor seguro si no se pasa.
    if (!tags) {
        tags = [];
    }
</script>

<div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
    
    <img src={image} alt={`Captura de pantalla de ${title}`} class="w-full h-52 object-cover" />
    
    <div class="p-6">
        <h3 class="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        
        <div class="flex flex-wrap gap-2 mb-4">
            {#if tags && tags.length > 0} 
                {#each tags as tag}
                    <span class="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
                        {tag}
                    </span>
                {/each}
            {/if}
        </div>

        <p class="text-gray-600 mb-5">{description}</p>
        
        <div class="flex space-x-4">
            <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer external" 
                class="bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
                Ver Sitio
            </a>
            <a 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer external" 
                class="border border-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition duration-300"
            >
                GitHub
            </a>
        </div>
    </div>
</div>