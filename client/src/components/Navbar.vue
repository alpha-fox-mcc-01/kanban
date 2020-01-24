<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">KANBING</b-navbar-brand>
    <b-navbar-nav class="ml-auto">
    </b-navbar-nav>
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