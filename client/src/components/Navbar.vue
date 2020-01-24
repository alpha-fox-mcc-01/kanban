<template>
  <div class="div">
    <nav class="navbar navbar-dark bg-dark justify-content-between">
      <router-link class="navbar-brand" to="/">GanBan-te <i class="fas fa-fist-raised ml-1"></i></router-link>
      <form class="form-inline my-1">
        <div class="md-form form-sm my-0">
        </div>
        <router-link class="btn btn-danger btn-sm my-0" to="/newtask">Add Task</router-link>
      </form>
    </nav>
  </div>
</template>

<script>
export default {
   name : `navbar`
};
</script>

<style>
</style>