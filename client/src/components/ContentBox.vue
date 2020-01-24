<template>
  <div class="col-md-3 mb-4">
    <div class="container p-3 rounded-top" :class="box.color">
      <h4 class="mb-0">{{ box.name }}</h4>
    </div>
    <div class="container border rounded-bottom">
      <ContentCard
        v-for="task in myTasks"
        :key="task.id"
        :task="task"
        :box="box"
      />
    </div>
  </div>
</template>

<script>
import ContentCard from './ContentCard'

export default {
  data () {
    return {
    }
  },
  props: {
    tasks: Array,
    box: Object
  },
  computed: {
    myTasks () {
      let arr = []
      this.tasks.forEach(task => {
        if (task.status === this.box.name) {
          arr.push(task)
        }
      })
      return arr
    }
  },
  components: {
    ContentCard
  }
}
</script>

<style>

</style>
