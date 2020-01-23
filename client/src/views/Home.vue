<template>
  <div class="home">
    <h3>KanBania</h3>
    <div class="flex mb-4">
      <StagesCard v-for="(stage, i) in stages" :key="i" :stage="stage" :tasks="tasks" ></StagesCard>
    </div>
  </div>
</template>

<script>
import StagesCard from '@/components/StagesCard.vue'
import db from '@/config/firebase.js'

export default {
  name: 'home',
  components: {
    StagesCard
  },
  data () {
    return {
      stages: [
        { name: 'Back-Log', status: 'backlog', color: 'bg-red-300' }, { name: 'To-do', status: 'todo', color: 'bg-yellow-300' }, { name: 'On-going', status: 'ongoing', color: 'bg-blue-300' }, { name: 'Done', status: 'done', color: 'bg-green-300' }],
      tasks: []
    }
  },
  created: function () {
    db.collection('tasks').onSnapshot((doc) => {
      this.tasks = []
      doc.docs.forEach((result) => {
        let newTask = result.data()
        newTask.id = result.id
        this.tasks.push(newTask)
      })
    })
  }
}
</script>
