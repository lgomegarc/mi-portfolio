<script>
    // Define tus enlaces sociales aquí
    const socialMedia = [
        { name: 'GitHub', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.087-.744.084-.693.084-.693 1.205.086 1.838 1.235 1.838 1.235 1.07 1.835 2.809 1.305 3.494.998.108-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.292-1.552 3.3-.86 3.3-.86.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.923.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.79 24 17.26 24 12 24 5.373 18.627 0 12 0z"/></svg>' },
        { name: 'LinkedIn', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4.088-3.262-4.088 0v5.604h-3v-11h3v1.765c1.396-2.586 7.088-2.77 7.088 2.583v6.652z"/></svg>' },
        // Puedes añadir más como X/Twitter, un Blog, etc.
    ];
    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/lgomegarc', // ✅ cambia este por tu usuario real
            icon: 'fa-brands fa-github'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/leila-begoña-gómez-garcía-27961425b', // ✅ cambia este por tu URL real
            icon: 'fa-brands fa-linkedin'
        }
    ];
</script>

<div class="flex space-x-6">
    {#each socialLinks as link}
        <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-gray-600 hover:text-primary transition transform hover:scale-110 duration-300"
            aria-label={link.name}
        >
            <i class={link.icon + " text-3xl"}></i>
        </a>
    {/each}
</div>