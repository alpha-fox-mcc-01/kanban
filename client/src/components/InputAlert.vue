<template>
  <b-button size="sm" class="my-2 my-sm-0" v-on:click="alertDisplay">New Task</b-button>
</template>

<script>
export default {
  name: 'InputAlert',
  data () {
    return {
      title: '',
      description: '',
      assigned: '',
      priority: ''
    }
  },
  methods: {
    alertDisplay () {
      this.$swal.mixin({
        input: 'text',
        confirmButtonText: 'Next &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3', '4']
      }).queue([
        'Title',
        'Description',
        'Assigned To',
        'Priority Scale'
      ])
        .then((result) => {
          if (!result.value[0]) {
            this.$swal({
              icon: 'error',
              title: 'Oops...',
              text: 'Title can\'t be blank'
            })
          } else {
            const data = {
              title: result.value[0],
              description: result.value[1],
              assigned: result.value[2],
              priority: result.value[3]
            }
            this.$store.dispatch('addCard', data)
              .then(() => {
                this.$swal({
                  icon: 'success',
                  title: 'Added to the database',
                  showConfirmButton: false,
                  timer: 1500
                })
              })
          }
        })
    }
  }
}
</script>
