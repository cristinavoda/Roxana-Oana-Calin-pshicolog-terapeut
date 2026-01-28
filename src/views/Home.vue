<template>
  <div class="app">
    <!-- HEADER -->
    <header class="header">
      <div class="header-left">
        <img src="/images/logo3.png" alt="Logo" class="logo" />
        <div>
          <h1 class="name">Roxana Oana Calin</h1>
          <p class="occupation">{{ occupationText }}</p>
        </div>
      </div>

      <button class="menu-toggle" @click="open = !open">☰</button>

      <nav class="nav-links" :class="{ open }">
        <a href="#despre">{{ nav.about }}</a>
        <a href="#psihoterapie">{{ nav.psychotherapy }}</a>

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
      <p v-html="aboutText"></p>
    </section>


    <section id="psihoterapie" class="section">
  <h2>{{ nav.psychotherapy }}</h2>
  <p v-html="psychotherapyText"></p>
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
    occupation: 'Psiholog clinician • București',
    cta: 'Programează o consultație',
    hero: { title: 'Consiliere psihologică online', subtitle: 'Spațiu sigur și confidențial' },
    nav: { about: 'Despre mine', psychotherapy: 'Psihoterapie', areas: 'Arii de tratament', experience: 'Experiență', contact: 'Contact' },
    about: 'Psiholog Clinician, Psihoterapeut Integrativ, Psiho-oncolog, Consilier în adicții.  ',
    psychotherapy: 'Abordare empatică și structurată, adaptată fiecărei persoane.',
    areas: ['Arii de Specializare - Depresie, Anxietate, ADHD, Tulburare Obsesiv - Compulsivă, Dependențe, Susținerea persoanelor cu diagnostic oncologic'],
    experience: 'Experiență profesională în prevenție, evaluare și consiliere.',
