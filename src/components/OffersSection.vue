<template>
  <section id="offres" class="py-20 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-ark-accent text-center mb-6">
      <span class="tag-methode bg-ark-bg text-ark-accent px-3 py-1 rounded-md text-lg uppercase font-bold">
        Nos accompagnements
      </span>
    </h2>
    <p class="text-center text-ark-text max-w-2xl mx-auto mb-12">
      Chaque offre est pensée pour répondre à un moment clé de votre projet. Audit, accompagnement, gouvernance...
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div v-for="(offre, idx) in offres" :key="idx" class="flip-card bg-[#13212E] p-8 rounded-[10px] border-l-4 border-ark-accent shadow hover:scale-105 transition-transform">
        <h3 class="text-xl font-bold text-ark-accent mb-2">{{ offre.nom }}</h3>
        <p class="text-ark-text mb-2">{{ offre.sousTitre }}</p>
        <ul class="list-none mb-2">
          <li v-for="(item, i) in offre.points" :key="i" class="text-ark-text pl-4 relative mb-1 before:content-['✔'] before:absolute before:left-0 before:text-ark-accent before:font-bold">
            {{ item }}
          </li>
        </ul>
        <p class="text-ark-text-secondary text-sm mt-2">{{ offre.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const offres = [
  {
    nom: 'Ymir',
    sousTitre: 'Vous avez une idée ? Je vous aide à poser les fondations.',
    points: [
      'Audit technique initial',
      'Roadmap MVP personnalisée',
      'Sécurisation des premiers choix tech',
    ],
    description: "Vous avez des idées plein la tête, mais rien n’est encore structuré. En 5 semaines, on transforme ce flou en feuille de route claire et actionable."
  },
  {
    nom: 'Verdandi',
    sousTitre: 'Vous avancez, mais le cap vacille ? Je vous le stabilise.',
    points: [
      'Coaching produit-tech hebdomadaire',
      'Suivi des sprints et arbitrage MVP',
      'Revue de code & validation technique',
    ],
    description: "Vous êtes lancé, mais chaque semaine ramène son lot de doutes et d’imprévus. Je deviens votre boussole..."
  },
  {
    nom: 'Asgard',
    sousTitre: 'Vous grandissez ? Je vous aide à gouverner.',
    points: [
      'CTO externalisé 3 mois',
      'Suivi équipe & infra',
      'Gouvernance, sécurité & scalabilité',
    ],
    description: "Votre produit décolle. Votre équipe grandit. Mais les fondations craquent. Je structure, j’arbitre, je sécurise."
  },
  {
    nom: 'Skald',
    sousTitre: 'Vous avez une situation atypique ? Je m’adapte.',
    points: [
      'Coaching ou audit ciblé',
      'Missions ponctuelles ou de transition',
      'Accompagnement sur mesure',
    ],
    description: "Il n’y a pas de cas standard. Si vous êtes bloqué sur un point technique, stratégique ou organisationnel, j’interviens à la carte."
  }
]
</script>
