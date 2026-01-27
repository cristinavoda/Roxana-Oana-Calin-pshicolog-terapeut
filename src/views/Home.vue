<template>
  <div class="app">
    <!-- HEADER -->
    <header class="header">
      <div class="header-left">
        <img src="/images/logo2.png" alt="Logo" class="logo" />
        <div>
          <h1 class="name">Roxana Oana Camelia</h1>
          <p class="occupation">{{ occupationText }}</p>
        </div>
      </div>

      <button class="menu-toggle" @click="open = !open">☰</button>

      <nav class="nav-links" :class="{ open }">
        <a href="#despre">{{ nav.about }}</a>
        <a href="#metodologie">{{ nav.methodology }}</a>
        <a href="#arii">{{ nav.areas }}</a>
        <a href="#experienta">{{ nav.experience }}</a>
        <a href="#contact">{{ nav.contact }}</a>
      </nav>

      <select v-model="lang" class="lang-switch">
        <option value="ro">RO</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </header>

    <!-- HERO -->
    <section class="hero">
      <img src="/images/perfil.png" alt="Roxana" class="profile" />
      <h2>{{ hero.title }}</h2>
      <p>{{ hero.subtitle }}</p>
      <button class="cta">{{ ctaText }}</button>
    </section>

    <!-- SECTIONS DE CONTENIDO -->
    <section id="despre" class="section">
      <h2>{{ nav.about }}</h2>
      <p>{{ aboutText }}</p>
    </section>

    <section id="metodologie" class="section alt">
      <h2>{{ nav.methodology }}</h2>
      <p>{{ methodologyText }}</p>
    </section>

    <section id="arii" class="section">
      <h2>{{ nav.areas }}</h2>
      <ul class="grid">
        <li v-for="area in areas" :key="area">{{ area }}</li>
      </ul>
    </section>

    <section id="experienta" class="section alt">
      <h2>{{ nav.experience }}</h2>
      <p>{{ experienceText }}</p>
    </section>

    <section id="contact" class="section contact">
      <h2>{{ nav.contact }}</h2>
      <p>Email: roxanacalin.psiholog@gmail.com </p>
      <button class="cta">{{ ctaText }}</button>
    </section>

    <!-- STICKY CTA -->
    <div class="sticky-cta">
      <button class="cta">{{ ctaText }}</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Estado idioma y menú
const lang = ref('ro')
const open = ref(false)

// Mensajes multi-idioma
const messages = {
  ro: {
    occupation: 'Psiholog clinician • Economist • București',
    cta: 'Programează o consultație',
    hero: { title: 'Consiliere psihologică online', subtitle: 'Spațiu sigur și confidențial' },
    nav: { about: 'Despre mine', methodology: 'Metodologie', areas: 'Arii de tratament', experience: 'Experiență', contact: 'Contact' },
    about: 'Psiholog cu dublă formare în psihologie și economie, cu experiență în Agenția Națională Antidrog.',
    methodology: 'Abordare empatică și structurată, adaptată fiecărei persoane.',
    areas: ['Anxietate', 'Stres', 'Dependențe', 'Burnout', 'Dezvoltare personală'],
    experience: 'Experiență profesională în prevenție, evaluare și consiliere.'
  },
  es: {
    occupation: 'Psicóloga • Economista',
    cta: 'Reservar una consulta',
    hero: { title: 'Consulta psicológica online', subtitle: 'Un espacio seguro y confidencial' },
    nav: { about: 'Sobre mí', methodology: 'Metodología', areas: 'Áreas de tratamiento', experience: 'Experiencia', contact: 'Contacto' },
    about: 'Psicóloga con doble formación en psicología y economía.',
    methodology: 'Enfoque empático, moderno y personalizado.',
    areas: ['Ansiedad', 'Estrés', 'Adicciones', 'Burnout', 'Crecimiento personal'],
    experience: 'Experiencia institucional y clínica.'
  },
  en: {
    occupation: 'Clinical Psychologist • Economist',
    cta: 'Book a consultation',
    hero: { title: 'Online psychological counselling', subtitle: 'A safe and confidential space' },
    nav: { about: 'About me', methodology: 'Methodology', areas: 'Treatment areas', experience: 'Experience', contact: 'Contact' },
    about: 'Psychologist with a dual background in psychology and economics.',
    methodology: 'Empathic and structured approach.',
    areas: ['Anxiety', 'Stress', 'Addictions', 'Burnout', 'Personal development'],
    experience: 'Professional experience in prevention and counselling.'
  }
}

// Computed reactivos
const ctaText = computed(() => messages[lang.value].cta)
const occupationText = computed(() => messages[lang.value].occupation)
const hero = computed(() => messages[lang.value].hero)
const nav = computed(() => messages[lang.value].nav)
const aboutText = computed(() => messages[lang.value].about)
const methodologyText = computed(() => messages[lang.value].methodology)
const areas = computed(() => messages[lang.value].areas)
const experienceText = computed(() => messages[lang.value].experience)
</script>

<style scoped>
:root {
  --accent: #50c9bf;
  --accent-soft: #6ee7e0;
  --dark: #1f2933;
  --light: #f9fafb;
}

.app { font-family: 'Inter', sans-serif; color: var(--dark); }
.header { display: flex; justify-content: space-between; align-items: center; gap:3rem; padding: 1rem 2rem; border-bottom: 1px solid #e5e7eb; flex-wrap: wrap; }
.header-left { display: flex; gap: 1rem; align-items: center; }
.logo { height: 48px; }
.name { font-family: 'Playfair Display', serif; font-size: clamp(1.3rem,5vw,1.8rem); font-weight: 600; background: linear-gradient(135deg, var(--accent), var(--accent-soft)); -webkit-background-clip: text; -webkit-text-fill-color: #6ee7e0 }
.occupation { font-size: 0.85rem; color: #6b7280; }
.nav-links { display: flex; gap: 3rem; }
.nav-links a { text-decoration: none; color: inherit; font-size: 1.5rem; }
.menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
.lang-switch { margin-left: 1rem; }
.hero { text-align: center; padding: 3rem 1rem 4rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }

.cta { background: linear-gradient(135deg, var(--accent), var(--accent-soft)); border: none; color: rgb(77, 74, 74); padding: 0.8rem 1.6rem; border-radius: 999px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s; }
.cta:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(0,0,0,0.15); }
.sticky-cta { position: fixed; bottom: 1rem; right: 50%; transform: translateX(50%); z-index: 1000; }
.section { padding: 4rem 2rem; max-width: 1000px; margin: auto; }
.section.alt { background: var(--light); }
.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; list-style: none; padding: 0; }
.profile {
  width: 160px;
  height: 190px;
  object-fit: cover;
  border-radius: 50%;
  padding: -1rem 2rem;
  box-shadow: 1px 4px #81ecec;
}

@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links { display: none; flex-direction: column; margin-top: 1rem; gap: 0.8rem; width: 100%; }
  .nav-links.open { display: flex; }
}
</style>