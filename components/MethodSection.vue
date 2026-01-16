<template>
  <section id="methode" class="py-20 px-6 bg-ark-card-hover">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-ark-accent text-center mb-4">
        La méthode Arkonium
      </h2>
      <p class="text-ark-text-secondary text-center mb-12 max-w-2xl mx-auto">
        Quatre piliers pour structurer votre projet tech avec clarté et efficacité.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-ark-card p-6 rounded-ark border-l-4 border-ark-accent"
        >
          <h3 class="text-xl font-bold text-ark-accent mb-2">{{ item.titre }}</h3>
          <p class="text-ark-text-secondary text-sm mb-3 italic">{{ item.tagline }}</p>
          <p class="text-ark-text">{{ item.texte }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    titre: 'Construire là où d\'autres hésitent',
    tagline: 'Clarifier pour avancer',
    texte: 'Transformer le chaos en vision claire. Poser les fondations solides d\'un projet tech qui tient la route.'
  },
  {
    titre: 'Structurer là où tout s\'effondre',
    tagline: 'Organiser pour durer',
    texte: 'Reprendre en main la dette technique. Mettre en place des processus qui permettent de scaler sereinement.'
  },
  {
    titre: 'Transmettre plus que du code',
    tagline: 'Former pour autonomiser',
    texte: 'Partager les bonnes pratiques. Faire monter en compétence les équipes pour qu\'elles deviennent autonomes.'
  },
  {
    titre: 'Libérer les fondateurs',
    tagline: 'Déléguer pour se concentrer',
    texte: 'Prendre en charge la dimension technique. Permettre aux fondateurs de se concentrer sur leur vision business.'
  }
]
</script>
