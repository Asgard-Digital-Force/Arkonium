<template>
  <div class="bg-[#0E1A24] min-h-screen text-[--texte-primaire]">
    <Navbar />
    <main>
      <HeroSection />
      <MethodSection />
      <OffersSection />
      <!-- Tu pourras ajouter TestimonialsSection ici si besoin -->
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import MethodSection from '@/components/MethodSection.vue'
import OffersSection from '@/components/OffersSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>
