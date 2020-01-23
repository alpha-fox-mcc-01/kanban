<template>
  <div class="card my-3">
    <h5 class="card-header">
      {{ task.title }}
      <button
        class="btn-sm btn-danger m-2"
        @click="deleteCard(task.id)"
      ><i class="fas fa-ban"></i></button>
    </h5>
    <div class="card-body">
      <div class="card-title">
        Assignee : {{ task.assignee }}
      </div>
      <div class="card-text mb-4">
        {{ task.description }}
      </div>
    </div>
    <div class="card-footer">
      <button
        class="btn-sm m-2"
        :class="prevButton.color"
        v-if="box.name !== 'Todo'"
        @click="updateCardBackward(task.id)"
      >{{ prevButton.name }}</button>
      <button
        class="btn-sm btn-primary m-2"
        :class="nextButton.color"
        v-if="box.name !== 'Done'"
        @click="updateCardForward(task.id)"
      >{{ nextButton.name }}</button>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import db from '../assets/config';

export default {
  name: 'ContentCard',
  data() {
    return {
      prevButton: {
        name: '',
        color: '',
      },
      nextButton: {
        name: '',
        color: '',
      },
    };
  },
  props: {
    task: Object,
    box: Object,
  },
  methods: {
    deleteCard(id) {
      db.collection('tasks').doc(id).delete()
        .then(() => {
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
    updateCardBackward(id) {
      let status = '';
      if (this.box.name === 'Doing') {
        status = 'Todo';
      } else if (this.box.name === 'Done') {
        status = 'Doing';
      }
      db.collection('tasks').doc(id).update({
        status,
      })
        .then(() => {
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
    updateCardForward(id) {
      let status = '';
      if (this.box.name === 'Todo') {
        status = 'Doing';
      } else if (this.box.name === 'Doing') {
        status = 'Done';
      }
      db.collection('tasks').doc(id).update({
        status,
      })
        .then(() => {
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>',
          });
        });
    },
  },
  created() {
    if (this.box.name === 'Todo') {
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
    }
  },
};
</script>

<style scoped>
.btn-sm {
  cursor: pointer;
}
</style>
