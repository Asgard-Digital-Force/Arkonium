<template>
  <div class="min-h-screen flex items-center justify-center px-6 pt-16">
    <div class="text-center max-w-lg">
      <h1 class="text-4xl md:text-5xl font-bold text-ark-accent mb-6">
        Bientôt disponible
      </h1>
      <p class="text-ark-text mb-8">
        Cette page est en cours de construction. Revenez bientôt pour découvrir son contenu.
      </p>
      <NuxtLink
        to="/"
        class="inline-block bg-ark-accent text-ark-bg px-8 py-3 rounded-ark font-bold hover:bg-ark-text transition duration-300"
      >
        Retour à l'accueil
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Bientôt disponible – Arkonium',
  description: 'Cette page est en cours de construction.'
})
</script>
