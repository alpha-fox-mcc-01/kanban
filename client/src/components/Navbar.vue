<template>
<div>
  <b-button v-b-modal.modal-1>Add New Task</b-button>
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
}
</style>
