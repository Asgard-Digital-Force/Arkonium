<template>
  <div class="bg-[#0E1A24] min-h-screen flex items-center justify-center text-center px-6">
    <div class="bg-[#13212E] p-10 rounded-xl shadow-lg max-w-md w-full">
      <h1 class="text-3xl md:text-4xl font-bold text-ark-accent mb-4">🚧 En cours de conception</h1>
      <p class="text-ark-text mb-6">
        Cette page est en préparation. On y travaille activement pour t’offrir encore plus de valeur très bientôt.
      </p>
      <RouterLink
          to="/"
          class="inline-block bg-ark-accent text-[#0E1A24] px-6 py-2 rounded-md font-bold hover:opacity-90 transition"
      >
        Retour à l’accueil
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
