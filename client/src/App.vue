<template>
  <div id="app">
    <div class="d-flex justify-content-start">
      <Board v-for="(board,i) in boards" :key="i" :board="board" class="board p-2"/>
    </div>
  </div>
</template>

<script>
import Board from './components/Board.vue'
import db from '@/firebase'

export default {
  data () {
    return {
      boards: []
    }
  },
  components: {
    Board
  },
  methods: {
    defineBoards () {
      this.boards = [
        {
          name: 'Backlog',
          color: 'bg-secondary',
          icon: 'fas fa-copy fa-3x text-white',
          cards: []
        },
        {
          name: 'To-do',
          color: 'bg-info',
          icon: 'fas fa-clipboard-list fa-3x text-white',
          cards: []
        },
        {
          name: 'On Progress',
          color: 'bg-primary',
          icon: 'fas fa-users-cog fa-3x text-white',
          cards: []
        },
        {
          name: 'Done',
          color: 'bg-success',
          icon: 'fas fa-check-double fa-3x text-white',
          cards: []
        }
      ]
    }
  },
  created () {
    db.collection('kanban').orderBy('created_at', 'desc')
      .onSnapshot((querySnapshot) => {
        this.defineBoards()
        querySnapshot.forEach(doc => {
          const row = doc.data()
          row.id = doc.ref.id
          this.boards[row.stage].cards.push(row)
        })
      })
  },
  mounted () {
  }
}
</script>

<style>
</style>
