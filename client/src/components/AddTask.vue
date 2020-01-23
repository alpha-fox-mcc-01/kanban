<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-6 offset-3 col-lg-4 offset-lg-4">
        <h1>Add Task</h1>
        <form @submit.prevent="addTask">
          <div class="form-group">
            <label for="title">Title</label>
            <input
              v-model="form.title"
              type="text" class="form-control" id="title" placeholder="Title"
            >
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input
              v-model="form.description"
              type="text" class="form-control" id="description" placeholder="Description"
            >
          </div>
          <div class="form-group">
            <label for="assignee">Assignee</label>
            <input
              v-model="form.assignee"
              type="text" class="form-control" id="assignee" placeholder="Assignee"
            >
          </div>
          <div class="form-check">
            <input
              v-model="form.status"
              class="form-check-input" type="radio" id="exampleRadios1" value="Todo" checked
            >
            <label class="form-check-label" for="exampleRadios1">
              Todo
            </label>
          </div>
          <div class="form-check">
            <input
              v-model="form.status"
              class="form-check-input" type="radio" id="exampleRadios2" value="Doing"
            >
            <label class="form-check-label" for="exampleRadios2">
              Doing
            </label>
          </div>
          <div class="form-check">
            <input
              v-model="form.status"
              class="form-check-input" type="radio" id="exampleRadios3" value="Done"
            >
            <label class="form-check-label" for="exampleRadios3">
              Done
            </label>
          </div>
          <button type="submit" class="btn btn-info mt-4">Add Task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import db from '../assets/config';

export default {
  name: 'AddTask',
  data() {
    return {
      form: {
        title: '',
        description: '',
        assignee: '',
        status: '',
      },
    };
  },
  methods: {
    addTask() {
      db.collection('tasks').add({
        title: this.form.title,
        description: this.form.description,
        assignee: this.form.assignee,
        status: this.form.status,
      })
        .then((docRef) => {
          this.form.title = '';
          this.form.description = '';
          this.form.assignee = '';
          this.form.status = '';
          this.$router.push('/');
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
  },
};
</script>

<style>

</style>
