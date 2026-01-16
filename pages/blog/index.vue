<template>
  <div class="pt-20 px-6">
    <!-- Header -->
    <section class="max-w-5xl mx-auto text-center py-12">
      <h1 class="text-4xl md:text-5xl font-bold text-ark-accent mb-6">
        Blog
      </h1>
      <p class="text-xl text-ark-text max-w-2xl mx-auto">
        Réflexions, conseils et retours d'expérience sur la tech, le produit et le leadership technique.
      </p>
    </section>

    <!-- Liste des articles -->
    <section class="max-w-5xl mx-auto pb-20">
      <ContentList path="/blog" v-slot="{ list }">
        <div v-if="list.length" class="space-y-8">
          <NuxtLink
            v-for="article in list"
            :key="article._path"
            :to="article._path"
            class="group block bg-ark-card rounded-ark overflow-hidden hover:bg-ark-card-hover transition duration-300"
          >
            <!-- Image de couverture si disponible -->
            <div v-if="article.cover" class="w-full h-48 md:h-64 overflow-hidden">
              <img
                :src="article.cover"
                :alt="article.title"
                class="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            <div class="p-6 md:p-8">
              <!-- Meta -->
              <div class="flex flex-wrap items-center gap-4 text-sm text-ark-text-secondary mb-4">
                <time v-if="article.date">{{ formatDate(article.date) }}</time>
                <span v-if="article.readingTime">{{ article.readingTime }} min de lecture</span>
                <div v-if="article.tags" class="flex gap-2">
                  <span
                    v-for="tag in article.tags"
                    :key="tag"
                    class="bg-ark-bg px-2 py-1 rounded text-xs text-ark-accent"
                  >
                    #{{ tag }}
                  </span>
                </div>
              </div>

              <!-- Titre -->
              <h2 class="text-2xl md:text-3xl font-bold text-ark-accent group-hover:underline mb-4">
                {{ article.title }}
              </h2>

              <!-- Extrait -->
              <p class="text-ark-text mb-4">
                {{ article.description }}
              </p>

              <span class="text-ark-accent font-bold group-hover:underline">
                Lire l'article →
              </span>
            </div>
          </NuxtLink>
        </div>

        <!-- État vide -->
        <div v-else class="text-center py-20">
          <p class="text-ark-text-secondary text-lg mb-4">
            Aucun article pour le moment.
          </p>
          <p class="text-ark-text">
            Les premiers articles arrivent bientôt. Inscrivez-vous à la newsletter pour être notifié !
          </p>
        </div>
      </ContentList>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Blog – Arkonium',
  description: 'Réflexions, conseils et retours d\'expérience sur la tech, le produit et le leadership technique.'
})

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
