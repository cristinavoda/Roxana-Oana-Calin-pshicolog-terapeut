<template>
    <section id="contact" class="section contact">
  <h2>{{t.nav.contact }}</h2>

  <form class="contact-form" @submit.prevent="submitForm">
    <div class="field">
      <input
        type="text"
        v-model="form.name"
        placeholder="Nume"
        required
      />
    </div>

    <div class="field">
      <input
        type="email"
        v-model="form.email"
        placeholder="Email"
        required
      />
    </div>

    <div class="field">
      <textarea
        v-model="form.message"
        placeholder="Mesajul tău"
        rows="4"
        required
      ></textarea>


        <a :href="ctaLink" target="_blank" class="cta">
  {{ ctaText }}
</a>

    </div>

    
  </form>
</section>


    
   <div class="floating-actions">
 
  <a
    href="https://wa.me/40749821694"
    target="_blank"
    aria-label="WhatsApp"
    class="fab whatsapp"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20.52 3.48A11.91 11.91 0 0012.07 0C5.5 0 .14 5.37.14 11.95c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.88 11.88 0 005.76 1.47h.01c6.58 0 11.95-5.37 11.95-11.95 0-3.2-1.25-6.2-3.5-8.39zM12.07 21.3h-.01a9.9 9.9 0 01-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 01-1.5-5.25c0-5.47 4.46-9.93 9.95-9.93a9.9 9.9 0 017.03 2.9 9.9 9.9 0 012.9 7.03c0 5.47-4.46 9.93-9.95 9.93zm5.46-7.43c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.65-2.04-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.93-2.26-.24-.58-.48-.5-.68-.5h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35z"
      />
    </svg>
  </a>

  
  <a
    href="tel:+40749821694"
    aria-label="Telefon"
    class="fab phone"
  >
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.07 22 2 13.93 2 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  </a>

</div>
 
</template>