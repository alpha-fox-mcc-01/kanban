<template>
  <div class="card" style="width: 100%;">
    <div class="card-body">
      <h5 class="card-title"><span :style="{color: stage.color}">&bull;&nbsp;</span>{{ task.title }}</h5>
      <p><span class='edit' @click="$bvModal.show(`modal-edit-${task.id}`)">Edit</span> | <span class='delete' @click='deleteTask'>Delete</span></p>
      <b-modal :id="`modal-edit-${task.id}`" title="Add New Task" hide-footer>
        <form @submit.prevent="editTask">
          <div class="form-group">
            <label for="task-title">Title</label>
            <input type="title" v-model="editedTask.title" class="form-control" id="task-title" aria-describedby="titleHelp" placeholder="Enter title..." required>
          </div><hr />
          <div class="form-group">
            <label for="exampleInputDescription1">Description</label>
            <input type="text" v-model="editedTask.description" class="form-control" id="exampleInputDescription1" placeholder="Description..." required>
          </div>
          <div class="form-group">
            <label for="exampleInputDescription1">Assign To</label>
            <input type="text" v-model="editedTask.assigned_to" class="form-control" id="exampleInputDescription1" placeholder="Assignee..." required>
          </div>
          <hr>
          <b-button type="submit" class="mt-3" block @click="$bvModal.hide('modal-edit')">Submit</b-button>
        </form>
      </b-modal>
      <h6 class="card-subtitle mb-2 text-muted">{{ task.assigned_to }}</h6>
      <p class="card-text">{{ task.description }}</p>
      <div class='row'>
        <div class='col-md-6'>
          <button type='button' @click='changeStatus(-1)'>&larr;</button>
        </div>
        <div class='col-md-6'>
          <button type='button' @click='changeStatus(1)'>&rarr;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import db from '../config/firebase.js'
export default {
  props: {
    task: Object,
    stage: Object
  },
  data () {
    return {
      stages: ['Back Log', 'To Do', 'In Progress', 'Done'],
      editedTask: {
        title: this.task.title,
        description: this.task.description,
        assigned_to: this.task.assigned_to,
        status: this.task.status
      }
    }
  },
  methods: {
    changeStatus (index) {
      let old = this.stages.findIndex(element => element === this.task.status)
      if (old + Number(index) >= 0 && old + Number(index) <= 3) {
        db.collection('tasks').doc(this.task.id).update({ status: this.stages[old + Number(index)] })
      }
    },
    editTask () {
      db.collection('tasks').doc(this.task.id).set(this.editedTask)
      Swal.fire('Success', 'Task Edited!', 'success')
    },
    deleteTask () {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          db.collection('tasks').doc(this.task.id).delete().then(function () {
            Swal.fire('Success', 'Task Deleted!', 'success')
          }).catch(function (error) {
            console.log('Error Removing document: ', error)
          })
        }
      })
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 1rem !important;
}
.edit {
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.6;
}
.edit:hover {
  opacity: 1.5;
}
.delete {
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.6;
}
.delete:hover {
  opacity: 1.5;
}
</style>
