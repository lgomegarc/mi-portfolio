<script>
    export let title;
    export let description;
    export let image;
    export let link;
    export let github;
    /**
	 * @type {any[]}
	 */
     export let tags = [];

    // NUEVO → flags para desactivar botones
    export let disableLink = false;
    export let disableGithub = false;
</script>

<div class="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-500/50 
            transition duration-300 transform hover:-translate-y-1 
            border border-gray-700 flex flex-col h-full">

    <img src={image} alt={`Captura de pantalla de ${title}`} 
         class="w-full h-52 object-cover" />

    <div class="p-6 flex flex-col flex-1">

        <h3 class="text-2xl font-bold text-white mb-3 leading-tight">
            {title}
        </h3>

        <div class="flex flex-wrap gap-2 gap-y-2 mb-4">
            {#each tags as tag}
                <span class="text-xs font-semibold px-3 py-1 rounded-full 
                             bg-cyan-700/30 text-cyan-400 border border-cyan-700">
                    {tag}
                </span>
            {/each}
        </div>

        <p class="text-gray-400 my-4 leading-snug mt-auto ">
            {description}
        </p>

        <div class="flex space-x-4">

            <!-- BOTÓN VER SITIO -->
            {#if !disableLink}
                <a 
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="bg-gradient-to-r from-cyan-500 to-blue-600 
                           text-white font-medium py-2 px-4 rounded-md 
                           hover:opacity-90 transition duration-300 shadow-md"
                >
                    Ver Sitio
                </a>
            {:else}
                <button 
                    disabled
                    class="bg-gray-600 text-gray-300 font-medium py-2 px-4 
                           rounded-md opacity-50 cursor-not-allowed"
                >
                    Ver Sitio
                </button>
            {/if}

            <!-- BOTÓN GITHUB -->
            {#if !disableGithub}
                <a 
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer" 
                    class="border border-gray-600 text-gray-300 font-medium 
                           py-2 px-4 rounded-md hover:bg-gray-700 
                           transition duration-300"
                >
                    GitHub
                </a>
            {:else}
                <button 
                    disabled
                    class="border border-gray-600 text-gray-500 font-medium 
                           py-2 px-4 rounded-md opacity-40 cursor-not-allowed"
                >
                    GitHub
                </button>
            {/if}

        </div>
    </div>
</div>
