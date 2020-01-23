<template>
  <div class="card" style="width: 100%;">
    <div class="card-body">
      <h5 class="card-title"><span :style="{color: stage.color}">&bull;&nbsp;</span>{{ task.title }}</h5>
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
import db from '../config/firebase.js'
export default {
  props: {
    task: Object,
    stage: Object
  },
  data () {
    return {
      stages: ['Back Log', 'To Do', 'In Progress', 'Done']
    }
  },
  methods: {
    changeStatus (index) {
      let old = this.stages.findIndex(element => element === this.task.status)
      if (old + Number(index) >= 0 && old + Number(index) <= 3) {
        db.collection('tasks').doc(this.task.id).update({ status: this.stages[old + Number(index)] })
      }
    }
  }
}
</script>

<style>
.card {
  margin-bottom: 1rem !important;
}
</style>
