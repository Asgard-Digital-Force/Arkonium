<template>
  <header class="sticky top-0 z-50 bg-[#0E1A24]/95 backdrop-blur-md flex justify-between items-center px-8 py-6">
    <img src="@/assets/logo.png" alt="Logo Arkonium" class="h-10 w-auto mr-3" />
    <nav>
      <RouterLink to ="/" class="ml-6 text-ark-accent hover:underline">Arkonium</RouterLink>
      <a v-if="route.path === '/'" href="#methode" class="ml-6 text-ark-accent hover:underline">Méthode</a>
      <a v-if="route.path === '/'" href="#offres" class="ml-6 text-ark-accent hover:underline">Offres</a>
<!--      <a href="#temoignages" class="ml-6 text-ark-accent hover:underline">Témoignages</a>-->
      <a v-if="route.path === '/'" href="#contact" class="ml-6 text-ark-accent hover:underline">Contact</a>
      <RouterLink to="/ressources" class="ml-6 text-ark-accent hover:underline">Ressources</RouterLink>
    </nav>
    <a href="https://cal.com/arkonium/" class="cta ml-8 text-ark-accent">Planifier un appel</a>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>