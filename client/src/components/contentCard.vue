<template>
  <div class="card my-3">
    
    <h5 class="card-header">
      {{ task.title }}
      
    </h5>
    <div class="card-body">
      <div class="card-title">
        Assignee : {{ task.asignee }}
      </div>
      <div class="card-text mb-4">
        {{ task.desc }}
      </div>
    </div>
    <div class="card-footer">
      <button
        class="btn-sm m-2"
        :class="prevButton.color"
        v-if="box.name !== 'backLog'"
        @click="updateCardBackward(task.id)"
      >{{ prevButton.name }}</button>
      
      <button
        class="btn-sm btn-primary m-2"
        :class="nextButton.color"
        v-if="box.name !== 'Done'"
        @click="updateCardForward(task.id)"
      >{{ nextButton.name }}</button>
    </div>
    <button
        class="btn-sm btn-danger m-2"
        @click="deleteCard(task.id)"
      >Delete Task</button>
  </div>

</template>

<script>
import db from '../../config/firebase'
export default {
  data () {
    return {
      prevButton: {
        name: '',
        color: '',
      },
      nextButton: {
        name: '',
        color: '',
      },
    }
  },
  props:{
    task: Object,
    box: Object
  },
  methods:{
    deleteCard(id){
      db.collection('listkanban').doc(id).delete()
        .then(() => {
        })
        .catch(() => {
        });
    },
    updateCardBackward(id) {
      console.log('masuk backward');
      
      let status = '';
      if (this.box.name === 'Doing') {
        status = 'Todo';
      } else if (this.box.name === 'Done') {
        status = 'Doing';
      }else if (this.box.name === 'Todo') {
        status = 'backLog';
      }

      db.collection('listkanban').doc(id).update({
        status,
      })
        .then(() => {
        })
        .catch(() => {
          
          
        });
    },
    updateCardForward(id) {
      console.log('masuk forward');
      
      let status = '';
      if (this.box.name === 'Todo') {
        status = 'Doing';
      } else if (this.box.name === 'Doing') {
        status = 'Done';
      }else if (this.box.name === 'backLog') {
        status = 'Todo';
      }
      db.collection('listkanban').doc(id).update({
        status,
      })
        .then(() => {
        })
        .catch(() => {
        });
    },

  },
  created() {
    if (this.box.name === 'Todo') {
      this.prevButton.name = 'backLog';
      this.prevButton.color = 'btn-primary';
      this.nextButton.name = 'Doing';
      this.nextButton.color = 'btn-info';
    } else if (this.box.name === 'Doing') {
      this.prevButton.name = 'Todo';
      this.prevButton.color = 'btn-warning';
      this.nextButton.name = 'Done';
      this.nextButton.color = 'btn-success';
    } else if (this.box.name === 'Done') {
      this.prevButton.name = 'Doing';
      this.prevButton.color = 'btn-info';
    }else if (this.box.name === 'backLog') {
      this.nextButton.name = 'Todo';
      this.nextButton.color = 'btn-warning';
    }
  }
}
</script>

<style>

</style>