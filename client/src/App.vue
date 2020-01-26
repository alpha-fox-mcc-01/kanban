<template>
  <v-app>
    <n-bar />
    <v-content>
      <n-form @addTask="addBacklog"/>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="2"
          class="mx-3"
        >
          <n-card :task="backlog" color="pink"/>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          class="mx-3"
        >
          <n-card :task="todo" color="grey"/>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          class="mx-3"
        >
          <n-card :task="doing" color="blue"/>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          class="mx-3"
        >
          <n-card :task="done" color="green"/>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import nBar from './components/n-bar'
import nCard from './components/n-card'
import nForm from './components/n-form'
import db from './firebase'
console.log(process.env)
export default {
  name: 'App',
  data () {
    return {
      backlog: 'Backlog',
      todo: 'Todo',
      doing: 'Doing',
      done: 'Done'
    }
  },
  components: {
    'n-bar': nBar,
    'n-card': nCard,
    'n-form': nForm
  },
  methods: {
    addBacklog (data) {
      db.collection('backlog').add(data)
        .then(function (docRef) {
          console.log('Document written with ID: ', docRef.id)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    }
  }
}
</script>
