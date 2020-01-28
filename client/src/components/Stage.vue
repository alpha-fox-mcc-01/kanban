<template>
  <div class='col-md-3'>
    <h3>{{ stage.name }}</h3>
    <hr :style="{ 'border-color': stage.color }">
    <div id='tasks-div'>
      <Task :isEditing="isEditing" v-for="task in filteredTasks" :task="task" :stage="stage" :key="task.id"></Task>
    </div>
  </div>
</template>

<script>
import Task from '@/components/Task.vue'
export default {
  name: 'stage',
  props: {
    tasks: Array,
    stage: Object,
    isEditing: Boolean
  },
  components: {
    Task
  },
  computed: {
    filteredTasks: function () {
      let arr = []
      this.tasks.forEach(task => {
        if (task.status === this.stage.name) {
          arr.push(task)
        }
      })
      return arr
    }
  }
}
</script>

<style>
#tasks-div {
  height: 40rem;
  overflow-y: auto;
  overflow: -moz-scrollbars-none;
}
#tasks-div::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#tasks-div::-webkit-scrollbar
{
  width: 5px;
  background-color: #F5F5F5;
}

#tasks-div::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: grey;
}
</style>
