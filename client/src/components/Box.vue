<template>
   <div class="col-3 my-5">
      <div class="border container rounded-top py-2" :class="box.bgColor">
         <h5 class="mt-2" style="color: white"><strong>{{box.name}}</strong></h5>
      </div>
      <div class="border rounded-bottom" style="max-height: 70vh; overflow: auto; background-color: whitesmoke">
         <Content 
         v-for="tasks in statusTask"
         :key="tasks.id"
         :tasks="tasks"
         :box="box"
         />
      </div>
   </div>
</template>

<script>
import Content from "./Content"
export default {
   name : `Box`,
   props : ['tasks', 'box'],
   components : {
      Content
   },
   data  () {
      return {
         
      }
   },
   computed: {
      statusTask () {
         const arr = []
         this.tasks.forEach((data) => {
            if(data.status === this.box.name) {
               arr.push(data)
            }
         })
         return arr
      }
   }
}
</script>

<style>

</style>