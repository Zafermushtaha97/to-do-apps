import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allnotes: [],
  },
  mutations: {
    Loadnotes(state,allnotes){
      state.allnotes = allnotes
    }

  },
  actions: {
    loadnotes({commit ,state}){
      axios.get(`http://localhost:3000/notes/`).then((response)=>{
        state.allnotes = response.data
        commit('Loadnotes',state.allnotes)
      })
    },
    addnote({commit,state},payload){
      axios.post(`http://localhost:3000/notes/`,payload).then(()=>{
        commit('Loadnotes',state.allnotes.concat(payload))
      })
    },
    deletenote({commit,state},payload){
      axios.delete(`http://localhost:3000/notes/${payload}`).then(() =>{
        commit('Loadnotes',state.allnotes.filter(note => note.id != payload))
      })
    },
//     togglestatus({commit,state},payload={item,property,value}){
//       axios.patch(`http://localhost:3000/notes/${item.id}/?${property}=${value}`).then(() =>{
//         commit('Loadnotes',state.allnotes)
//       })
      
//  }
   
  },
  getters:{
    notes(state){
      return state.allnotes
    },
    remaining(state){
      return state.allnotes.filter(note =>{
        return note.status === false
      }).length;
    },
    completenote(state){
      return state.allnotes.length
    },
  },
  
  modules: {
  }
})
