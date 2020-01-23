<template>
  <div class="col-md-11">
    <div class='row'>
      <Stage @getTasks="$emit('getTasks')" v-for="(stage, i) in stages" :tasks="tasks" :stage='stage' :key="i" />
    </div>
  </div>
</template>

<script>
import Stage from '@/components/Stage.vue'
export default {
  components: {
    Stage
  },
  props: {
    tasks: Array,
    stages: Array
  }
}
</script>

<style>

</style>
