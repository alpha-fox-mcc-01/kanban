import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firebase'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    category: ['backlog', 'todo', 'ongoing', 'done']
  },
  mutations: {
    storeTodo(state, data) {
      state.todos = data
    }
  },
  actions: {
    fetchTodos() {
      db.collection('todos')
        .onSnapshot((doc) => {
          const todos = []
          doc.docs.forEach((document) => {
            const data = document.data()
            data.id = document.id
            todos.push(data)
          })
          this.commit('storeTodo', todos)
        })
    },
    deleteCard({ commit }, id) {
      return db.collection('todos').doc(id).delete()
    },
    prevCat({ commit }, data) {
      const cats = this.state.category
      console.log(data.id)
      let index = cats.indexOf(data.cat)
      index -= 1
      const category = cats[index]
      return db.collection('todos').doc(data.id).update({
        category
      })
    },
    nextCat({ commit }, data) {
      const cats = this.state.category
      console.log(data.id)
      let index = cats.indexOf(data.cat)
      index += 1
      const category = cats[index]
      return db.collection('todos').doc(data.id).update({
        category
      })
    },
    addCard({ commit }, data) {
      return db.collection('todos').add({
        title: data.title,
        description: data.description,
        assigned: data.assigned,
        priority: data.priority,
        category: 'backlog'
      })
    }
  }
})