<template>
  <div class="home">
    <div class="mx-5">
    <div class="row">
    <Box 
    v-for="(box, i) in boxes"
    :key=i
    :tasks="tasks"
    :box="box"
    />
    </div>
    </div>
    <!-- <Content /> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import db from '../config/firebase'
import Content from '../components/Content'
import Box from "../components/Box"

export default {
  name: "home",
  data() {
    return {
      tasks: [],
      boxes: [
        {
          name: "Back-log",
          bgColor: "bg-danger"
        },
        {
          name: "Todo",
          bgColor: "bg-primary"
        },
        {
          name: "Doing",
          bgColor: "bg-warning"
        },
        {
          name: "Done",
          bgColor: "bg-success"
        }
      ]
    };
  },
  components: {
    HelloWorld,
    Box
  },
  methods: {
    fetchFirebaseData() {
      db.collection("tasks").onSnapshot((doc) =>{
        this.tasks = [];
        doc.docs.forEach(data => {
          console.log(data.data(), `ini data`);
          const updatedTasks = data.data();
          console.log(data.id, `ini id cok`);
          updatedTasks.id = data.id;
          console.log(updatedTasks);
          
          this.tasks.push(updatedTasks);
        });
      });
    }
  },
  created() {
    this.fetchFirebaseData();
  }
};
</script>
