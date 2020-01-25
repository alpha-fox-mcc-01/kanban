<template>
  <div class="home row">
   <kanbanCard 
      v-for="(box, i) in boxes" :key="i"
      :box="box"
      :tasks="tasks"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import db from '../../config/firebase'
import kanbanCard from '../components/kanbanCard'
export default {
  name: 'home',
  data () {
    return {
       tasks: [],
      boxes: [{
        name: 'backLog',
        color: 'bg-primary',
      },{
        name: 'Todo',
        color: 'bg-warning',
      }, {
        name: 'Doing',
        color: 'bg-info',
      }, {
        name: 'Done',
        color: 'bg-success',
      }],
    }
  },
  components: {
    kanbanCard
  },
  methods: {
    fetchTasks() {
      db.collection('listkanban')
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
