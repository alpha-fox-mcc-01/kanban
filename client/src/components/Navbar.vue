<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">KANBING</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
      <!-- <b-button v-b-modal.modal-center size="sm" class="my-2 my-sm-0" type="submit">New Task</b-button> -->
    </b-navbar-nav>
    <!-- <AddBacklog /> -->
    <InputAlert />
  </b-navbar>
</template>

<script>
// import AddBacklog from '@/components/addBacklog.vue'
import InputAlert from '@/components/InputAlert.vue'
export default {
  name: 'navbar',
  components : {
    InputAlert
  }
}
</script>

<style>
</style>