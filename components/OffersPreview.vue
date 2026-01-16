<template>
  <section id="offres" class="py-20 px-6 bg-ark-bg">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-ark-accent text-center mb-4">
        Nos accompagnements
      </h2>
      <p class="text-ark-text-secondary text-center mb-12 max-w-2xl mx-auto">
        Quatre formules adaptées à chaque étape de votre projet, du diagnostic initial au scaling avancé.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContentList path="/offres" v-slot="{ list }">
          <div
            v-for="offre in list"
            :key="offre._path"
            class="bg-ark-card p-6 rounded-ark border-l-4 border-ark-accent hover:bg-ark-card-hover transition duration-300"
          >
            <div class="flex items-center gap-3 mb-3">
              <span class="text-2xl">{{ offre.icon }}</span>
              <h3 class="text-xl font-bold text-ark-accent">{{ offre.title }}</h3>
            </div>
            <p class="text-ark-text-secondary text-sm mb-3 italic">{{ offre.subtitle }}</p>
            <p class="text-ark-text mb-4">{{ offre.description }}</p>
            <ul class="space-y-2 mb-4">
              <li v-for="point in offre.points" :key="point" class="text-ark-text-secondary text-sm flex items-start gap-2">
                <span class="text-ark-accent">✓</span>
                {{ point }}
              </li>
            </ul>
            <NuxtLink
              :to="offre._path"
              class="text-ark-accent font-bold hover:underline"
            >
              En savoir plus →
            </NuxtLink>
          </div>
        </ContentList>
      </div>

      <div class="text-center mt-12">
        <NuxtLink
          to="/offres"
          class="inline-block border-2 border-ark-accent text-ark-accent px-8 py-3 rounded-ark font-bold hover:bg-ark-accent hover:text-ark-bg transition duration-300"
        >
          Voir toutes les offres
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
