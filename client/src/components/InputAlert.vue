<template>
  <b-button size="sm" class="my-2 my-sm-0" v-on:click="alertDisplay">New Task</b-button>
</template>

<script>
  export default {
    name: 'InputAlert',
    data() {
      return {}
    },
    methods: {
        alertDisplay() {
          this.$swal.mixin({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            progressSteps: ['1', '2', '3','4','5']
          }).queue([
              'Title',
              'Description',
              'Question 3',
              'Question 4',
              'Question 5'
            ])
              .then((result) => {
                if (!result.value[0]) {
                  this.$swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Title can\'t be blank',
                  })
                } else {
                  console.log(result.value)
                }
              })
        }
    }
  }
</script>