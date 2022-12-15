<template>
  <div>
    <button @click="loginUser">login</button>
    <h1>List</h1>
    <ul>
      <li v-for="item in items"> {{ item }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      item: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicoded.com/users/1')
      .then(response => {
        if(response.data.id === 1) {
          axios.get('https://jsonplaceholder.typicoded.com/todos')
          .then(response => {
            this.item = response.data;
          })
          .catch();
        }
      })
      .catch(error => console.log(error));
    }
  }
}
</script>

<style>

</style>