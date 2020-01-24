<template>
  <div>
    <h1></h1>
    <div class="card my-3">
      <div class="card-body">
        <h5 class="card-title">{{task.title}}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{task.description}}</h6>
        <p
          class="card-text"
        >{{task.asignee}}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContentCard',
  props: {
    task: Object
  }
}
</script>

<style>
</style>
