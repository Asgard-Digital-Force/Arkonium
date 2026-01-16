<template>
  <div class="pt-20 px-6">
    <!-- Header -->
    <section class="max-w-5xl mx-auto text-center py-12">
      <h1 class="text-4xl md:text-5xl font-bold text-ark-accent mb-6">
        Ressources & outils
      </h1>
      <p class="text-xl text-ark-text max-w-2xl mx-auto">
        Une sélection de contenus pratiques pour structurer ton produit, clarifier ta stratégie technique et gagner en autonomie.
      </p>
    </section>

    <!-- Outils -->
    <section class="max-w-5xl mx-auto pb-12">
      <h2 class="text-2xl font-bold text-ark-accent mb-6">Outils</h2>
      <ContentList path="/ressources" :query="{ where: { category: 'outil' }, sort: [{ order: 1 }] }" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in list"
            :key="item._path"
            class="bg-ark-card p-6 rounded-ark border-l-4 border-ark-accent"
          >
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ item.icon }}</span>
              <h3 class="text-xl font-bold text-ark-accent">{{ item.title }}</h3>
            </div>
            <p class="text-ark-text mb-4">{{ item.description }}</p>

            <!-- Lien selon le type -->
            <a
              v-if="item.type === 'external'"
              :href="item.externalUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-ark-accent font-bold hover:underline"
            >
              Accéder →
            </a>
            <NuxtLink
              v-else-if="item.type === 'coming-soon'"
              to="/coming-soon"
              class="text-ark-text-secondary font-bold"
            >
              Bientôt disponible
            </NuxtLink>
            <a
              v-else-if="item.downloadUrl"
              :href="item.downloadUrl"
              target="_blank"
              class="text-ark-accent font-bold hover:underline"
            >
              Télécharger →
            </a>
          </div>
        </div>
      </ContentList>
    </section>

    <!-- Livrets -->
    <section class="max-w-5xl mx-auto pb-20">
      <h2 class="text-2xl font-bold text-ark-accent mb-2">
        <span class="bg-ark-card px-3 py-1 rounded-md text-lg uppercase">
          📘 Nos livrets pratiques
        </span>
      </h2>
      <p class="text-ark-text-secondary mb-8">
        Une série de guides synthétiques et actionnables pour renforcer ta clarté produit, technique et stratégique.
      </p>

      <ContentList path="/ressources" :query="{ where: { category: 'livret' }, sort: [{ order: 1 }] }" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            v-for="item in list"
            :key="item._path"
            class="bg-ark-card p-6 rounded-ark border-l-4 border-ark-accent hover:bg-ark-card-hover transition duration-300"
          >
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ item.icon }}</span>
              <h3 class="text-xl font-bold text-ark-accent">{{ item.title }}</h3>
            </div>
            <p class="text-ark-text mb-4">{{ item.description }}</p>

            <a
              v-if="item.downloadUrl"
              :href="item.downloadUrl"
              target="_blank"
              class="text-ark-accent font-bold hover:underline"
            >
              Télécharger →
            </a>
          </div>
        </div>
      </ContentList>
    </section>

    <!-- CTA Newsletter -->
    <section class="bg-ark-card-hover py-16 px-6 -mx-6">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl font-bold text-ark-accent mb-4">
          Envie de plus de contenu ?
        </h2>
        <p class="text-ark-text mb-8">
          Inscrivez-vous à la newsletter pour recevoir nos nouvelles ressources et articles.
        </p>
        <NewsletterForm />
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Ressources & outils – Arkonium',
  description: 'Téléchargez nos guides pratiques et utilisez nos outils pour structurer votre projet tech.'
})
</script>
