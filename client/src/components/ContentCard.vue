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
  <b-button-group class="mx-1">
    <b-button>&lsaquo;</b-button>
    <b-button>Edit</b-button>
    <b-button @click="deleteTask">Delete</b-button>
    <b-button>&rsaquo;</b-button>
  </b-button-group>
  </div>
</template>

<script>
import db from '@/config/firebase.js'
import Swal from 'sweetalert2'

export default {
  props: ['currentTask'],
  methods: {
    deleteTask () {
      Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this task',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        db.collection('tasks').doc(`${this.currentTask.id}`).delete()
          .then(function() {
             Swal.fire(
              'Deleted!',
              'Your task has been deleted.',
              'success'
            )
            }).catch(function(error) {
             Swal.fire(
              'Failed!',
              'Unable to delete task',
              'error'
            )
        })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
    },
    upgradeStatus () {
      let updatedStatus
      switch (this.currentTask.status) {
        case 'backlog':
          updatedStatus = 'todo'
          break
        case 'todo':
          updatedStatus = 'ongoing'
          break
        case 'ongoing':
          updatedStatus = 'done'
          break
      }
      db.collection('tasks').doc(`${this.currentTask.id}`).set({
        status: updatedStatus
      })
        .then (result => {

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
