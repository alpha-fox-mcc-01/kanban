<template>
  <div>
    <h1></h1>
    <div class="card my-3">
      <div class="card-header bg-white py-2 px-2">
        <h5 class="card-title mb-0">{{task.title}}</h5>
      </div>
      <div class="card-text text-left py-2 px-2">
        <p class="card-text">Task Description: {{task.description}}</p>
        <p class="card-text">Assigned To : {{task.asignee}}</p>
      </div>
      <div class="container text-center my-2">
        <!-- Move to Previous Box -->
        <button
          type="button"
          class="btn btn-sm float-left"
          :class="prevBox.color"
          v-if="box.name !== 'Back-Log'"
          @click="moveBack(task.id)">
          {{this.prevBox.name}}
        </button>
        <!-- Swal Delete -->
        <button
          type="button"
          class="btn btn-sm bg-danger"
          @click="deleteTask(task.id)">
          Delete
        </button>
        <!-- Move to Next Box -->
        <button
          type="button"
          class="btn btn-sm float-right"
          :class="nextBox.color"
          v-if="box.name !== 'Done'"
          @click="moveForward(task.id)">
          {{this.nextBox.name}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import db from '../config/firebase'
import Swal from 'sweetalert2'
export default {
  name: 'ContentCard',
  data () {
    return {
      prevBox: {
        name: '',
        color: ''
      },
      nextBox: {
        name: '',
        color: ''
      }
    }
  },
  props: {
    task: Object,
    box: Object
  },
  methods: {
    moveBack (id) {
      let status = ''
      if (this.box.name === 'Todo') {
        status = 'Back-Log'
      } else if (this.box.name === 'Doing') {
        status = 'Todo'
      } else {
        status = 'Doing'
      }
      db.collection('tasks')
        .doc(id)
        .update({
          status
        })
        .then(() => {
        })
        .catch(() => {
        })
    },
    moveForward (id) {
      let status = ''
      if (this.box.name === 'Back-Log') {
        status = 'Todo'
      } else if (this.box.name === 'Todo') {
        status = 'Doing'
      } else {
        status = 'Done'
      }
      db.collection('tasks')
        .doc(id)
        .update({
          status
        })
        .then(() => {
        })
        .catch(() => {
        })
    },
    deleteTask (id) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.value) {
            Swal.fire(
              'Deleted!',
              'Your Tasks has been deleted.',
              'success'
            )
            return db.collection('tasks').doc(id).delete()
          }
        })
        .then(() => {
        })
        .catch(() => {
        })
    }
  },
  created () {
    if (this.box.name === 'Back-Log') {
      this.nextBox.name = 'Todo'
      this.nextBox.color = 'bg-warning'
    } else if (this.box.name === 'Todo') {
      this.prevBox.name = 'Back-Log'
      this.prevBox.color = 'bg-danger'
      this.nextBox.name = 'Doing'
      this.nextBox.color = 'bg-primary'
    } else if (this.box.name === 'Doing') {
      this.prevBox.name = 'Todo'
      this.prevBox.color = 'bg-warning'
      this.nextBox.name = 'Done'
      this.nextBox.color = 'bg-success'
    } else {
      this.prevBox.name = 'Doing'
      this.prevBox.color = 'bg-primary'
    }
  }
}
</script>

<style>
</style>
