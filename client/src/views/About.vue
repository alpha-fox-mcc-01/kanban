<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import db from '../assets/config';

export default {
  name: 'About',
  created() {
    db.collection('tasks').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
  },
};
</script>
