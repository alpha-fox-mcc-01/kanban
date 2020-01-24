<template>
  <div>
    <h1></h1>
    <div class="card my-3">
      <div class="card-header">
        <h5 class="card-title">{{task.title}}</h5>
      </div>
      <div class="card-body text-justify">
        <p class="card-text">Task Description: {{task.description}}</p>
        <p class="card-text">Assigned To : {{task.asignee}}</p>
      </div>
      <div class="mx-3 pb-2">
        <button
          type="button"
          class="btn btn-sm float-left"
          :class="prevBox.color"
          v-if="box.name !== 'Todo'"
          @click="moveBack(task.id)">
          {{this.prevBox.name}}
        </button>
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
      if (this.box.name === 'Doing') {
        status = 'Todo'
      } else if (this.box.name === 'Done') {
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
      if (this.box.name === 'Todo') {
        status = 'Doing'
      } else if (this.box.name === 'Doing') {
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
    }
  },
  created () {
    if (this.box.name === 'Todo') {
      this.nextBox.name = 'Doing'
      this.nextBox.color = 'bg-warning'
    } else if (this.box.name === 'Doing') {
      this.prevBox.name = 'Todo'
      this.prevBox.color = 'bg-danger'
      this.nextBox.name = 'Done'
      this.nextBox.color = 'bg-success'
    } else {
      this.prevBox.name = 'Doing'
      this.prevBox.color = 'bg-warning'
    }
  }
}
</script>

<style>
</style>
