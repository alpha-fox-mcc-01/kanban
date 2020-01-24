<template>
  <div class="kanbanContainer">
    <b-row deck style="margin:1%">
      <KanbanContainer header="Backlog" variant="secondary" :category="'backlog'"/>
      <KanbanContainer header="Todo" variant="primary" :category="'todo'"/>
      <KanbanContainer header="Ongoing" variant="danger" :category="'ongoing'"/>
      <KanbanContainer header="Done" variant="success" :category="'done'"/>
    </b-row>
  </div>
</template>

<script>
import KanbanContainer from '@/components/KanbanContainer.vue'

export default {
  name: 'Kanban',
  components: {
    KanbanContainer
  }
}
</script>

<style>
.todoContainer {
  margin-bottom: 1%
}
</style>
