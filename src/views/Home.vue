<template>
  <div class="app">
    
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
        <a href="#servicii">{{ nav.services }}</a>
        <a href="#contact">{{ nav.contact }}</a>
       
      </nav>

      <select v-model="lang" class="lang-switch">
        <option value="ro">RO</option>
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
    </header>

    
    <section class="hero">
     
  <video autoplay muted loop playsinline class="hero-video">
     <source src="/images/videos/roxana.mp4" type="video/mp4" />
    Tu navegador no soporta video.
  </video>

  <div class="hero-overlay">
    <h1> Roxana Oana Camelia</h1>
    <p>Psihoterapie Individuală și Consiliere Profesională</p>
    
  </div>


      <img src="/images/perfil.png" alt="Roxana" class="profile" />
      <h2>{{ hero.title }}</h2>
      <p>{{ hero.subtitle }}</p>
      
    </section>

   
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


<section id="servicii" class="section services">
  <h2>{{ services.title }}</h2>

  <div class="service-card" v-for="(item, index) in services.items" :key="index">
    <h3>{{ item.name }}</h3>

    <p v-if="item.description" class="description">
      {{ item.description }}
    </p>

    <p class="price">{{ item.price }}</p>
    <p class="duration">{{ item.duration }}</p>

          <a :href="ctaLink" target="_blank" class="cta">
  {{ ctaText }}
</a>

  </div>
</section>

<section id="contact" class="section contact">
  <h2>{{ nav.contact }}</h2>

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

<button
  class="scroll-up"
  v-show="showScrollTop"
  @click="scrollToTop"
  aria-label="Scroll to top"
>
  ↑
</button>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { reactive } from 'vue'
const showScrollTop = ref(false)

const onScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log(form)
  
}
const phoneNumber = '40749821694'  
const emailAddress = 'roxanacalin.psiholog@gmail.com ' 

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent)

const ctaLink = computed(() => {
  if (isMobile()) {
    
    return `https://wa.me/${phoneNumber}?text=Salut,%20vreau%20o%20consultație`
  } else {
   
    return `mailto:${emailAddress}?subject=Consultație&body=Bună,%20aș dori%20o%20consultație`
  }
})

const lang = ref('ro')
const open = ref(false)

