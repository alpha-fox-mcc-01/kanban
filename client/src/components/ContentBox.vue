<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="container p-3 rounded-top" :class="box.color">
      <h3 class="mb-0">{{ box.name }}</h3>
    </div>
    <div class="container border rounded-bottom">
      <ContentCard
        v-for="task in myTasks" :key="task.id"
        :task="task"
        :box="box"
      />
    </div>
  </div>
</template>

<script>
import ContentCard from './ContentCard.vue';

export default {
  name: 'ContentBox',
  props: {
    box: Object,
    tasks: Array,
  },
  components: {
    ContentCard,
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
};
</script>

<style>

</style>
