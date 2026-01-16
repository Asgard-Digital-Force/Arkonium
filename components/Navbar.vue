<template>
  <header
    :class="[
      'fixed top-0 w-full z-50 h-16 flex items-center transition-all duration-300 px-6',
      isScrolled ? 'backdrop-blur-md bg-ark-bg/90 shadow-md' : 'bg-transparent'
    ]"
  >
    <div class="container mx-auto flex justify-between items-center w-full">
      <!-- Logo -->
      <NuxtLink to="/">
        <img src="/logo.png" alt="Logo Arkonium" class="h-10 w-auto" />
      </NuxtLink>

      <!-- Menu Desktop -->
      <ul class="hidden md:flex items-center space-x-6 text-ark-accent">
        <li><NuxtLink to="/" class="nav-link">Accueil</NuxtLink></li>
        <li><NuxtLink to="/offres" class="nav-link">Offres</NuxtLink></li>
        <li><NuxtLink to="/blog" class="nav-link">Blog</NuxtLink></li>
        <li><NuxtLink to="/ressources" class="nav-link">Ressources</NuxtLink></li>
        <li>
          <a
            href="https://cal.com/arkonium"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-link text-ark-accent font-bold"
          >
            Planifier un appel
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
        'fixed top-0 right-0 w-64 h-full z-50 bg-gradient-to-b from-ark-bg to-ark-card-hover text-white transform transition-transform duration-300 ease-in-out shadow-lg md:hidden',
        isMenuActive ? 'translate-x-0' : 'translate-x-full'
      ]"
    >
      <div class="flex justify-end p-4">
        <button @click="toggleMenu" class="text-3xl text-ark-accent">&times;</button>
      </div>
      <ul class="space-y-5 p-6 text-lg bg-ark-bg">
        <li><NuxtLink @click="toggleMenu" to="/">Accueil</NuxtLink></li>
        <li><NuxtLink @click="toggleMenu" to="/offres">Offres</NuxtLink></li>
        <li><NuxtLink @click="toggleMenu" to="/blog">Blog</NuxtLink></li>
        <li><NuxtLink @click="toggleMenu" to="/ressources">Ressources</NuxtLink></li>
        <li>
          <a
            @click="toggleMenu"
            href="https://cal.com/arkonium"
            target="_blank"
            rel="noopener noreferrer"
            class="text-ark-accent font-semibold"
          >
            Planifier un appel
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup>
const isMenuActive = ref(false)
const isScrolled = ref(false)

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
