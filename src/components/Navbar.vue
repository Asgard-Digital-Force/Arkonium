<template>
  <header
      :class="[
      'fixed top-0 w-full z-50 h-16 flex items-center transition-all duration-300 px-6',
      isScrolled ? 'backdrop-blur-md bg-[#0E1A24]/90 shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto flex justify-between items-center w-full">
      <!-- Logo -->
      <img src="@/assets/logo.png" alt="Logo Arkonium" class="h-10 w-auto" />

      <!-- Menu Desktop -->
      <ul class="hidden md:flex items-center space-x-6 text-ark-accent">
        <li><RouterLink to="/" class="nav-link"><i class="fa-solid fa-house"></i> Accueil</RouterLink></li>
        <li v-if="route.path === '/'"><a href="#methode" class="nav-link"><i class="fa-solid fa-cogs"></i> Méthode</a></li>
        <li v-if="route.path === '/'"><a href="#offres" class="nav-link"><i class="fa-solid fa-box-open"></i> Offres</a></li>
        <li v-if="route.path === '/'"><a href="#contact" class="nav-link"><i class="fa-solid fa-envelope"></i> Contact</a></li>
        <li><RouterLink to="/ressources" class="nav-link"><i class="fa-solid fa-book-open"></i> Ressources</RouterLink></li>
        <li>
          <a href="https://cal.com/arkonium" class="nav-link text-ark-accent font-bold">
            <i class="fa-solid fa-calendar"></i> Planifier un appel
          </a>
        </li>
      </ul>

      <!-- Burger menu -->
      <button @click="toggleMenu" class="md:hidden text-ark-accent text-2xl focus:outline-none">
        <div class="space-y-1">
          <div class="w-6 h-0.5 bg-ark-accent"></div>
          <div class="w-6 h-0.5 bg-ark-accent"></div>
          <div class="w-6 h-0.5 bg-ark-accent"></div>
        </div>
      </button>
    </div>

    <!-- Overlay (fond noir) -->
    <div
        v-if="isMenuActive"
        @click="toggleMenu"
        class="fixed inset-0 z-40 bg-black bg-opacity-60 md:hidden"
    ></div>

    <!-- Sidebar Mobile -->
    <div
        :class="[
        'fixed top-0 right-0 w-64 h-full z-50 bg-gradient-to-b from-[#0E1A24] to-[#1a2d3a] text-white transform transition-transform duration-300 ease-in-out shadow-lg md:hidden',
        isMenuActive ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex justify-end p-4">
        <button @click="toggleMenu" class="text-3xl text-ark-accent">&times;</button>
      </div>
      <ul class="space-y-5 p-6 text-lg bg-[#0E1A24]">
        <li><RouterLink @click="toggleMenu" to="/"><i class="fa-solid fa-house"></i> Accueil</RouterLink></li>
        <li v-if="route.path === '/'"><a @click="toggleMenu" href="#methode"><i class="fa-solid fa-cogs"></i> Méthode</a></li>
        <li v-if="route.path === '/'"><a @click="toggleMenu" href="#offres"><i class="fa-solid fa-box-open"></i> Offres</a></li>
        <li v-if="route.path === '/'"><a @click="toggleMenu" href="#contact"><i class="fa-solid fa-envelope"></i> Contact</a></li>
        <li><RouterLink @click="toggleMenu" to="/ressources"><i class="fa-solid fa-book-open"></i> Ressources</RouterLink></li>
        <li>
          <a @click="toggleMenu" href="https://cal.com/arkonium" class="text-ark-accent font-semibold">
            <i class="fa-solid fa-calendar"></i> Planifier un appel
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const isMenuActive = ref(false)
const isScrolled = ref(false)
const route = useRoute()

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav-link {
  @apply hover:text-green-400 transition duration-300;
}
</style>