aboutText: `
Psihoterapia este locul profesional care mă definește. În toți acești ani de activitate, am întâlnit multe persoane pe care le-am însoțit în procesul lor terapeutic, cu deschidere și recunoștință. Am înțeles în fiecare o formă de putere interioară, acel ceva nou, unicat. Calea profesională dar și propria-mi viață, m-au condus către o înțelegere cuprinzătoare despre oameni, în diferitele lor situații de viață.
Sunt Psiholog Clinician și Psihoterapeut Integrativ, acreditat de Colegiul Psihologilor din România. Am dobândit experiență în contexte diferite de lucru, m-am provocat mereu să cunosc mai mult. Toate etapele prin care m-am format profesional mi-au adus cunoștințe dar și resursele sufletești să susțin persoanele ce doresc să își realizeze propriul proces terapeutic alături de mine.
Am ales o abordare Psihoterapeutică Integrativă pentru că permite conturarea unui tablou cât mai complet al vieții, în toate planurile semnificative. Vom privi împreună la contextul tău de viață, la gândurile care mai departe îți influențează afectivitatea și emoțiile. De asemenea, vom înțelege ce anume determină anumite comportamente pe care, poate, nu le mai dorești, vom construi înțelegerea și învătarea unor comportamente asumate de tine, cu sens. Vom privi și la sănatatea ta, la felul în care corpul îți vorbește despre propriile trăiri. În dimensiunea cea mai înaltă a psihicului, este nevoia de a-ți da sens vieții. Este vorba despre ce oferi celorlalți în calitate de creație personală, întâlniri și experiențe. Este nivelul superior al conștiinței care îți oferă o înțelegere mai mare asupra vieții în general și a felului în care alegi să trăiești fiecare moment. Eu voi fi o parte din relația terapeutică și te invit și pe tine să fii parte. Vom crea un spațiu confidențial, cu încredere.
Conștiința ta se oglindește acolo unde o întâlnește pe a mea.
Sunt Psiholog Clinician și Psihoterapeut Integrativ acreditat de Colegiul Psihologilor din România.
Sunt Psihoterapeut Integrativ certificat, membru al Federației Române de Psihoterapie și al Asociației Europeane de Psihoterapie.
În ultimii ani, cele mai multe ore de psihoterapie le-am dedicat tinerilor adulți, în mare parte studenților de la Universitatea Națională de Artă Teatrală și Cinematografică „I.L. Caragiale” din București.
În toți acești ani, am lucrat mult cu femei adulte, vârste diferite, în etape și situații de viață diferite.
`,
psychotherapyText: `
Despre Psihoterapie
Ai o poveste de viață care te definește. Când înțelegi părți din viața ta, te întregești. Sunt și părți la care nu poți privi, fie că au fost dureroase, fie că au fost neînțelese și prin urmare, neîncheiate într-un anumit fel, devenind aspecte care îți limitează puterea și putința din momentul prezent. Sunt momente importante în viață și multe sunt dificile - schimbări majore, divorț, a trece într-o noua etapă de viață, decizii importante, pierderi materiale, psihologice, fizice, momente în care apar stari de frică, descurajare sau pur și simplu neregăsire ș.a. Aceste praguri de viață nu ar trebui să fie toate ca o luptă pe cont propriu. Dacă devin dificil de trecut, este firesc să ceri ajutor specializat.
Te invit ca alături de mine să privești la tine de-a lungul timpului, să înțelegi, să aranjezi prin claritate anumite aspecte din viața ta și să construim moduri benefice și utile prin care tu să acționezi. Ar fi să permiți trecutului, prezentului și viitorului să coexiste armonios. Împreună vom da atenție vieții tale de zi cu zi, astfel încât să facilitezi ceea ce îți dorești. Te voi însoți în parcursul tău de devenire, până acolo unde tu vei ști că ai la îndemână propriile soluții.
`
    
  },
  




  es: {
    occupation: 'Psicóloga ',
    cta: 'Reservar una consulta',
    hero: { title: 'Consulta psicológica online', subtitle: 'Un espacio seguro y confidencial' },
    nav: { about: 'Sobre mí',  psychotherapy: 'Psicoterapia', areas: 'Áreas de tratamiento', experience: 'Experiencia', contact: 'Contacto' },
    about: 'Psicóloga Clínica, Psicoterapeuta Integrativa, Psicooncóloga, Consejera en Adicciones.',
    psychotherapy: 'Enfoque empático, moderno y personalizado.',
    areas: ['Áreas de especialización: Depresión, Ansiedad, TDAH, Trastorno obsesivo-compulsivo, Adicciones, Apoyo a personas con diagnóstico oncológico.'],
    experience: 'Experiencia institucional y clínica.',
    aboutText: `
La psicoterapia es el lugar profesional que me define. En todos estos años de actividad, he acompañado a muchas personas en su proceso terapéutico, con apertura y gratitud. He visto en cada una una forma de poder interior, algo único. Mi trayectoria profesional y mi propia vida me han llevado a una comprensión profunda de las personas en sus distintas etapas de vida.
Soy Psicóloga Clínica y Psicoterapeuta Integrativa, acreditada por el Colegio de Psicólogos de Rumania. He adquirido experiencia en contextos diversos y siempre me he retado a conocer más. Todas las etapas de mi formación profesional me han dado conocimientos y recursos para apoyar a las personas que desean realizar su propio proceso terapéutico conmigo.
He elegido un enfoque Psicoterapéutico Integrativo porque permite un cuadro completo de la vida, en todos los planos significativos. Juntos exploraremos tu contexto de vida, los pensamientos que influyen en tus emociones. También comprenderemos qué determina ciertos comportamientos que quizás ya no deseas, construyendo entendimiento y aprendizajes significativos. Observaremos tu salud y cómo tu cuerpo refleja tus emociones. En la dimensión más elevada del psiquismo está la necesidad de dar sentido a la vida. Se trata de lo que ofreces a otros como creación personal, encuentros y experiencias. Es el nivel superior de conciencia que ofrece una comprensión más profunda de la vida y de cómo eliges vivir cada momento. Yo seré parte de la relación terapéutica y te invito a serlo también. Crearemos un espacio confidencial y de confianza.
`,
 psychotherapyText: `
Sobre Psicoterapia
Tienes una historia de vida que te define. Al comprender partes de tu vida, te completas. También hay partes que no puedes mirar, ya sea porque fueron dolorosas o incomprendidas y, por lo tanto, no cerradas de alguna manera, convirtiéndose en aspectos que limitan tu fuerza y capacidad en el presente. Hay momentos importantes en la vida y muchos son difíciles: cambios importantes, divorcios, pasar a una nueva etapa de la vida, decisiones importantes, pérdidas materiales, psicológicas o físicas, momentos de miedo, desánimo o simplemente de desubicación. Estos umbrales de la vida no deberían afrontarse solos. Si se vuelven difíciles, es natural pedir ayuda especializada.
Te invito a que conmigo observes tu vida a lo largo del tiempo, comprendas, ordenes con claridad ciertos aspectos de tu vida y construyamos maneras beneficiosas y útiles para que actúes. Permite que pasado, presente y futuro coexistan armoniosamente. Juntos prestaremos atención a tu vida diaria para facilitar lo que deseas. Te acompañaré en tu proceso de crecimiento hasta donde tú sepas que tienes tus propias soluciones.
`
  },
  en: {
    occupation: 'Clinical Psychologist  ',
    cta: 'Book a consultation',
    hero: { title: 'Online psychological counselling', subtitle: 'A safe and confidential space' },
    nav: { about: 'About me',  psychotherapy: 'Psychotherapy', areas: 'Treatment areas', experience: 'Experience', contact: 'Contact' },
    about: 'Clinical Psychologist, Integrative Psychotherapist, Psycho-oncologist, Addiction Counselor..',
    psychotherapy: 'Empathic and structured approach.',
    areas: ['Areas of Specialization - Depression, Anxiety, ADHD, Obsessive-Compulsive Disorder, Addictions, Supporting people with oncological diagnosis'],
    experience: 'Professional experience in prevention and counselling.',
      aboutText: `
Psychotherapy is the professional place that defines me. Throughout all these years of activity, I have accompanied many people in their therapeutic process, with openness and gratitude. I have understood in each a form of inner strength, something unique. My professional path and my own life have led me to a comprehensive understanding of people in different life situations.
I am a Clinical Psychologist and Integrative Psychotherapist, accredited by the Romanian College of Psychologists. I have gained experience in diverse work contexts and constantly challenged myself to learn more. All stages of my professional training have given me knowledge and emotional resources to support people who want to undertake their own therapeutic process with me.
I have chosen an Integrative Psychotherapeutic approach because it allows a complete picture of life, in all significant planes. Together we will explore your life context, the thoughts that influence your emotions. We will also understand what determines certain behaviors you may no longer want, building understanding and meaningful learning. We will observe your health and how your body reflects your feelings. At the highest dimension of the psyche is the need to give meaning to life. It is about what you offer others as personal creation, encounters, and experiences. It is the higher level of consciousness that gives a deeper understanding of life and how you choose to live every moment. I will be part of the therapeutic relationship and invite you to be part as well. We will create a confidential and trusting space.
`,
  psychotherapyText: `
About Psychotherapy
You have a life story that defines you. By understanding parts of your life, you become whole. There are also parts you cannot face, whether painful or misunderstood, and therefore unresolved in some way, becoming aspects that limit your strength and ability in the present moment. There are important moments in life and many are difficult – major changes, divorce, moving into a new life stage, important decisions, material, psychological, or physical losses, moments of fear, discouragement, or simply feeling lost. These life thresholds shouldn’t all be faced alone. If they become difficult to cross, it’s natural to seek professional help.
I invite you to explore yourself with me over time, to understand and organize certain aspects of your life with clarity, and to build beneficial and useful ways for you to act. Allow past, present, and future to coexist harmoniously. Together we will pay attention to your daily life to facilitate what you desire. I will accompany you in your journey of growth until you know you have your own solutions at hand.
`
  }
}

