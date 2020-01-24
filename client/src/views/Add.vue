<template>
  <div class="container">
    <form @submit.prevent="addTask">
      <div class="form-group">
        <label for="description">Title Task</label>
        <input type="text" class="form-control" v-model="title" />
      </div>
      <div class="form-group">
        <label for="description">Task Description</label>
        <input type="text" class="form-control" v-model="description" />
      </div>
      <div class="form-group">
        <label for="asignee">Task Asignee</label>
        <input type="text" class="form-control" v-model="asignee" />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import db from '../config/firebase.js'
export default {
  name: 'AddTask',
  data () {
    return {
      title: '',
      description: '',
      asignee: '',
      status: 'Todo'
    }
  },
  methods: {
    addTask () {
      db.collection('tasks')
        .add({
          title: this.title,
          description: this.description,
          asignee: this.asignee,
          status: this.status
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style>
</style>
