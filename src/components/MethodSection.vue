<template>
  <section id="methode" class="py-20 max-w-5xl mx-auto">
    <h2 class="text-3xl font-bold text-ark-accent text-center mb-6">
      <span class="tag-methode bg-ark-bg text-ark-accent px-3 py-1 rounded-md text-lg uppercase font-bold">
        Méthode Arkonium™
      </span>
    </h2>
    <p class="text-center text-ark-text max-w-2xl mx-auto mb-12">
      Pas de jargon. Pas de sauce magique. Juste une méthode concrète, éprouvée, qui transforme les projets hésitants en bases solides pour grandir sans dette.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      <div v-for="(bloc, idx) in items" :key="idx" class="carte bg-[#13212E] p-8 rounded-[10px] border-l-4 border-ark-accent">
        <h3 class="text-2xl font-bold text-ark-accent mb-2">{{ bloc.titre }}</h3>
        <small class="carte-tagline block text-ark-text text-sm italic mb-2">{{ bloc.tagline }}</small>
        <p class="text-ark-text">{{ bloc.texte }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    titre: 'Construire là où d\'autres hésitent',
    tagline: '→ Passer de flou à MVP clair',
    texte: 'Quand tout est flou... On passe d’un amas d’idées à une feuille de route concrète.'
  },
  {
    titre: 'Structurer là où tout s’effondre',
    tagline: '→ Remettre de l’ordre dans le chaos',
    texte: 'Quand la dette technique étouffe le projet ou l’équipe, je reconstruis une base saine...'
  },
  {
    titre: 'Transmettre plus que du code',
    tagline: '→ Outiller l’équipe pour l’après',
    texte: 'Je ne pars jamais sans avoir documenté, formé, et stabilisé...'
  },
  {
    titre: 'Libérer les fondateurs',
    tagline: '→ Soulager la charge mentale tech',
    texte: 'Je transforme le technique en levier, pas en frein...'
  }
]
</script>
