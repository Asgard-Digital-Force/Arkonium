<template>
  <div class="max-w-xl mx-auto text-center">
    <h4 class="text-ark-accent font-bold mb-2">Restez informé</h4>
    <p class="text-ark-text-secondary text-sm mb-4">
      Recevez nos conseils tech et produit directement dans votre boîte mail.
    </p>

    <form @submit.prevent="subscribe" class="flex flex-col sm:flex-row gap-3">
      <input
        v-model="email"
        type="email"
        required
        placeholder="votre@email.com"
        class="flex-1 px-4 py-3 rounded-ark bg-ark-card border border-ark-card-hover text-ark-text placeholder-ark-text-secondary focus:outline-none focus:border-ark-accent transition"
        :disabled="isLoading"
      />
      <button
        type="submit"
        :disabled="isLoading"
        class="px-6 py-3 rounded-ark bg-ark-accent text-ark-bg font-bold hover:bg-ark-text transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {{ isLoading ? 'Envoi...' : "S'inscrire" }}
      </button>
    </form>

    <p v-if="message" :class="['text-sm mt-3', isError ? 'text-red-400' : 'text-green-400']">
      {{ message }}
    </p>

    <p class="text-ark-text-secondary text-xs mt-3">
      Pas de spam. Désabonnement en un clic.
    </p>
  </div>
</template>

<script setup>
const email = ref('')
const isLoading = ref(false)
const message = ref('')
const isError = ref(false)

const subscribe = async () => {
  isLoading.value = true
  message.value = ''
  isError.value = false

  // Validation email côté client
  if (!email.value || !isValidEmail(email.value)) {
    isError.value = true
    message.value = 'Veuillez entrer une adresse email valide.'
    isLoading.value = false
    return
  }

  try {
    // Essayer l'API route (fonctionne en mode SSR/dev)
    const response = await $fetch('/api/newsletter', {
      method: 'POST',
      body: { email: email.value }
    })

    message.value = 'Merci ! Vous êtes inscrit à la newsletter.'
    email.value = ''
  } catch (error) {
    // Si l'API n'est pas disponible (mode statique), proposer une alternative
    if (error.statusCode === 404 || error.message?.includes('fetch')) {
      // Fallback: rediriger vers un formulaire Google Forms
      window.open(
        `https://docs.google.com/forms/d/e/1FAIpQLSdO-txhbPsl6NLgNs4IETowftl4gFge8_HLbIkOm5XmFu9MxQ/viewform`,
        '_blank'
      )
      message.value = 'Redirection vers le formulaire d\'inscription...'
      email.value = ''
    } else {
      isError.value = true
      message.value = error.data?.message || 'Une erreur est survenue. Veuillez réessayer.'
    }
  } finally {
    isLoading.value = false
  }
}

const isValidEmail = (emailStr) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(emailStr)
}
</script>
