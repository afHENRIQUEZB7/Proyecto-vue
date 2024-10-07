import Contador from '@/modules/contador/components/Contador.vue'
import ListaDeTareas from '@/modules/listaDeTareas/components/ListaDeTareas.vue'
import RegistrarView from '@/modules/registro/views/RegistrarView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    {
      path: '/contador',
      name: 'contador',
      component: Contador
    },
    {
      path: '/lista-de-tareas',
      name: 'lista-de-tareas',
      component: ListaDeTareas
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: RegistrarView
    }  
  ]
})

export default router
