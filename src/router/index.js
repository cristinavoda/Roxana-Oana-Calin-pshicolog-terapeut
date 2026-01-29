import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/ContactoView.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
     { path: '/contacto', name:'contacto' , component: Contacto },
  ]
})

export default router
