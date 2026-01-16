<template>
  <div class="pt-20 px-6">
    <!-- Header -->
    <section class="max-w-5xl mx-auto text-center py-12">
      <h1 class="text-4xl md:text-5xl font-bold text-ark-accent mb-6">
        Nos accompagnements
      </h1>
      <p class="text-xl text-ark-text max-w-2xl mx-auto">
        Quatre formules inspirées de la mythologie nordique, adaptées à chaque étape de votre projet tech.
      </p>
    </section>

    <!-- Grille des offres -->
    <section class="max-w-5xl mx-auto pb-20">
      <ContentList path="/offres" v-slot="{ list }">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            v-for="offre in list"
            :key="offre._path"
            :to="offre._path"
            class="group bg-ark-card p-8 rounded-ark border-l-4 border-ark-accent hover:bg-ark-card-hover transition duration-300"
          >
            <div class="flex items-center gap-4 mb-4">
              <span class="text-4xl">{{ offre.icon }}</span>
              <div>
                <h2 class="text-2xl font-bold text-ark-accent group-hover:underline">
                  {{ offre.title }}
                </h2>
                <p class="text-ark-text-secondary italic">{{ offre.subtitle }}</p>
              </div>
            </div>

            <p class="text-ark-text mb-6">{{ offre.description }}</p>

            <ul class="space-y-2 mb-6">
              <li
                v-for="point in offre.points"
                :key="point"
                class="text-ark-text-secondary text-sm flex items-start gap-2"
              >
                <span class="text-ark-accent">✓</span>
                {{ point }}
              </li>
            </ul>

            <span class="text-ark-accent font-bold group-hover:underline">
              En savoir plus →
            </span>
          </NuxtLink>
        </div>
      </ContentList>
    </section>

    <!-- CTA -->
    <section class="bg-ark-card-hover py-16 px-6">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-2xl md:text-3xl font-bold text-ark-accent mb-4">
          Pas sûr de quelle offre choisir ?
        </h2>
        <p class="text-ark-text mb-8">
          Réservez un appel découverte gratuit et on trouvera ensemble la formule adaptée à vos besoins.
        </p>
        <a
          href="https://cal.com/arkonium"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block bg-ark-accent text-ark-bg px-8 py-3 rounded-ark font-bold hover:bg-ark-text transition duration-300"
        >
          Planifier un appel
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Nos offres – Arkonium',
  description: 'Découvrez nos quatre formules d\'accompagnement CTO : audit, accompagnement continu, CTO externalisé et gouvernance tech.'
})
</script>
