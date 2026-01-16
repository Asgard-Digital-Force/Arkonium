<template>
  <article class="pt-20">
    <ContentDoc v-slot="{ doc }">
      <!-- Hero de l'offre -->
      <header class="bg-ark-card-hover py-16 px-6">
        <div class="max-w-4xl mx-auto text-center">
          <span class="text-6xl mb-4 block">{{ doc.icon }}</span>
          <h1 class="text-4xl md:text-5xl font-bold text-ark-accent mb-4">
            {{ doc.title }}
          </h1>
          <p class="text-xl text-ark-text-secondary italic mb-6">
            {{ doc.subtitle }}
          </p>
          <p class="text-lg text-ark-text max-w-2xl mx-auto">
            {{ doc.description }}
          </p>
        </div>
      </header>

      <!-- Points clés -->
      <section class="bg-ark-bg py-12 px-6">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div
              v-for="point in doc.points"
              :key="point"
              class="bg-ark-card p-4 rounded-ark text-center"
            >
              <span class="text-ark-accent text-lg">✓</span>
              <p class="text-ark-text text-sm mt-2">{{ point }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contenu principal -->
      <section class="py-16 px-6">
        <div class="max-w-3xl mx-auto">
          <ContentRenderer :value="doc" class="prose prose-lg prose-invert max-w-none" />
        </div>
      </section>

      <!-- CTA -->
      <section class="bg-ark-card-hover py-16 px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="text-2xl md:text-3xl font-bold text-ark-accent mb-4">
            Intéressé par {{ doc.title }} ?
          </h2>
          <p class="text-ark-text mb-8">
            Discutons de votre projet pour voir si cette formule vous correspond.
          </p>
          <a
            :href="doc.cta?.link || 'https://cal.com/arkonium'"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block bg-ark-accent text-ark-bg px-8 py-3 rounded-ark font-bold hover:bg-ark-text transition duration-300"
          >
            {{ doc.cta?.label || 'Planifier un appel' }}
          </a>
        </div>
      </section>

      <!-- Navigation vers autres offres -->
      <section class="py-16 px-6 bg-ark-bg">
        <div class="max-w-5xl mx-auto">
          <h3 class="text-xl font-bold text-ark-accent text-center mb-8">
            Découvrir les autres offres
          </h3>
          <ContentList path="/offres" v-slot="{ list }">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <NuxtLink
                v-for="offre in list.filter(o => o._path !== doc._path)"
                :key="offre._path"
                :to="offre._path"
                class="bg-ark-card p-6 rounded-ark hover:bg-ark-card-hover transition duration-300 text-center"
              >
                <span class="text-3xl mb-2 block">{{ offre.icon }}</span>
                <h4 class="text-lg font-bold text-ark-accent">{{ offre.title }}</h4>
                <p class="text-ark-text-secondary text-sm">{{ offre.subtitle }}</p>
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

// SEO dynamique basé sur le contenu
const { data: doc } = await useAsyncData(`offre-${route.path}`, () =>
  queryContent(route.path).findOne()
)

if (doc.value) {
  useSeoMeta({
    title: `${doc.value.title} – ${doc.value.subtitle} | Arkonium`,
    description: doc.value.description
  })
}
</script>
