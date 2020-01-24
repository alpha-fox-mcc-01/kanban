<template>
  <div class="container mt-4">
    <div class="row">
      <div
        class="col-5 border p-4 border-primary rounded mb-4"
        style="margin-left: auto; margin-right: auto"
      >
        <h3 class="mt-0 mb-4">
          <strong>Add task to kanban</strong>
        </h3>
        <form class="my-2" @submit.prevent="submitKanban">
          <div class="form-group">
            <label for="title">Title</label>
            <input class="form-control" placeholder="title for new task..." v-model="title" />
          </div>
          <div class="form-group">
            <label for="description">Description</label>
            <input
              class="form-control"
              placeholder="The detail for the task..."
              v-model="description"
            />
          </div>
          <div class="form-group">
            <label for="assignee">Assignee</label>
            <input
              class="form-control"
              placeholder="Who you wanna give the task to...."
              v-model="assignee"
            />
          </div>
          <div class="form-group">
            <label for="status">Status</label>
            <select class="custom-select" v-model="status">
              <option value="Back-log">Back-log</option>
              <option value="Todo">Todo</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>
          <button type="submit" class="btn btn-danger mt-4 mb-0">Add new task</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "../config/firebase"
export default {
  name: `newTask`,
  data() {
    return {
      title: "",
      description: "",
      assignee: "",
      status: "Back-log"
    };
  },
  methods: {
    submitKanban() {
      db.collection("tasks")
        .add({
         title: this.title,
         description: this.description,
         assignee: this.assignee,
         status: this.status
        })
         .then((docRef) => {
            this.$router.push('/')
        })
         .catch((error) => {
            console.log(error)
        })
    }
  }
};
</script>

<style>
</style>
