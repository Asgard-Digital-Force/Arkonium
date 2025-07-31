<template>
  <div class="bg-[#0E1A24] min-h-screen text-[--texte-primaire]">
    <Navbar />
      <div class="bg-[#1A2F3B] min-h-screen text-[--texte-primaire] px-6 py-20">
        <section class="max-w-5xl mx-auto text-center">
          <h1 class="text-4xl font-bold text-ark-accent mb-6">Ressources & outils</h1>
          <p class="text-ark-text max-w-2xl mx-auto mb-12">
            Une sélection de contenus pratiques pour t'aider à structurer ton produit, clarifier ta stratégie technique et gagner en autonomie.
          </p>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <!-- Starter Kit -->
          <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
            <h2 class="text-xl font-bold text-ark-accent mb-2">📦 Starter Kit CTO</h2>
            <p class="text-ark-text mb-4">Un kit PDF + Notion pour poser les bases de ton rôle de CTO ou structurer un projet naissant.</p>
<!--            <a href="/starter-kit.pdf" target="_blank" class="text-ark-accent font-bold hover:underline">Télécharger →</a>-->
            <RouterLink to="/coming-soon" class="text-ark-accent font-bold hover:underline">Télécharger →</RouterLink>
          </div>

          <!-- Auto-diagnostic -->
          <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
            <h2 class="text-xl font-bold text-ark-accent mb-2">🧠 Auto-diagnostic express</h2>
            <p class="text-ark-text mb-4">5 minutes pour évaluer ta maturité produit-tech. Gratuit, sans inscription.</p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdO-txhbPsl6NLgNs4IETowftl4gFge8_HLbIkOm5XmFu9MxQ/viewform?usp=header"
               target="_blank" class="text-ark-accent font-bold hover:underline">Lancer le quiz →</a>
          </div>

          <!-- Articles à lire -->
          <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
            <h2 class="text-xl font-bold text-ark-accent mb-2">📚 Articles LinkedIn sélectionnés</h2>
            <p class="text-ark-text mb-4">Une sélection de posts à fort impact sur la clarté produit, la gouvernance ou la technique.</p>
            <a href="https://www.linkedin.com/in/arnaud-oltra/recent-activity/all/" target="_blank" class="text-ark-accent font-bold hover:underline">Voir les publications →</a>
          </div>

          <!-- Ressource future -->
          <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
            <h2 class="text-xl font-bold text-ark-accent mb-2">🧰 Bientôt : outils interactifs</h2>
            <p class="text-ark-text mb-4">Des canevas Notion, des scripts à personnaliser, des mini-cours pour les CTO en devenir.</p>
            <p class="text-ark-text-secondary text-sm italic">📬 Abonne-toi à la newsletter pour être notifié.</p>
          </div>
        </section>
      </div>

    <section class="py-20 max-w-5xl mx-auto">
      <h2 class="text-3xl font-bold text-ark-accent text-center mb-6">
    <span class="bg-ark-bg text-ark-accent px-3 py-1 rounded-md text-lg uppercase font-bold">
      📘 Nos livrets pratiques
    </span>
      </h2>
      <p class="text-center text-ark-text max-w-2xl mx-auto mb-12">
        Une série de guides synthétiques et actionnables pour renforcer ta clarté produit, technique et stratégique.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <!-- Pilier Produit -->
        <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
          <h3 class="text-xl font-bold text-ark-accent mb-2">🧩 Clarté Produit</h3>
          <p class="text-ark-text mb-4">Pose les bases de ton produit, évite les fonctionnalités inutiles, et construis avec justesse.</p>
<!--          <a href="/pdf/livret-produit.pdf" target="_blank" class="text-ark-accent font-bold hover:underline">Télécharger →</a>-->
          <RouterLink to="/coming-soon" class="text-ark-accent font-bold hover:underline">Télécharger →</RouterLink>
        </div>

        <!-- Pilier Technique -->
        <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
          <h3 class="text-xl font-bold text-ark-accent mb-2">🛠 Clarté Technique</h3>
          <p class="text-ark-text mb-4">Structure ton code, ton infrastructure et ta gouvernance pour éviter la dette technique.</p>
<!--          <a href="/pdf/livret-technique.pdf" target="_blank" class="text-ark-accent font-bold hover:underline">Télécharger →</a>-->
          <RouterLink to="/coming-soon" class="text-ark-accent font-bold hover:underline">Télécharger →</RouterLink>
        </div>

        <!-- Pilier Sécurité -->
        <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
          <h3 class="text-xl font-bold text-ark-accent mb-2">🔒 Clarté Sécurité</h3>
          <p class="text-ark-text mb-4">Découvre les fondamentaux d’une sécurité saine et proportionnée dès le départ.</p>
<!--          <a href="/pdf/livret-securite.pdf" target="_blank" class="text-ark-accent font-bold hover:underline">Télécharger →</a>-->
          <RouterLink to="/coming-soon" class="text-ark-accent font-bold hover:underline">Télécharger →</RouterLink>
        </div>

        <!-- Pilier Croissance -->
        <div class="bg-[#13212E] p-6 rounded-lg border-l-4 border-ark-accent shadow">
          <h3 class="text-xl font-bold text-ark-accent mb-2">📈 Clarté Croissance</h3>
          <p class="text-ark-text mb-4">Anticipe les points de rupture, automatise, et garde le cap sans perdre l’essentiel.</p>
<!--          <a href="/pdf/livret-croissance.pdf" target="_blank" class="text-ark-accent font-bold hover:underline">Télécharger →</a>-->
          <RouterLink to="/coming-soon" class="text-ark-accent font-bold hover:underline">Télécharger →</RouterLink>
        </div>
      </div>
    </section>


    <FooterSection class="mt-10" />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import FooterSection from '@/components/FooterSection.vue'
import { RouterLink } from 'vue-router'
</script>
