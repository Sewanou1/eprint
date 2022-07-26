import AccueilView from '@/views/AccueilView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import IindexView from '@/views/commande/IindexView.vue'
import SuiviView from '@/views/suivi/SuiviView.vue'
import ContactView from '@/views/contact/ContactView.vue'
import InscriptionView from '@/views/register/InscriptionView.vue'
import ConnexionView from '@/views/login/ConnexionView.vue'
import DetailView from '@/views/commande/DetailView.vue'
import PanierView from '@/views/panier/PanierView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AccueilView
  },
  {
    path: '/commander',
    name: 'Commander',
    component: IindexView
  },
  {
    path: '/suivi',
    name: 'suivi',
    component: SuiviView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/inscription',
    name: 'inscription',
    meta: {
      auth: false
    },
    component: InscriptionView
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: ConnexionView
  },
  {
    path: '/detail',
    name: 'detail',
    component: DetailView
  },  
  {
    path: '/panier',
    name: 'panier',
    component: PanierView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,

  scrollBehavior(to, from, savedPosition){
    //retourner la position desirée
    if(savedPosition) {
      return savedPosition
    }else{
      if(to.hash) {
        return {selctor: to.hash}
      }else {
        return {x: 0, y: 0}
      }
    }
  }
})

router.beforeEach((to, from, next)=>{
  const loggedIn = localStorage.getItem('user')
  if(to.matched.some(record=>record.meta.auth) && !loggedIn) {
    next({name: 'connexion'})
    return
  }
  next()
})

export default router
