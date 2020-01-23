<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="content">
        <h2>K A N B U N</h2>
        <hr>
        <div class='row'>
          <OptionsBar />
          <TasksList :stages="stages" :tasks="tasks"/>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import db from '../config/firebase'
import OptionsBar from '@/components/OptionsBar.vue'
import TasksList from '@/components/TasksList.vue'
export default {
  name: 'home',
  data () {
    return {
      stages: [{ name: 'Back Log', color: 'gold' }, { name: 'To Do', color: 'red' }, { name: 'In Progress', color: 'blue' }, { name: 'Done', color: 'green' }],
      tasks: []
    }
  },
  methods: {
    getTasks () {
      db.collection('tasks')
        .onSnapshot((doc) => {
          this.tasks = []
          doc.docs.forEach(task => {
            let document = task.data()
            document.id = task.id
            this.tasks.push(document)
          })
        })
    }
  },
  components: {
    OptionsBar,
    TasksList
  },
  created () {
    this.getTasks()
  }
}
</script>

<style scoped>
.home {
  width: 120rem;
  height: 100vh;
  /* background-image: url('../assets/darkwallpaper1.jpg'); */
  background-image: url('../assets/brightwallpaper1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content {
    border-radius: 25px;
    padding: 20px;
    width: 90%;
    height: 87%;
    background-color:white;

    position:absolute; /*it can be fixed too*/
    left:0; right:0;
    top:0; bottom:0;
    margin:auto;

    /*this to solve "the content will not be cut when the window is smaller than the content": */
    max-width:100%;
    max-height:100%;
    /* overflow:auto; */
    }
</style>
