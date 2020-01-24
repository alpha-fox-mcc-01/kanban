<template>
  <div class="mx-5">
    <div class="row">
      <ContentBox
        v-for="(box, i) in boxes"
        :key="i"
        :tasks="tasks"
        :box="box"
      />
    </div>
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
          name: 'Back-Log',
          color: 'bg-danger'
        },
        {
          name: 'Todo',
          color: 'bg-warning'
        },
        {
          name: 'Doing',
          color: 'bg-primary'
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
            updatedTask.id = document.id
            this.tasks.push(updatedTask)
          })
        })
    }
  },
  created () {
    this.getData()
  }
}
</script>
