<script>
    import SpringIcon from '$lib/assets/springboot.svg?component'
    // Lista de skills de ejemplo, puedes modificarla
    let skills = [
        { name: "Java", level: "Avanzado", icon: "fab fa-java" },
        { name: "Spring Boot", level: "Avanzado", icon: SpringIcon },
        { name: "HTML", level: "Avanzado", icon: "fab fa-html5" },
        { name: "CSS", level: "Avanzado", icon: "fab fa-css3-alt" },
        { name: "JavaScript", level: "Basico", icon: "fab fa-js" },
        { name: "SvelteKit", level: "Basico", icon: "si si-svelte" },
        { name: "Tailwind CSS", level: "Avanzado", icon: "si si-tailwindcss" }
    ];
</script>
<div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 py-12 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-12 border-b-4 border-cyan-400 inline-block pb-1">
            Sobre Mí
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
            <!-- Tarjeta lateral con foto -->
            <div class="md:col-span-1 flex flex-col items-center p-8 bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-700">
                
                <!-- Foto -->
                <div class="w-44 h-44 rounded-full mb-6 overflow-hidden border-4 border-cyan-400 shadow-lg flex items-center justify-center transform hover:scale-105 transition duration-300">
                    <img src="/Profile_Image.jpg" alt="Leila" class="w-full h-full object-cover" />
                </div>

                
                <h2 class="text-3xl font-bold text-white mb-1">Leila</h2>
                <p class="text-md text-gray-200 mb-6">Desarrolladora Web Full Stack</p>

                <a href="/contact" class="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-semibold py-3 px-8 rounded-lg hover:opacity-90 transform hover:scale-105 transition duration-300 shadow-md">
                    Contáctame
                </a>
            </div>

            <!-- Contenido principal -->
            <div class="md:col-span-2 flex flex-col justify-center space-y-6">
                
                <section class="p-6 rounded-xl shadow-lg border border-gray-700 bg-gray-900/80 backdrop-blur-md">
                    <h2 class="text-3xl font-semibold text-white mb-4">Mi Historia y Trayectoria</h2>
                    <p class="text-lg text-gray-200 leading-relaxed mb-4">
                        ¡Hola! Soy Leila, una desarrolladora Full Stack especializada en la creación de aplicaciones web modernas, rápidas y escalables. Mi pasión se centra en el ecosistema <strong>JavaScript</strong>, con un enfoque en <strong>SvelteKit</strong> para el frontend y <strong>Node.js/Express</strong> para el backend.
                    </p>
                    <p class="text-lg text-gray-200 leading-relaxed">
                        Aporto una sólida experiencia en diseño UI/UX, utilizando Tailwind CSS para maquetar interfaces limpias y responsivas. Mi objetivo es transformar ideas complejas en soluciones digitales funcionales y atractivas.
                    </p>
                </section>

                <section class="p-6 rounded-xl shadow-lg border border-gray-700 bg-gray-900/80 backdrop-blur-md">
                    <h2 class="text-3xl font-semibold text-white mb-4">Skills Técnicas</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {#each skills as skill}
                            <div class="flex items-center space-x-3 p-4 bg-gray-800/70 rounded-lg shadow-md border border-gray-600 hover:shadow-xl hover:bg-gray-700 transition duration-200">
                                <i class="{skill.icon} text-cyan-400 text-xl"></i> 
                                <div>
                                    <p class="text-md font-semibold text-white">{skill.name}</p>
                                    <p class="text-sm text-gray-200">{skill.level}</p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </section>
            </div>
        </div>
    </div>
</div>
