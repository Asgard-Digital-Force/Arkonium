export default defineNuxtPlugin(() => {
  // Redirect to /admin after Netlify Identity login
  if (typeof window !== 'undefined' && window.netlifyIdentity) {
    window.netlifyIdentity.on('init', (user: any) => {
      if (!user) {
        window.netlifyIdentity.on('login', () => {
          document.location.href = '/admin/'
        })
      }
    })
  }
})

// Type declaration for Netlify Identity
declare global {
  interface Window {
    netlifyIdentity: {
      on: (event: string, callback: (user?: any) => void) => void
      open: () => void
      close: () => void
      logout: () => void
    }
  }
}
