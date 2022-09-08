import axios from 'axios';
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate"
export default createStore({
  state: {
    plugins: [createPersistedState()],
    cart: [],
    user: null,
  },
  getters: {
    cartItemCount: (state)=>{
      return state.cart.length;
    },

    isLogged:state=> !!state.user,
    authUser: (state) => {
      return state.user
    }
  },
  mutations: {
    //mutation pour initialiser l'utilisateur qui se connecte
    setUserData(state, userData) {
       state.user = userData
       localStorage.setItem('user',JSON.stringify(userData))
       axios.defaults.headers.common.Authorization= `Bearer ${userData.token}`
    },
    //mutation pour le logout
    clearUserData(){
      localStorage.removeItem('user')
      location.reload()
    },
    addArticleToCart(state,article){
      state.cart.push(article);
    },

    REMOVE_ARTICLE_FROM_CART(state,article){
      state.cart = state.cart.filter(index=>{
        return index.article != article;
      })
    }
  },
  actions: {
    removeArticleFromCart: ({commit},article) =>{
      commit('REMOVE_ARTICLE_FROM_CART',article);
    },

     login({commit}, credentials){
       return axios.post('http://localhost:8000/api/connexion',credentials)
       .then(({data})=>{
         commit('setUserData', data)
       })
     },

    logout({commit}) {
      commit('clearUserData')
    }
  },
  modules: {
  }
})
