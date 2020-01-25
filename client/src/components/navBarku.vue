<template>
<div>
 <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
  <a class="navbar-brand" href="#">hahaha</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
<ul class="navbar-nav ml-auto">
           <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
             Add Task
           </button>
        </ul>
</nav>

<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
  <div class="form-group">
    <label >title</label>
    <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="title">
  </div>
  <div class="form-group">
    <label >desc</label>
    <input class="form-control" id="exampleInputPassword1" v-model="desc">
  </div>
   <div class="form-group">
    <label >asignee</label>
    <input class="form-control" id="exampleInputPassword1" v-model="asignee">
  </div>
   <button type="button" class="btn btn-primary" @click.prevent="addTask" data-dismiss="modal">Add Task</button>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
name: 'navBarku'
import db from '../../config/firebase'
export default {
  data () {
    return {
      title: '',
      desc: '',
      asignee: ''
    }
  },
  methods:{
    addTask(){
      // console.log('masuk kesini');
      
       db.collection('listkanban')
        .add({
          title: this.title,
          desc: this.desc,
          asignee: this.asignee,
          status: 'backLog'
        })
        .then(data =>{
          this.$router.push('/')
          console.log('daat masuk');
          this.title = ''
          this.desc = ''
          this.asignee = ''
          
        })
        .catch(err =>{
          console.log(err);
          
        })
    }
  }
}
</script>

<style>

</style>