<template>
  <div :class="board.color" style="width: 25%; min-width: 25rem; min-height:100vh">
    <div class="d-flex p-2 justify-content-between align-items-center">
      <div class="d-flex align-items-baseline">
        <i :class="board.icon" class=""></i>
        <h4 class="ml-2 text-white">{{board.name}}</h4>
      </div>
      <i @click.prevent="toggleForm" v-if="board.name == 'Backlog'" class="text-white fas fa-ellipsis-v fa-2x fa-btn"></i>
    </div>

    <FormAdd v-if="(board.name == 'Backlog') && (showForm==true)"/>

    <div class="card-body">
      <Card v-for="(card,i) in board.cards" :key="i" :card="card"/>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import FormAdd from './FormAdd'
export default {
  props: ['board'],
  data () {
    return {
      showForm: false
    }
  },
  components: {
    Card,
    FormAdd
  },
  methods: {
    toggleForm () {
      this.showForm = !this.showForm
    }
  }
}
</script>

<style>
</style>
