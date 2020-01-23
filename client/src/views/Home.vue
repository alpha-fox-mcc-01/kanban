<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="content">
        <h1>KanBun</h1>
        <div class='row'>
          <div class="col-md-1">
            <img src='@/assets/settingsIcon.png' width=50 height=50 /><br /><br />
            <img v-b-modal.modal-1 src='@/assets/newTask.png' width=50 height=50 />
            <FormTask />
          </div>
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
import FormTask from '@/components/FormTask.vue'

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
    FormTask
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
  background-color: rgb(199, 197, 197);
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

.col-md-1 {
  background-color:  white;
  margin-top: auto;
  margin-bottom: auto;
}
.col-md-11 {
  min-height: 44.5rem;
  background-color: rgb(250, 249, 249);
}
img {
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.6;
}
img:hover {
  opacity: 1.5;
}
</style>
