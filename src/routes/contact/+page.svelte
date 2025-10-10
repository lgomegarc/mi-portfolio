<script>
  import SocialLinks from '$lib/components/SocialLinks.svelte';
  import emailjs from '@emailjs/browser';
  import { writable } from 'svelte/store';

  const contactInfo = [
    { icon: '✉️', label: 'Email', value: 'leilagomezgarcia@gmail.com' },
    { icon: '📞', label: 'Teléfono', value: '+34 722 76 44 83' },
    { icon: '📍', label: 'Ubicación', value: 'Remoto / Pontevedra, España' },
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

<div class="container py-16">
  <h1 class="text-4xl md:text-5xl font-extrabold text-center mb-6 text-gray-900">
    ¡Hablemos de tu proyecto!
  </h1>
  <p class="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
    ¿Tienes una idea o necesitas un desarrollador Svelte? Envíame un mensaje y te responderé lo antes posible.
  </p>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-2xl">

    <!-- Datos de contacto -->
    <div class="space-y-10">
      <h2 class="text-3xl font-bold text-gray-800 border-b pb-3 mb-4">Datos de Contacto Directo</h2>
      <div class="space-y-6">
        {#each contactInfo as info}
          <div class="flex items-center space-x-4">
            <div class="text-4xl">{info.icon}</div>
            <div>
              <p class="text-gray-500 text-sm font-medium">{info.label}</p>
              <p class="text-lg font-semibold text-gray-800">{info.value}</p>
            </div>
          </div>
        {/each}
      </div>

      <h3 class="text-2xl font-bold text-gray-800 pt-4">Conéctate</h3>
      <SocialLinks />
    </div>

    <!-- Formulario -->
    <div>
      <h2 class="text-3xl font-bold text-gray-800 border-b pb-3 mb-6">Formulario Rápido</h2>

      <form on:submit={handleSubmit} class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
          <input 
            type="text" 
            id="name" 
            name="name"
            required 
            class="w-full border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="Tu Nombre"
          />
        </div>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
          <input 
            type="email" 
            id="email" 
            name="email"
            required 
            class="w-full border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="ejemplo@dominio.com"
          />
        </div>

        <div>
          <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
          <textarea 
            id="message" 
            name="message"
            rows="4" 
            required 
            class="w-full border border-gray-300 p-3 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 transition duration-150"
            placeholder="Describe tu proyecto o pregunta..."
          ></textarea>
        </div>

        <button 
          type="submit"
          class="w-full bg-indigo-600 text-white text-lg font-semibold py-3 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          {#if isSubmitting}Enviando...{/if}
          {#if !isSubmitting}Enviar Mensaje{/if}
        </button>

        {#if $statusMessage}
          <p class="mt-2 text-center text-sm font-medium text-gray-700">{$statusMessage}</p>
        {/if}
      </form>
    </div>

  </div>
</div>
