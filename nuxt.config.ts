// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/content'
  ],

  // Variables d'environnement runtime (côté serveur uniquement)
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    resendAudienceId: process.env.RESEND_AUDIENCE_ID,
    resendFromEmail: process.env.RESEND_FROM_EMAIL || 'Arkonium <newsletter@arkonium.tech>'
  },

  // Configuration pour génération statique (SSG)
  ssr: true,
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  // Configuration CSS
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },

  // Configuration Nuxt Content
  content: {
    highlight: {
      theme: 'github-dark'
    },
    markdown: {
      anchorLinks: false
    }
  },

  // Configuration de l'app
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Arkonium – Votre CTO de confiance',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Arkonium accompagne les fondateurs de SaaS et les équipes tech ambitieuses pour structurer, sécuriser et scaler leurs projets numériques.' },
        { name: 'theme-color', content: '#0E1A24' },
        // Open Graph
        { property: 'og:title', content: 'Arkonium – Votre CTO de confiance' },
        { property: 'og:description', content: 'Structurer. Sécuriser. Scaler. Arkonium, votre CTO stratégique pour passer du flou à l\'exécution.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://arkonium.tech/' },
        { property: 'og:image', content: 'https://arkonium.tech/cover-og-arkonium.png' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Arkonium – Votre CTO de confiance' },
        { name: 'twitter:description', content: 'Structurer. Sécuriser. Scaler. Votre CTO stratégique pour passer du flou à l\'exécution.' },
        { name: 'twitter:image', content: 'https://arkonium.tech/cover-og-arkonium.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Merriweather:wght@400;700&display=swap' }
      ],
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js', async: true }
      ]
    }
  },

  compatibilityDate: '2024-07-01'
})
