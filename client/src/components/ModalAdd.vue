<template>
  <div>
    <b-button
      v-b-modal.modal-center
      class="bg-primary"
      size="sm">
      Add Task
    </b-button>

    <b-modal
      id="modal-center"
      centered
      hide-footer
      title="BootstrapVue"
      ref="my-modal"
    >
      <form @submit.prevent="addTask">
        <div class="form-group">
          <label for="description">Task Title</label>
          <input type="text" class="form-control" v-model="title" required/>
        </div>
        <div class="form-group">
          <label for="description">Task Description</label>
          <input type="text" class="form-control" v-model="description" required/>
        </div>
        <div class="form-group">
          <label for="asignee">Task Asignee</label>
          <input type="text" class="form-control" v-model="asignee" required/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </b-modal>
  </div>
</template>

<script>
import db from '../config/firebase'
export default {
  name: 'ModalAdd',
  data () {
    return {
      title: '',
      description: '',
      asignee: '',
      status: 'Back-Log'
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
          this.title = ''
          this.description = ''
          this.asignee = ''
          this.$refs['my-modal'].hide()
        })
        .catch(() => {
        })
    }
  }
}
</script>

<style>
.modal-backdrop {
  background: rgba(0, 0, 0, 0.7);
}
</style>
