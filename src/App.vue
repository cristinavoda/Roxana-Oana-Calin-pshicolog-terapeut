<template>
  <router-view />
</template>
<style>
/* Fuente Playfair Display para títulos */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap');

/* Sección */
.section {
  max-width: 900px;        /* ancho máximo legible */
  margin: 4rem auto;       /* centrado vertical y horizontal */
  padding: 0 1.5rem;       /* margen en mobile */
  line-height: 1.7;        /* fácil de leer */
  font-family: 'Inter', sans-serif; /* cuerpo de texto */
  color: #4e4b4b;          /* gris oscuro */
}

/* Título h2 */
.section h2 {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #50c9bf, #FFD700); /* gradient azul-turquesa → dorado */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.logo {
  width: 30px;
  height: 50px;
}
.menu-toggle {
  display: none;
  font-size: 1.5rem;
  background: #FFD700;
  border-bottom: 1px 2px#FFD700;
  cursor: pointer;
}
/* Párrafo */
.section p {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  white-space: pre-line; /* respeta saltos de línea */
}

/* Responsive mobile */
@media (max-width: 768px) {
  .section {
    margin: 3rem 1rem;
  }
  .section h2 {
    font-size: 1.5rem;
  }
  .section p {
    font-size: 0.95rem;
  }
}

</style>