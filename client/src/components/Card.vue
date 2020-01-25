<template>
  <div class="card mb-1">

    <div class="d-flex justify-content-between align-items-center px-2">
      <div @click="backward"  id="toLeft"><i class="fa-btn fas fa-chevron-left fa-2x"></i></div>
      <div id="content" class="card-body d-flex flex-column justify-content-between">
        <div class="d-flex">
          <small class="mr-auto" v-if="card.created_at">{{card.created_at.toDate().toLocaleDateString('en-GB', {day: '2-digit', month: 'short', year: 'numeric'}).replace(/ /g, '-')}}</small>
        </div>
        <div class="">
          <h6 @click="edit">{{card.description}}</h6>
          <i v-if="card.asignee" ><small>asignee: {{card.asignee}}</small></i>
        </div>
        <formEdit v-if="showEditForm" :description="card.description" :asignee="card.asignee" :id="card.id" v-on:toggleEdit="edit"/>
      </div>

      <div @click="onward" id="toRight"><i class="fa-btn fas fa-chevron-right fa-2x"></i></div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase'
import formEdit from './FormEdit'

export default {
  components: {
    formEdit
  },
  props: ['card'],
  data () {
    return {
      showEditForm: false
    }
  },
  methods: {
    edit () {
      this.showEditForm = !this.showEditForm
    },
    onward () {
      db.collection('kanban').doc(this.card.id)
        .update({
          stage: this.card.stage + 1
        })
    },
    backward () {
      db.collection('kanban').doc(this.card.id)
        .update({
          stage: this.card.stage - 1
        })
    },
    remove () {
      db.collection('kanban').doc(this.card.id)
        .delete()
        .then()
    }
  }
}
</script>

<style>

* {
  user-select: none;
}
h6 {
  cursor: pointer;
}
h6:hover i {
 visibility:visible;
}

.fa-btn{
  cursor: pointer;
}

.fa-btn:hover{
  transform: translateY(2px)
}
</style>
