<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="content">
        <h1>KanBun</h1>
        <div class='row'>
          <TaskBar />
          <div class="col-md-11">
            <div class='row'>
              <Stage @getTasks="getTasks" v-for="(stage, i) in stages" :tasks="tasks" :stage='stage' :key="i" />
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import db from '../config/firebase'
import Stage from '@/components/Stage.vue'
import TaskBar from '@/components/TaskBar.vue'
export default {
  name: 'home',
  data () {
    return {
      stages: [{ name: 'Back Log', color: 'yellow' }, { name: 'To Do', color: 'red' }, { name: 'In Progress', color: 'blue' }, { name: 'Done', color: 'green' }],
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
    Stage,
    TaskBar
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

.container {
  height: 80%;
  width: 100rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -moz-transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
.content {
    border-radius: 25px;
    padding: 20px;
    width: 90%;
    height: 85%;
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
