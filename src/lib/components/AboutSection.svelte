<script>
	// 1. IMPORTAMOS las transiciones de Svelte
	import { fly, fade } from 'svelte/transition';

	// 2. IMPORTAMOS el componente Icon de Iconify
	import Icon from '@iconify/svelte';

	// Lista de skills
	let skills = [
		{ name: 'Java', level: 'Avanzado', icon: 'devicon-plain:java' },
		{ name: 'Spring Boot', level: 'Avanzado', icon: 'simple-icons:springboot' },
		{ name: 'HTML', level: 'Avanzado', icon: 'devicon-plain:html5' },
		{ name: 'CSS', level: 'Avanzado', icon: 'devicon-plain:css3' },
		{ name: 'JavaScript', level: 'Basico', icon: 'devicon-plain:javascript' },
		{ name: 'SvelteKit', level: 'Basico', icon: 'simple-icons:svelte' },
        { name: 'Tailwind CSS', level: 'Basico', icon: 'simple-icons:tailwindcss' },
        { name: 'Typescript', level: 'Basico', icon: 'simple-icons:typescript' }
	];
</script>

<div class="px-4 sm:px-6 lg:px-8">
	<div class="container mx-auto">
		<h1
			class="inline-block border-b-4 border-cyan-400 pb-1 text-4xl font-extrabold text-white sm:text-5xl"
			in:fly={{ y: -30, duration: 600 }}
		>
			Sobre Mí
		</h1>

		<div class="mt-4 grid grid-cols-1 items-start gap-12 md:grid-cols-3 md:items-center">
			<div
				class="flex h-fit flex-col items-center rounded-2xl border border-gray-700 bg-gray-900/80 p-8 shadow-2xl backdrop-blur-md md:col-span-1"
				in:fly={{ x: -50, duration: 800, delay: 200 }}
			>
				<div
					class="mb-6 flex h-44 w-44 transform items-center justify-center overflow-hidden rounded-full border-4 border-cyan-400 shadow-lg transition duration-300 hover:scale-105"
				>
					<img src="/Profile_Image.jpg" alt="Leila" class="h-full w-full object-cover" />
				</div>

				<h2 class="mb-1 text-3xl font-bold text-white">Leila</h2>
				<p class="text-md mb-6 text-gray-200">Desarrolladora Backend</p>

				<a
					href="/contact"
					class="transform rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-8 py-3 font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:opacity-90"
				>
					Contáctame
				</a>
			</div>

			<div class="flex max-w-4xl flex-col justify-center space-y-8 md:col-span-2">
				<section
					class="rounded-xl border border-gray-700 bg-gray-900/80 p-6 shadow-lg backdrop-blur-md"
					in:fly={{ x: 50, duration: 800, delay: 400 }}
				>
					<h2 class="mb-4 text-3xl font-semibold text-cyan-400">Mi Historia y Trayectoria</h2>
					<p class="text-s mb-4 leading-relaxed text-gray-200 text-justify">
						¡Hola! Soy Leila, una desarrolladora <strong>backend</strong>
                        especializada en la creación de aplicaciones web robustas y escalables,
                        principalmente con <strong>Java</strong> y <strong>Spring Boot</strong>.
                        También tengo conocimientos básicos en <strong>TypeScript</strong>,
                        <strong>Svelte</strong> y <strong>Tailwind CSS</strong> para complementar el desarrollo frontend.
					</p>
					<p class="text-s leading-relaxed text-gray-200 text-justify">
						Me apasiona construir soluciones digitales que funcionen de manera eficiente y ordenada.
                        Mi objetivo es transformar ideas en aplicaciones funcionales, manteniendo siempre un enfoque
                        en buenas prácticas y escalabilidad.
					</p>
				</section>

				<section
					class="rounded-xl border border-gray-700 bg-gray-900/80 p-6 shadow-lg backdrop-blur-md"
					in:fade={{ duration: 1000, delay: 600 }}
				>
					<h2 class="mb-4 text-3xl font-semibold text-cyan-400">Skills técnicas</h2>
					<div class="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-4">
						{#each skills as skill (skill.name)}
							<div
								class="flex h-36 w-36 transform flex-col items-center justify-center rounded-xl border border-gray-600 bg-gray-800/70 p-4 text-center shadow-md transition duration-200 hover:scale-[1.05] hover:bg-gray-700 hover:shadow-xl"
							>
								<Icon icon={skill.icon} class="mb-2 text-4xl text-cyan-400" />
								<p class="text-md font-semibold text-white">{skill.name}</p>
								<p class="text-sm text-gray-200">{skill.level}</p>
							</div>
						{/each}
					</div>
				</section>
			</div>
		</div>
	</div>
</div>
