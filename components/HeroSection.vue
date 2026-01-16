<template>
  <section class="relative min-h-screen flex items-center justify-center bg-ark-bg px-6 pt-16">
    <div class="max-w-4xl text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-ark-accent mb-6">
        Structurer. Sécuriser. Scaler.
      </h1>
      <p class="text-xl md:text-2xl text-ark-text mb-8 max-w-2xl mx-auto">
        Arkonium accompagne les fondateurs de SaaS et les équipes tech ambitieuses
        pour transformer le flou en exécution.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/offres"
          class="bg-ark-accent text-ark-bg px-8 py-3 rounded-ark font-bold hover:bg-ark-text transition duration-300"
        >
          Découvrir les offres
        </NuxtLink>
        <a
          href="https://cal.com/arkonium"
          target="_blank"
          rel="noopener noreferrer"
          class="border-2 border-ark-accent text-ark-accent px-8 py-3 rounded-ark font-bold hover:bg-ark-accent hover:text-ark-bg transition duration-300"
        >
          Planifier un appel
        </a>
      </div>
    </div>
  </section>
</template>
