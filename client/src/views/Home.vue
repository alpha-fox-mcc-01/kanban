<template>
  <div class="home">
    <ContentBox
      v-for="(box, i) in boxes"
      :key="i"
      :tasks="tasks"
      :box="box"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../config/firebase.js'
import ContentBox from '@/components/ContentBox.vue'

export default {
  name: 'home',
  data () {
    return {
      tasks: [],
      boxes: [
        {
          name: 'Todo',
          color: 'bg-danger'
        },
        {
          name: 'Doing',
          color: 'bg-warning'
        },
        {
          name: 'Done',
          color: 'bg-success'
        }
      ]
    }
  },
  components: {
    ContentBox
  },
  methods: {
    getData () {
      db.collection('tasks')
        .onSnapshot((doc) => {
          this.tasks = []
          doc.docs.forEach((document) => {
            const updatedTask = document.data()
            console.log(updatedTask)
            updatedTask.id = document.id
            this.tasks.push(updatedTask)
            console.log(this.tasks)
          })
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
