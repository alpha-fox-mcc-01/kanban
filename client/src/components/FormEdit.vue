<template>
  <div class="">
    <form @keydown.enter.prevent="submit">
      <hr class="my-2">
      <label><small>Edit Card Description</small> </label>
      <input v-if="!isLoadingEdit" v-model="formDescription" type="text" class="form-control mb-1">

      <label><small>Edit Asignee: (press enter to submit)</small> </label>
      <input v-if="!isLoadingEdit" v-model="formAsignee" type="text" class="form-control mb-1">
      <spinner v-if="isLoadingEdit"/>
    </form><div class="my-2"></div>
    <spinner v-if="isLoadingRemove"/>
    <a v-if="!isLoadingRemove" @click.prevent="showConfirm" href="" class="text-danger">
      <i class="fas fa-times"></i> delete this card
    </a>

    <div v-if="confirmRemove">
    <small>are you sure?</small><br>
      <button @click="showConfirm" class="btn btn-outline-dark mr-1 btn-sm">no </button>
      <button @click="remove" class="btn btn-danger btn-sm">yes </button>
    </div>
  </div>
</template>

<script>
import spinner from 'vue-spinner/src/PulseLoader'
import db from '@/firebase'

export default {
  data () {
    return {
      isLoadingEdit: false,
      isLoadingRemove: false,
      confirmRemove: false,
      formDescription: '',
      formAsignee: ''
    }
  },
  components: {
    spinner
  },
  props: {
    id: String,
    asignee: String,
    description: String
  },
  methods: {
    submit () {
      if (this.description !== '') {
        this.isLoadingEdit = true
        db.collection('kanban').doc(this.id)
          .update({
            description: this.formDescription,
            asignee: this.formAsignee
          })
          .then(() => {
            this.description = ''
            this.$emit('toggleEdit')
            this.isLoadingEdit = false
          })
      }
    },
    showConfirm () {
      this.confirmRemove = !this.confirmRemove
    },
    remove () {
      this.isLoadingRemove = true
      db.collection('kanban').doc(this.id)
        .delete()
        .then(() => {
          this.$emit('toggleEdit')
          this.isLoadingRemove = false
        })
    }
  },
  created () {
    this.formAsignee = this.asignee
    this.formDescription = this.description
  }
}
</script>

<style>

</style>
