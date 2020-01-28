<template>
  <div class="col-md-1">
    <img v-b-tooltip.hover title="Switch to Edit Mode" @click="$emit('changeEditState')" src='@/assets/settingsIcon.png' width=50 height=50 /><br /><br />
    <img v-b-modal.modal-1 v-b-tooltip.hover title="Add New Task" src='@/assets/newTask.png' width=50 height=50 />
    <FormTask />
  </div>
</template>

<script>
import FormTask from '@/components/FormTask.vue'
export default {
  components: {
    FormTask
  }
}
</script>

<style>
img {
  cursor: pointer;
  transition: 0.3s;
  opacity: 0.6;
}
img:hover {
  opacity: 1.5;
}
.col-md-1 {
  background-color:  white;
  margin-top: auto;
  margin-bottom: auto;
}
</style>
