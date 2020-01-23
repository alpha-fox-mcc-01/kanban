<template>
  <div class="home container">
    <div class="row mt-4">
      <ContentBox
        v-for="(box, i) in boxes" :key="i"
        :box="box"
        :tasks="tasks"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../assets/config';
import ContentBox from '../components/ContentBox.vue';

export default {
  name: 'Home',
  data() {
    return {
      tasks: [],
      boxes: [{
        name: 'Todo',
        color: 'bg-warning',
      }, {
        name: 'Doing',
        color: 'bg-info',
      }, {
        name: 'Done',
        color: 'bg-success',
      }],
    };
  },
  components: {
    ContentBox,
  },
  methods: {
    fetchTasks() {
      db.collection('tasks')
        .onSnapshot((doc) => {
          this.tasks = [];
          doc.docs.forEach((document) => {
            const updatedTask = document.data();
            updatedTask.id = document.id;
            this.tasks.push(updatedTask);
          });
        });
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>
