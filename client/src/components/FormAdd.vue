<template>
  <form @keydown.enter="submit" class="text-white p-4">
    <label class="">New Backlogs</label>
    <input :disabled="isLoading" v-model="description" type="text" class="form-control mb-1" placeholder="backlog description">
    <small v-if="!isRequired"> please at least write backlog description </small>
    <input :disabled="isLoading" v-model="asignee" type="text" class="form-control mb-1" placeholder="asignee">

    <small v-if="!isLoading"> hints: press enter to submit. or click on the individual card to edit </small>
    <spinner v-if="isLoading"/>
  </form>
</template>

<script>
import db from '@/firebase'
import spinner from 'vue-spinner/src/PulseLoader'

export default {
  data () {
    return {
      asignee: '',
      description: '',
      isLoading: false,
      isRequired: true
    }
  },
  components: {
    spinner
  },
  methods: {
    submit () {
      if (this.description === '') {
        this.isRequired = false
      } else {
        this.isLoading = true
        db.collection('kanban').add({
          description: this.description,
          asignee: this.asignee,
          stage: 0,
          created_at: new Date()
        }).then(() => {
          this.isLoading = false
          this.asignee = ''
          this.description = ''
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style>

</style>
