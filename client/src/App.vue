<template>
  <v-app>
    <n-bar />
    <v-content>
      <v-row no-gutters>
        <v-col
          cols="12"
          sm="2"
          class="mx-3"
        >
          <n-card :task="backlog" color="pink"/>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          class="mx-3"
        >
          <n-card :task="todo" color="grey"/>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          class="mx-3"
        >
          <n-card :task="doing" color="blue"/>
        </v-col>
        <v-col
          cols="12"
          sm="3"
          class="mx-3"
        >
          <n-card :task="done" color="green"/>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
import nBar from './components/n-bar'
import nCard from './components/n-card'
export default {
  name: 'App',
  data() {
    return {
      backlog: 'Backlog',
      todo: 'To-do',
      doing: 'Doing',
      done: 'Done'
    }
  },
  components: {
    'n-bar': nBar,
    'n-card': nCard
  }
}
</script>
