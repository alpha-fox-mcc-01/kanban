<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="content">
      <div id='title'>
        <h2>K A N B U N</h2>
      </div>
      <hr>
      <div class='row'>
        <OptionsBar @changeEditState='changeEditState'/>
        <TasksList :isEditing="isEditing" :stages="stages" :tasks="tasks"/>
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
      tasks: [],
      isEditing: false
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
    },
    changeEditState () {
      if (this.isEditing) {
        this.isEditing = false
      } else {
        this.isEditing = true
      }
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
@import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
.home {
  font-family: 'Raleway', sans-serif;
  width: 120rem;
  height: 100vh;
  /* background-image: url('../assets/darkwallpaper1.jpg'); */
  background-image: url('../assets/brightwallpaper1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
/* #title {
  color:white;
  border-style: solid;
  border-color:black;
  border-width: 2px;
  border-radius: 10px;
  background-image: url('https://thumbs.gfycat.com/SpiffyForkedAntarcticfurseal-size_restricted.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
} */
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
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
  /* overflow:auto; */
}
</style>
