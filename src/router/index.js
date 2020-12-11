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
    path: '/MenuAlumno',
    name: 'menu',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuAlumno/Menu.vue'),
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
  },
  {
    path: '/MenuAdmin',
    name: 'menuAdmin',
    component: () => import(/* webpackChunkName: "about" */ '../views/MenuAdministrador/Menu.vue'),
    children : [
      {
          path: 'Inicio',
          name: 'Inicio',
          component: () => import('../views/MenuAdministrador/inicio.vue')
      },
      {
        path: 'Perfil',
        name: 'Perfil',
        component: () => import( '../views/MenuAdministrador/perfil.vue')
      },
      {
        path: 'Documentacion',
        name: 'Documentacion',
        component: () => import( '../views/MenuAdministrador/documentacion.vue')
      },
      {
        path: 'Seguimiento',
        name: 'Seguimiento',
        component: () => import('../views/MenuAdministrador/seguimiento.vue')
      },
      {
        path: 'Mantenimiento',
        name: 'Mantenimiento',
        component: () => import('../views/MenuAdministrador/mantenimiento.vue')
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