// Computed reactivos
const ctaText = computed(() => messages[lang.value].cta)
const occupationText = computed(() => messages[lang.value].occupation)
const hero = computed(() => messages[lang.value].hero)
const nav = computed(() => messages[lang.value].nav)
const aboutText = computed(() => messages[lang.value].aboutText)
const psychotherapyText = computed(() => messages[lang.value].psychotherapyText)
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
.logo { height: 58px; text-shadow: solid 2px 3px #D4AF37; }
.name { font-family: 'Playfair Display', serif; font-size: clamp(1.3rem,5vw,1.8rem); font-weight: 600; background: linear-gradient(135deg, var(--accent), var(--accent-soft)); -webkit-background-clip: text; -webkit-text-fill-color: #D4AF37; text-shadow: 1px 1px black;}
.occupation { font-size: 0.85rem; color: #6b7280; }
.nav-links { display: flex; gap: 3rem; }
.nav-links a { text-decoration: none; color: inherit; font-size: 1.5rem; text-shadow: 1px 2px #D4AF37; }
.menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
.lang-switch { margin-left: 1rem; }
.hero { text-align: center; padding: 3rem 1rem 4rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }

.cta { background: linear-gradient(135deg, var(--accent), var(--accent-soft)); border: none; color: rgb(77, 74, 74); padding: 0.8rem 1.6rem; border-radius: 999px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s; }
.cta:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(226, 230, 12, 0.938); }
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
  box-shadow: 4px 4px #D4AF37;
}
section {
  scroll-margin-top: 90px;
}
#psihoterapie {
  scroll-margin-top: 90px;
}
html {
  scroll-behavior: smooth;
}
h2 {text-decoration: none; color:#646769; font-size: 1.5rem; font-weight: 400; text-shadow: 1px 2px #D4AF37;}
p {
  color: #686969;
  font-weight: 300;
}
@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links { display: none; flex-direction: column; margin-top: 1rem; gap: 0.8rem; width: 100%; }
  .nav-links.open { display: flex; }
}
</style>