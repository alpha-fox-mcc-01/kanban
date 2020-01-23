<template>
  <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 text-xl" :class="stage.color">
    {{stage.name}}
    <div class="p-24 flex flex-wrap items-center justify-center">
      <ContentCard v-for="(currentTask, i) in currentTasks" :key="i" :currentTask="currentTask" />
    </div>
  </div>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'
export default {
  name: 'StagesCard',
  props: ['stage', 'tasks'],
  data () {
    return {
    }
  },
  components: {
    ContentCard
  },
  computed: {
    currentTasks () {
      let sorted = []
      this.tasks.forEach(task => {
        if (task.status === this.stage.status) {
          sorted.push(task)
        }
      })
      return sorted
    }
  }
}
</script>
