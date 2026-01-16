<template>
  <article class="pt-20">
    <ContentDoc v-slot="{ doc }">
      <!-- Hero full-width -->
      <header class="relative">
        <!-- Image de couverture -->
        <div v-if="doc.cover" class="w-full h-64 md:h-96 overflow-hidden">
          <img
            :src="doc.cover"
            :alt="doc.title"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-ark-bg to-transparent"></div>
        </div>

        <!-- Titre et meta -->
        <div :class="['px-6 py-12', doc.cover ? '-mt-32 relative z-10' : 'bg-ark-card-hover']">
          <div class="max-w-4xl mx-auto text-center">
            <!-- Tags -->
            <div v-if="doc.tags" class="flex justify-center gap-2 mb-6">
              <span
                v-for="tag in doc.tags"
                :key="tag"
                class="bg-ark-card px-3 py-1 rounded-full text-sm text-ark-accent"
              >
                #{{ tag }}
              </span>
            </div>

            <h1 class="text-3xl md:text-5xl font-bold text-ark-accent mb-6">
              {{ doc.title }}
            </h1>

            <!-- Meta -->
            <div class="flex flex-wrap justify-center items-center gap-4 text-ark-text-secondary">
              <time v-if="doc.date">{{ formatDate(doc.date) }}</time>
              <span v-if="doc.readingTime">•</span>
              <span v-if="doc.readingTime">{{ doc.readingTime }} min de lecture</span>
              <span v-if="doc.author">•</span>
              <span v-if="doc.author">Par {{ doc.author }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Introduction / Description -->
      <section v-if="doc.description" class="py-8 px-6 bg-ark-card-hover">
        <div class="max-w-3xl mx-auto">
          <p class="text-xl text-ark-text leading-relaxed text-center italic">
            {{ doc.description }}
          </p>
        </div>
      </section>

      <!-- Contenu de l'article -->
      <section class="py-16 px-6">
        <div class="max-w-3xl mx-auto">
          <ContentRenderer :value="doc" class="prose prose-lg prose-invert max-w-none" />
        </div>
      </section>

      <!-- Bloc citation/highlight si défini -->
      <section v-if="doc.highlight" class="py-12 px-6 bg-ark-card">
        <div class="max-w-4xl mx-auto">
          <blockquote class="text-2xl md:text-3xl font-serif text-ark-text text-center italic border-l-4 border-ark-accent pl-6">
            "{{ doc.highlight }}"
          </blockquote>
        </div>
      </section>

      <!-- CTA Newsletter -->
      <section class="py-16 px-6 bg-ark-card-hover">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl font-bold text-ark-accent mb-4">
            Cet article vous a plu ?
          </h2>
          <p class="text-ark-text mb-8">
            Inscrivez-vous à la newsletter pour recevoir les prochains articles directement dans votre boîte mail.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <!-- Articles similaires -->
      <section class="py-16 px-6 bg-ark-bg">
        <div class="max-w-5xl mx-auto">
          <h3 class="text-xl font-bold text-ark-accent text-center mb-8">
            À lire aussi
          </h3>
          <ContentList path="/blog" v-slot="{ list }">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NuxtLink
                v-for="article in list.filter(a => a._path !== doc._path).slice(0, 3)"
                :key="article._path"
                :to="article._path"
                class="bg-ark-card p-6 rounded-ark hover:bg-ark-card-hover transition duration-300"
              >
                <div v-if="article.tags" class="mb-2">
                  <span class="text-xs text-ark-accent">#{{ article.tags[0] }}</span>
                </div>
                <h4 class="text-lg font-bold text-ark-accent mb-2 hover:underline">
                  {{ article.title }}
                </h4>
                <p class="text-ark-text-secondary text-sm line-clamp-2">
                  {{ article.description }}
                </p>
              </NuxtLink>
            </div>
          </ContentList>
        </div>
      </section>
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute()

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// SEO dynamique
const { data: doc } = await useAsyncData(`blog-${route.path}`, () =>
  queryContent(route.path).findOne()
)

if (doc.value) {
  useSeoMeta({
    title: `${doc.value.title} | Blog Arkonium`,
    description: doc.value.description,
    ogImage: doc.value.cover || 'https://arkonium.tech/cover-og-arkonium.png'
  })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
