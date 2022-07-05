import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import VueHighlightJS from 'vue3-highlightjs'
import 'highlight.js/styles/tomorrow-night-blue.css'
import './assets/base.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: () => import('./components/portfolio.vue')
      },
      {
        path: '/tifb',
        name: 'Tifb',
        component: () => import('./components/projects/Tifb.vue')
      },
      {
        path: '/thelocal',
        name: 'Local',
        component: () => import('./components/projects/Local.vue')
      },
      {
        path: '/exchange',
        name: 'Exchange',
        component: () => import('./components/projects/Exchange.vue')
      },
      {
        path: '/bootstrapcalc',
        name: 'Calcs',
        component: () => import('./components/projects/Calcs.vue')
      },
      {
        path: '/jqueryes6',
        name: 'jQueryEs6',
        component: () => import('./components/projects/jQueryES6.vue')
      },
      {
        path: '/fnb',
        name: 'fnb',
        component: () => import('./components/projects/FNB.vue')
      },
      {
        path: '/inmo',
        name: 'inmo',
        component: () => import('./components/projects/Inmo.vue')
      },
      {
        path: '/butler',
        name: 'butler',
        component: () => import('./components/projects/Butler.vue')
      }
    ]
  })

import { faEnvelope, faFilePdf, faLongArrowAltRight, faExternalLinkAlt, faSun, faMoon, faCat } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
    faEnvelope, 
    faFilePdf,
    faLinkedinIn,
    faInstagram,
    faGithub,
    faLongArrowAltRight,
    faExternalLinkAlt,
    faSun,
    faMoon,
    faCat)

createApp(App)
.use(router)
.use(VueHighlightJS)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
