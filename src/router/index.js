import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/Login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/Menu',
    name: 'menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/Menu.vue'),
    children : [
      {
          path: 'Inicio',
          name: 'Inicio',
          component: () => import(/* webpackChunkName: "about" */ '../views/MenuAlumno/inicio.vue')
      },
      {
        path: 'Perfil',
        name: 'Perfil',
        component: () => import(/* webpackChunkName: "about" */ '../views/MenuAlumno/perfil.vue')
      },
      {
        path: 'Documentacion',
        name: 'Documentacion',
        component: () => import(/* webpackChunkName: "about" */ '../views/MenuAlumno/documentacion.vue')
      },
      {
        path: 'Calendario',
        name: 'Calendario',
        component: () => import(/* webpackChunkName: "about" */ '../views/MenuAlumno/calendario.vue')
      },
      {
        path: 'Contacto',
        name: 'Contacto',
        component: () => import(/* webpackChunkName: "about" */ '../views/MenuAlumno/contacto.vue')
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
