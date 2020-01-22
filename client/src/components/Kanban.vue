<template>
  <div class="kanbanContainer">
    <!-- <b-card-group deck style="margin:1%"> -->
    <b-row deck style="margin:1%">
      <b-col lg="3" sm="6" cols="12" class="todoContainer">
        <b-card bg-variant="secondary" text-variant="white" header="Backlog" class="text-center">
          <b-card-text>
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
            <KanbanItem />
          </b-card-text>
        </b-card>
      </b-col>

      <b-col lg="3" sm="6" cols="12" class="todoContainer">
        <b-card bg-variant="primary" text-variant="white" header="Todo" class="text-center">
          <b-card-text>
            <draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
              <div v-for="(item, i) in items" :key="i">{{item.name}}</div>
            </draggable>
          </b-card-text>
        </b-card>
      </b-col>

      <b-col lg="3" sm="6" cols="12" class="todoContainer">
        <b-card bg-variant="danger" text-variant="white" header="Ongoing" class="text-center">
          <b-card-text></b-card-text>
        </b-card>
      </b-col>

      <b-col lg="3" sm="6" cols="12" class="todoContainer">
        <b-card bg-variant="success" text-variant="white" header="Done" class="text-center">
          <b-card-text></b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <!-- </b-card-group> -->
  </div>
</template>

<script>
import KanbanItem from '@/components/KanbanItem.vue'
import draggable from 'vuedraggable'

export default {
  name: 'Kanban',
  components: {
    KanbanItem,
    draggable
  },
  data () {
    return {
      items: [{name: 'Ceritanya Todo A'},{name: 'Ceritanya Todo B'},{name: 'Ceritanya Todo C'},{name: 'Ceritanya Todo D'},{name: 'Ceritanya Todo E'}]
    }
  }
}
</script>

<style>
.todoContainer {
  margin-bottom: 1%;
}
</style>
