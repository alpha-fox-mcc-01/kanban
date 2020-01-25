<template>
   <div class="col-md-3 mb-4">
    <div class="container p-3 rounded-top" :class="box.color">
      <h3 class="mb-0">{{ box.name }}</h3>
    </div>
    <div class="container border rounded-bottom">
      <!-- {{myTasks}} -->
      <contentCard
       v-for="task in myTasks" :key="task.id"
        :task="task"
        :box="box"
       />
      <content/>
    </div>
  </div>
</template>

<script>
import contentCard from '../components/contentCard'
export default {
 name: 'kanbanCard',
  props: {
    box: Object,
    tasks: Array,
  },
  components:{
    contentCard
  },
  computed: {
    myTasks() {
      const arr = [];
      this.tasks.forEach((task) => {
        if (task.status === this.box.name) {
          arr.push(task);
        }
      });
      return arr;
    },
  },
}
</script>

<style>

</style>