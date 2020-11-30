import Vue from 'vue'
import Vuex from 'vuex'
//import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : null,
    fullName : null,
    correo : null,
    rol: null,
    session : false
  },
  mutations: {
    SetValues(){

    }
  },
  actions: {
    
  },
  modules: {
  }
})
