<template>
  <div id="card" class="flex-shrink-0 m-6 relative overflow-hidden bg-white rounded-lg max-w-xs shadow-lg">
    <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">{{currentTask.title}}</div>
      <p class="text-gray-700 text-base">
        {{currentTask.description}}
      </p>
    </div>
    <div class="px-6 py-4">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Assignee: {{currentTask.owner}}</span>
  </div>
  <b-button @click="deleteTask" variant="outline-danger">Delete</b-button>
  </div>
</template>

<script>
import db from '@/config/firebase.js'

export default {
  props: ['currentTask'],
  methods: {
    deleteTask () {
      db.collection('tasks').doc(`${this.currentTask.id}`).delete()
        .then(function() {
          console.log('Document successfully deleted!')
      }).catch(function(error) {
          console.error('Error removing document: ', error)
      })
    }
  }
}
</script>

<style scoped>
#card {
  width: 15em;
  height: 15em;
  background-image: url('https://img.freepik.com/free-photo/design-space-paper-textured-background_53876-42312.jpg?size=626&ext=jpg');
}
</style>
