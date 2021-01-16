import Vue from 'vue'
import Vuex from 'vuex'
//import axios from "axios";
import decode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token : null,
    usuarioDB:{

    }
  },
  mutations: {
    obtenerUsuario(state, payload){
      state.token = payload;
      if(payload === ''){
        state.usuarioDB = ''
      }else{
        state.usuarioDB = decode(payload);
        console.log(state.usuarioDB);
        //router.push({name: 'notas'})
      }
    }
  },
  actions: {
    guardarUsuario({commit}, payload){
      localStorage.setItem('token', payload);
      commit('obtenerUsuario', payload)
    },
    cerrarSesion({commit}){
      commit('obtenerUsuario', '');
      localStorage.removeItem('token');
      //router.push({name: 'login'});
    },
    leerToken({commit}){

      const token = localStorage.getItem('token');
      if(token){
        commit('obtenerUsuario', token);
      }else{
        commit('obtenerUsuario', '');
      }

    }
  },
  modules: {
  }
})