const messages = {
  ro: {
    occupation: 'Psiholog clinician • București',
    cta: 'Programează o consultație',
    hero: { title: 'Consiliere psihologică online', subtitle: 'Spațiu sigur și confidențial' },
    nav: { about: 'Despre mine', psychotherapy: 'Psihoterapie', areas: 'Arii de tratament', experience: 'Experiență', services: 'Servicii',    contact: 'Contact' },
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
`,
    services: {
    title: 'Servicii',
    items: [
      {
        name: 'Psihoterapie individuală',
        price: '250 RON / ședință',
        duration: 'Durata: 60 minute'
      },
      {
        name: 'Psihoterapie de grup',
        price: '200 RON / persoană',
        duration: 'Durata: 90 minute'
      },
      {
        name: 'Consiliere în carieră',
        description: `Orientare și reorientare profesională.
Dezvoltare personală, schimbare, depășirea abuzurilor în muncă.`,
        price: '250 RON / ședință',
        duration: 'Durata: 60 minute'
      }
    ]
  }, 
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
`,
services: {
    title: 'Servicios',
    items: [
      {
        name: 'Psicoterapia individual',
        price: '250 RON / sesión',
        duration: 'Duración: 60 minutos'
      },
      {
        name: 'Psicoterapia de grupo',
        price: '200 RON / persona',
        duration: 'Duración: 90 minutos'
      },
      {
        name: 'Orientación profesional',
        description: `Orientación y reorientación profesional.
Desarrollo personal, cambio y superación del abuso laboral.`,
        price: '250 RON / sesión',
        duration: 'Duración: 60 minutos'
      }
    ]
  },

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
`,
services: {
    title: 'Services',
    items: [
      {
        name: 'Individual psychotherapy',
        price: '250 RON / session',
        duration: 'Duration: 60 minutes'
      },
      {
        name: 'Group psychotherapy',
        price: '200 RON / person',
        duration: 'Duration: 90 minutes'
      },
      {
        name: 'Career counseling',
        description: `Career orientation and reorientation.
Personal development, change, and overcoming workplace abuse.`,
        price: '250 RON / session',
        duration: 'Duration: 60 minutes'
      }
    ]
  },
  }
}


const ctaText = computed(() => messages[lang.value].cta)
const occupationText = computed(() => messages[lang.value].occupation)
const hero = computed(() => messages[lang.value].hero)
const nav = computed(() => messages[lang.value].nav)
const aboutText = computed(() => messages[lang.value].aboutText)
const psychotherapyText = computed(() => messages[lang.value].psychotherapyText)
const areas = computed(() => messages[lang.value].areas)
const experienceText = computed(() => messages[lang.value].experience)
const services = computed(() => messages[lang.value].services)

</script>

<style scoped>
:root {
  --accent: #b7c950;
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
.nav-links a {
  text-decoration: none;
  color: #4e4b4b;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem;
  position: relative;      
  padding-bottom: 4px;    
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #d3bd42; 
  text-shadow: 1px 2px #1f2933;         
}


.nav-links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0%;
  height: 1px;             
  background: #FFD700;     
  transition: width 0.3s ease;
}

.nav-links a:hover::after {
  width: 100%;
}


.nav-links a.active {
   color: #d3bd42; 
}

.nav-links a.active::after {
  width: 100%;
  color: #d3bd42; 
}


.menu-toggle { display: none; background: none; border: none; font-size: 1.5rem; cursor: pointer; }
.lang-switch { margin-left: 1rem; border-color: #D4AF37; font-size: 0.75rem;}
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  
  width: auto;
  height: 160vh;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: rgb(201, 198, 198); 
  text-shadow: 1px 2pxblack;
  text-align: center;
  backdrop-filter: brightness(0.6); 
}


.cta { background: linear-gradient(135deg, var(--accent), var(--accent-soft)); border: none;  font-family: 'Playfair Display', serif; color: rgb(32, 31, 31); padding: 0.8rem 1.6rem; border-radius: 999px; cursor: pointer; font-weight: 600; box-shadow: 0 4px 10px rgba(0,0,0,0.1); transition: transform 0.2s, box-shadow 0.2s; }
.cta:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(158, 158, 20, 0.938); }
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
  color: #343535;
  text-shadow: 1px 2px white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 300;
}
.menu-toggle {
  display: none;
  font-size: 1.5rem;
  
  text-shadow: 1px 1px #D4AF37;
  cursor: pointer;
}
.services {
  text-align: center;
}

.service-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 1.8rem;
  margin-bottom: 2rem;
  box-shadow: 0 6px 20px rgba(0,0,0,0.06);
}

.service-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

.service-card .description {
  font-size: 0.95rem;
  margin-bottom: 1rem;
  white-space: pre-line;
}

.service-card .price {
  font-weight: 700;
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
  color:  #f0e5aa;
  text-shadow: 1px 2px rgb(112, 109, 109);
}

.service-card .duration {
  font-size: 0.85rem;
  color: #777;
  
}

.cta {
  display: inline-flex;         
  align-items: center;
  justify-content: center;
  text-decoration: none;         
  border: none;                  
  font-size: 0.85rem;
  color: #817e7e;
  padding: 0.6rem 1.4rem;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 5px 4px 10px  #e8ca6f;
  transition: transform 0.2s, box-shadow 0.2s;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.fab svg,
.scroll-up svg {
  width: 18px;
  height: 18px;
  fill: white;
}

.scroll-up svg {
  fill: #4e4b4b;
}

.fab {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.floating-actions {
  position: fixed;
  bottom: 5.5rem; 
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  z-index: 1000;
}

.fab {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  text-decoration: none;
  color: white;
  box-shadow: 2px 6px 16px rgba(0,0,0,0.15);
  transition: transform 0.2s ease;
}

.fab:hover {
  transform: translateY(-2px);
}

.whatsapp {
  background: #25D366;
}

.phone {
  background: linear-gradient(135deg, #50c9bf, #FFD700);
}
.a {
  color:#a59b9b;
  border-bottom: white;
  text-shadow: #5c5b20;
}
@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links { display: none; flex-direction: column; margin-top: 1rem; gap: 0.8rem; width: 100%; }
  .nav-links.open { display: flex; }
}
.contact {
  text-align: center;
}

.contact-form {
  max-width: 480px;
  margin: 0 auto;
}

.field {
  margin-bottom: 2rem;
}


.contact-form input,
.contact-form textarea {
  width: 100%;
  border: none;
  border-bottom: 1px solid rgba(0,0,0,0.25);
  padding: 0.6rem 0;
  font-size: 0.95rem;
  font-family: 'Inter', sans-serif;
  background: transparent;
  outline: none;
  transition: border-color 0.3s;
}


.contact-form input:focus,
.contact-form textarea:focus {
  border-bottom-color: #50c9bf;
}


.contact-form ::placeholder {
  color: #999;
}


.contact-form textarea {
  resize: none;
}


.contact-form .cta {
  margin-top: 1rem;
}


.scroll-up {
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-up {
  position: fixed;
  bottom: 20.2rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  color: #302c2c;
  background: rgba(255,255,255,0.9);
  box-shadow: 2px 4px 12px rgba(56, 56, 55, 0.986);
  z-index: 1000;
  transition: transform 0.2s;
}

.scroll-up:hover {
  transform: translateY(-2px);
}
.hero {
  position: relative;
  width: 100%;
  height: 100vh; 
}
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.15); 
  z-index: 1;
}

.hero-overlay {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  color: #fff; 
  padding: 0 1rem;
}
.hero-video {
  position: absolute;

  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  object-position: center top;
  filter: brightness(1.2) contrast(1.1);
  z-index: 0;
}

.hero-video {
  filter: brightness(1.2) contrast(1.1); 
}

@media (max-width: 768px) {
  .hero {
    height: 160vh; 
  }}

  .hero-overlay h1 {
    font-size: 1.8rem; 

  .hero-overlay p {
    font-size: 0.95rem; 
  }
  .hero-video {
  object-fit: cover;
  
}
}

</style>