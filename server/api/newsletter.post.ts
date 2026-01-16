import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)

  // Validation de l'email
  if (!body.email || !isValidEmail(body.email)) {
    throw createError({
      statusCode: 400,
      message: 'Adresse email invalide'
    })
  }

  // Vérifier que la clé API est configurée
  if (!config.resendApiKey) {
    // En mode dev sans clé, on simule le succès
    if (process.env.NODE_ENV === 'development') {
      console.log(`[DEV] Newsletter subscription: ${body.email}`)
      return { success: true, message: 'Inscription simulée (mode dev)' }
    }

    throw createError({
      statusCode: 500,
      message: 'Service newsletter non configuré'
    })
  }

  const resend = new Resend(config.resendApiKey)

  try {
    // Ajouter le contact à l'audience Resend
    // Note: Vous devez créer une audience dans Resend et récupérer son ID
    if (config.resendAudienceId) {
      await resend.contacts.create({
        email: body.email,
        audienceId: config.resendAudienceId,
        unsubscribed: false
      })
    }

    // Envoyer un email de confirmation
    await resend.emails.send({
      from: config.resendFromEmail || 'Arkonium <newsletter@arkonium.tech>',
      to: body.email,
      subject: 'Bienvenue dans la newsletter Arkonium !',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #C5A880;">Bienvenue chez Arkonium !</h1>
          <p>Merci de vous être inscrit à notre newsletter.</p>
          <p>Vous recevrez régulièrement nos conseils sur :</p>
          <ul>
            <li>La structuration technique de projets SaaS</li>
            <li>Le leadership technique et le rôle de CTO</li>
            <li>Les bonnes pratiques produit et technique</li>
          </ul>
          <p>À très bientôt !</p>
          <p style="color: #B0B8C1; font-size: 14px;">
            L'équipe Arkonium<br>
            <a href="https://arkonium.tech" style="color: #C5A880;">arkonium.tech</a>
          </p>
        </div>
      `
    })

    return { success: true }
  } catch (error: any) {
    console.error('Resend error:', error)

    throw createError({
      statusCode: 500,
      message: 'Erreur lors de l\'inscription. Veuillez réessayer.'
    })
  }
})

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}
