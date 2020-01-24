<template>
  <nav class="navbar navbar-light bg-light justify-content-between">
  <h3>GanBan Board</h3>
  <ModalAdd />
</nav>
</template>

<script>
import ModalAdd from './ModalAdd'
export default {
  name: 'Navbar',
  components: {
    ModalAdd
  }
}
</script>

<style>

</style>
