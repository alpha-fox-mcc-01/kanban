<template>
   <v-card
    max-width="500"
    class="mx-auto mt-5"
  >
    <v-app-bar
      dark
      :color="color"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>{{ task }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col
          v-for="todo in todoData"
          :key="todo.id"
          cols="12"
        >
          <v-card
            :color="color + ' lighten-5'"
             
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="todo.data.name"
                ></v-card-title>

                <v-card-subtitle v-text="todo.data.description"></v-card-subtitle>
              </div>
            </div>
            <v-card-actions class=" d-flex justify-space-between">
              <div>
                <v-btn text v-if="btnBacklog">Backlog</v-btn>
                <v-btn text v-if="btnTodo">Todo</v-btn>
                <v-btn text v-if="btnDoing">Doing</v-btn>
                <v-btn text v-if="btnDone">Done</v-btn>
              </div>
              <div class="mr-3" @click.prevent="deleteTodo(todo.id)">
                <v-icon 
                  style="cursor:pointer"
                  
                >fa-trash-alt</v-icon>
              </div>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- {{todoData}} -->
    </v-container>
  </v-card>
</template>

<script>
import db from '../firebase'
export default {
  name: 'n-card',
  props: ['task', 'color'],
  data() {
    return {
      todoData: '',
      document: ''
    }
  },
  methods: {
    deleteTodo (id) {
      console.log('clicked')
      console.log(id) 
      console.log(this.collection)
      db.collection(this.collection).doc(id).delete()
        .then(() => {
          console.log("Document successfully deleted!")
        })
        .catch(function(error) {
          console.error("Error removing document: ", error)
        })
    }
  },
  computed: {
    btnTodo () {
      let button
      if (this.task === 'Backlog') button = true
      if (this.task === 'Doing') button = true
      return button
    },
    btnBacklog () {
      let button
      if (this.task === 'Todo') button = true
      return button
    },
    btnDoing () {
      let button
      if (this.task === 'Done') button = true
      if (this.task === 'Todo') button = true
      return button
    },
    btnDone () {
      let button
      if (this.task === 'Doing') button = true
      return button
    },
    collection () {
      let collection
      if (this.task === 'Backlog') collection = 'backlog'
      if (this.task === 'Todo') collection = 'todo'
      if (this.task === 'Doing') collection = 'doing'
      if (this.task === 'Done') collection = 'done'
      return collection
    }
  },
  created() {
    let collection
    if (this.task === 'Backlog') collection = 'backlog'
    if (this.task === 'Todo') collection = 'todo'
    if (this.task === 'Doing') collection = 'doing'
    if (this.task === 'Done') collection = 'done'
    db.collection(collection)
      .onSnapshot((querySnapshot) => {
        const todos = []
        querySnapshot.forEach(function(doc) {
          todos.push({
            data: doc.data(),
            id: doc.id
          })
        })
        this.todoData = todos
      })
  }
}
</script>

<style>

</style>
