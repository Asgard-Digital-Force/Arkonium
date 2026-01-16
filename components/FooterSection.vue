<template>
  <footer class="bg-ark-bg border-t border-ark-card py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <img src="/logo.png" alt="Arkonium" class="h-8 mb-4" />
          <p class="text-ark-text-secondary text-sm">
            Votre CTO de confiance pour structurer, sécuriser et scaler vos projets tech.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="text-ark-accent font-bold mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li><NuxtLink to="/" class="text-ark-text-secondary hover:text-ark-accent transition">Accueil</NuxtLink></li>
            <li><NuxtLink to="/offres" class="text-ark-text-secondary hover:text-ark-accent transition">Offres</NuxtLink></li>
            <li><NuxtLink to="/blog" class="text-ark-text-secondary hover:text-ark-accent transition">Blog</NuxtLink></li>
            <li><NuxtLink to="/ressources" class="text-ark-text-secondary hover:text-ark-accent transition">Ressources</NuxtLink></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-ark-accent font-bold mb-4">Contact</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="https://cal.com/arkonium"
                target="_blank"
                rel="noopener noreferrer"
                class="text-ark-text-secondary hover:text-ark-accent transition"
              >
                Planifier un appel
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arnaud-oltra/"
                target="_blank"
                rel="noopener noreferrer"
                class="text-ark-text-secondary hover:text-ark-accent transition"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="border-t border-ark-card pt-8 mb-8">
        <NewsletterForm />
      </div>

      <!-- Copyright -->
      <div class="text-center text-ark-text-secondary text-sm">
        <p>&copy; {{ new Date().getFullYear() }} Arkonium. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
