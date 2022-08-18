import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: []
  },
  getters: {
  },
  mutations: {
    addArticleToCart(state,article){
      state.cart.push(article);
    }
  },
  actions: {
  },
  modules: {
  }
})
