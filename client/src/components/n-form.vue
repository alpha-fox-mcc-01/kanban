<template>
  <v-row justify="end" class="mx-5 mt-5">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Add Task</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Task Name*" required v-model="task"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Description*" required v-model="description"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Owner*" required v-model="owner"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="addTask">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: 'nForm',
  data() {
    return {
      dialog: false,
      task: '',
      description: '',
      owner: ''
    }
  },
  methods: {
    addTask () {
      this.$emit('addTask', {
        name: this.task,
        description: this.description,
        owner: this.owner
      })
      this.dialog = false
      this.task = ''
      this.description = ''
      this.owner = ''
    }
  },
}
</script>

<style>

</style>