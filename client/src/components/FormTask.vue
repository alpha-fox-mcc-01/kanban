<template>
  <b-modal id="modal-1" title="Add New Task" hide-footer>
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="task-title">Title</label>
        <input type="title" v-model="newTask.title" class="form-control" id="task-title" aria-describedby="titleHelp" placeholder="Enter title..." required>
      </div><hr />
      <div class="form-group">
        <label for="exampleInputDescription1">Description</label>
        <input type="text" v-model="newTask.description" class="form-control" id="exampleInputDescription1" placeholder="Description..." required>
      </div>
      <div class="form-group">
        <label for="exampleInputDescription1">Assign To</label>
        <input type="text" v-model="newTask.assignee" class="form-control" id="exampleInputDescription1" placeholder="Assignee..." required>
      </div>
      <hr>
      <b-button type="submit" class="mt-3" block @click="$bvModal.hide('modal-1')">Submit</b-button>
    </form>
  </b-modal>
</template>

<script>
import Swal from 'sweetalert2'
import db from '../config/firebase'
export default {
  name: 'formTask',
  data () {
    return {
      newTask: {
        title: '',
        description: '',
        assignee: ''
      }
    }
  },
  methods: {
    addTask () {
      db.collection('tasks').add({
        title: this.newTask.title,
        description: this.newTask.description,
        assigned_to: this.newTask.assignee,
        status: 'Back Log'
      })
        .then(() => {
          this.newTask.title = ''
          this.newTask.description = ''
          this.newTask.assignee = ''
          Swal.fire('Success', 'Task Added!', 'success')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Sorry, something went wrong: ${err}`
          })
        })
    }
  }
}
</script>

<style>

</style>
