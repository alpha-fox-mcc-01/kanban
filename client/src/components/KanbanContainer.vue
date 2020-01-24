<template>
  <b-col lg="3" sm="6" cols="12" class="todoContainer p-1">
    <b-card :bg-variant="variant" text-variant="white" :header="header" class="text-center p-0">
      <b-card-text>
        <!-- <draggable v-model="todos" @start="drag=true" @end="drag=false"> -->
          <div v-for="(todo, i) in filtederTodos(category)" :key="i">
            <b-card border-variant="info" :header="todo.title" align="center" text-variant="dark" class="my-1" @click="seeDetail(todo)">
              <b-card-text>
                <p>Assigned To: {{ todo.assigned }}</p>
                <p>Priority Scale: {{ todo.priority }}</p>
              </b-card-text>
              <div>
                <b-button v-if="todo.category !== 'backlog'" style="position: absolute; left: 10%" @click="prevCat({id: todo.id, cat: todo.category})">To Left</b-button>
                <b-button  @click="deleteTodo(todo.id)">DELETE</b-button>
                <b-button  v-if="todo.category !== 'done'" style="position: absolute; right: 10%;" @click="nextCat({id: todo.id, cat: todo.category})">To Right</b-button>
              </div>
            </b-card>
            </div>
        <!-- </draggable> -->
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
// import draggable from 'vuedraggable'
export default {
  name: 'KanbanContainer',
  props: {
    header: String,
    variant: String,
    category: String
  },
  methods: {
    filtederTodos (category) {
      return this.todos.filter(todo => todo.category === category)
    },
    prevCat (data) {
      this.$store.dispatch('prevCat', data)
    },
    deleteTodo (id) {
      this.$store.dispatch('deleteCard', id)
        .then(() => {
          this.$swal({
            icon: 'info',
            title: 'Deleted'
          })
        })
    },
    nextCat (data) {
      this.$store.dispatch('nextCat', data)
    },
    seeDetail (todo) {
      this.$swal({
        icon: 'info',
        html:
          '<b>Title</b>: <br>' + todo.title + '<br><br>' +
          '<b>Description</b>: <br>' + todo.description + '<br><br>' +
          '<b>Assigned To</b>: <br>' + todo.assigned + '<br><br>' +
          '<b>Priority Scale</b>: <br>' + todo.priority + '<br><br>'
      })
    }
  },
  computed: {
    todos () {
      return this.$store.state.todos
    }
  },
  created () {
    this.$store.dispatch('fetchTodos')
  }
}
</script>

<style scoped>
p {
  margin:0
}
p:nth-last-child(1) {
  margin-bottom: 1rem
}
</style>
