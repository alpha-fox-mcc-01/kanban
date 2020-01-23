<template>
<div>
  <b-button pill size="sm" v-b-modal.modal-1  variant="info">Add New Task</b-button>
  <FormTask></FormTask>
</div>
</template>

<script>
import FormTask from '@/components/FormTask.vue'
export default {
  name: 'Navbar',
  data () {
    return {
      show: false
    }
  },
  components: {
    FormTask
  },
  methods: {
    showForm () {
      this.show = !this.show
    }
  }

}
</script>

<style scoped>
button {
  float: right;
  padding-left: 1em;
}
.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}
</style>
