<script>
    // Define tus habilidades y el nivel de cada una
    const skills = [
        { name: 'Svelte/SvelteKit', level: 'Experto', icon: 'fa-solid fa-code' },
        { name: 'Tailwind CSS', level: 'Avanzado', icon: 'fa-solid fa-paintbrush' },
        { name: 'Node.js/Express', level: 'Intermedio', icon: 'fa-brands fa-node-js' },
        { name: 'Bases de Datos (MongoDB)', level: 'Intermedio', icon: 'fa-solid fa-database' },
        { name: 'TypeScript', level: 'Avanzado', icon: 'fa-brands fa-js' },
        { name: 'RESTful APIs', level: 'Experto', icon: 'fa-solid fa-server' },
    ];
</script>

<svelte:head>
    <title>Sobre Mí | Leila</title>
    </svelte:head>

<div class="container py-12">
    <h1 class="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 border-b-4 border-primary inline-block pb-1">
        Sobre Mí
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
        <div class="md:col-span-1 flex flex-col items-center p-6 bg-secondary-bg rounded-xl shadow-lg">
            
            <div class="w-40 h-40 bg-gray-300 rounded-full mb-4 overflow-hidden border-4 border-primary shadow-xl flex items-center justify-center text-4xl text-white font-bold">
                L
            </div>
            <h2 class="text-3xl font-bold text-gray-800">Leila</h2>
            <p class="text-md text-gray-600 mb-4">Desarrolladora Web Full Stack</p>

            <a href="/contact" class="bg-primary text-white font-semibold py-2 px-6 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md">
                Contáctame
            </a>
        </div>

        <div class="md:col-span-2">
            
            <section class="mb-10">
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">Mi Historia y Trayectoria</h2>
                <p class="text-lg text-gray-700 leading-relaxed mb-4">
                    ¡Hola! Soy Leila, una desarrolladora Full Stack especializada en la creación de aplicaciones web modernas, rápidas y escalables. Mi pasión se centra en el ecosistema **JavaScript**, con un enfoque en **SvelteKit** para el frontend y **Node.js/Express** para el backend.
                </p>
                <p class="text-lg text-gray-700 leading-relaxed">
                    Aporto una sólida experiencia en diseño UI/UX, utilizando Tailwind CSS para maquetar interfaces limpias y responsivas. Mi objetivo es transformar ideas complejas en soluciones digitales funcionales y atractivas.
                </p>
            </section>

            <section>
                <h2 class="text-3xl font-semibold text-gray-800 mb-4">Skills Técnicas</h2>
                <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {#each skills as skill}
                        <div class="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition duration-200">
                            <i class="{skill.icon} text-primary text-xl"></i> 
                            <div>
                                <p class="text-md font-semibold text-gray-800">{skill.name}</p>
                                <p class="text-sm text-gray-500">{skill.level}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </section>
        </div>
    </div>
</div>