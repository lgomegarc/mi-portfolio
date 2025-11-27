<script>
	import { fly, fade } from 'svelte/transition';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import emailjs from '@emailjs/browser';
	import { writable } from 'svelte/store';

	const contactInfo = [
		{ icon: '✉️', label: 'Email', value: 'leilagomezgarcia@gmail.com' },
		{ icon: '📞', label: 'Teléfono', value: '+34 722 76 44 83' },
		{ icon: '📍', label: 'Ubicación', value: 'Remoto / Pontevedra, España' }
	];

	const serviceID = 'service_iqfu8xj';
	const templateID = 'template_gcnd671';
	const publicKey = 'd0tRwp_1AOxLyJWbS';

	let isSubmitting = false;
	let statusMessage = writable('');

	/**
	 * @param {{ preventDefault: () => void; target: any; }} event
	 */
	async function handleSubmit(event) {
		event.preventDefault();
		const form = event.target;

		const name = form.name.value;
		const email = form.email.value;
		const message = form.message.value;

		isSubmitting = true;
		statusMessage.set('');

		try {
			await emailjs.send(serviceID, templateID, { name, email, message }, publicKey);
			statusMessage.set('✅ ¡Mensaje enviado correctamente!');
			form.reset();
		} catch (err) {
			statusMessage.set('❌ Error al enviar el mensaje. Intenta de nuevo.');
			console.error(err);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="container mx-auto">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-2">
		<!-- Datos de contacto -->
		<div
			class="space-y-10 rounded-2xl border border-gray-700 bg-gray-900/80 p-8 shadow-2xl backdrop-blur-md"
			in:fly={{ x: -50, duration: 700 }}
		>
			<h2 class="mb-4 border-b pb-3 text-3xl font-bold text-white">Datos de Contacto Directo</h2>

			<div class="space-y-6">
				{#each contactInfo as info}
					<div class="flex items-center space-x-4">
						<div class="text-4xl">{info.icon}</div>
						<div>
							<p class="text-sm font-medium text-gray-400">{info.label}</p>
							<p class="text-lg font-semibold text-white">{info.value}</p>
						</div>
					</div>
				{/each}
			</div>

			<h3 class="pt-4 text-2xl font-bold text-white">Conéctate</h3>
			<SocialLinks />
		</div>

		<!-- Formulario -->
		<div
			class="rounded-2xl border border-gray-700 bg-gray-900/80 p-8 shadow-2xl backdrop-blur-md"
			in:fly={{ x: 50, duration: 700, delay: 200 }}
		>
			<h2 class="mb-6 border-b pb-3 text-3xl font-bold text-white">Formulario Rápido</h2>

			<form on:submit={handleSubmit} class="space-y-6">
				<div>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="mb-1 block text-sm font-medium text-gray-200">Nombre Completo</label>
					<input
						type="text"
						name="name"
						required
						class="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-cyan-400 focus:ring-cyan-400"
						placeholder="Tu Nombre"
					/>
				</div>

				<div>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="mb-1 block text-sm font-medium text-gray-200">Correo Electrónico</label>
					<input
						type="email"
						name="email"
						required
						class="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-cyan-400 focus:ring-cyan-400"
						placeholder="ejemplo@dominio.com"
					/>
				</div>

				<div>
					<!-- svelte-ignore a11y-label-has-associated-control -->
					<label class="mb-1 block text-sm font-medium text-gray-200">Mensaje</label>
					<textarea
						name="message"
						rows="4"
						required
						class="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white focus:border-cyan-400 focus:ring-cyan-400"
						placeholder="Describe tu proyecto o pregunta..."
					></textarea>
				</div>

				<button
					type="submit"
					class="w-full transform rounded-lg bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 py-3 text-lg font-semibold text-white shadow-md transition duration-300 hover:scale-105 hover:opacity-90 disabled:opacity-50"
					disabled={isSubmitting}
				>
					{#if isSubmitting}
						Enviando...
					{/if}
					{#if !isSubmitting}
						Enviar Mensaje
					{/if}
				</button>

				{#if $statusMessage}
					<p class="mt-2 text-center text-sm font-medium text-gray-200" in:fade>{$statusMessage}</p>
				{/if}
			</form>
		</div>
	</div>
</div>
