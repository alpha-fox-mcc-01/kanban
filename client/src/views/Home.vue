<template>
  <div class="home">
    <NavigationBar />
    <Kanban />
  </div>
</template>

<script>
// @ is an alias to /src
import NavigationBar from '@/components/Navbar.vue'
import Kanban from '@/components/Kanban.vue'

export default {
  name: 'home',
  components: {
    NavigationBar,
    Kanban
  }
}
</script>
