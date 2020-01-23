<template>
  <b-modal ref="my-modal" id="modal-1" title="Add New Task" :hide-footer="true">
    <b-container fluid>
    <form @submit.prevent="addTask">
    <b-row class="my-1">
      <b-col sm="3">
        <label for="`type-text`">Task Title:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="title" id="`type-text`" type="text"></b-form-input>
      </b-col>
    </b-row>
     <b-row class="my-1">
      <b-col sm="3">
        <label for="`type-text`">Description:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="description" id="`type-text`" type="text"></b-form-input>
      </b-col>
    </b-row>
     <b-row class="my-1">
      <b-col sm="3">
        <label for="`type-text`">Assignee:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input v-model="owner" id="`type-text`" type="text"></b-form-input>
      </b-col>
    </b-row>
    <b-row class="my-1">
      <b-col sm="3">
        <label for="`type-text`">Status:</label>
        <b-form-select v-model="status"
          id="input-3"
          :options="options"
          required
        ></b-form-select>
      </b-col>
    </b-row>
    <b-button type="submit" variant="primary" @click="hideModal">Submit</b-button>
    </form>
    </b-container>
  </b-modal>
</template>

<script>
import db from '@/config/firebase.js'
import Swal from 'sweetalert2'

export default {
  name: 'FormTask',
  data () {
    return {
      options: ['backlog', 'todo', 'ongoing', 'done'],
      title: '',
      description: '',
      owner: '',
      status: ''
    }
  },
  methods: {
    addTask () {
      Swal.fire('Added!', 'Task has been added', 'success')
      db.collection('tasks').add({
        title: this.title,
        description: this.description,
        owner: this.owner,
        status: this.status
      })
        .then((result) => {
          this.title = ''
          this.description = ''
          this.owner = ''
          this.status = ''
        })
        .catch((error) => {
          Swal.fire(`Unable to add task : ${error}`, 'error')
        })
    },
    hideModal () {
      this.$bvModal.hide('modal-1')
    }
  }
}
</script>
