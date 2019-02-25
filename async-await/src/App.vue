<template>
  <div>
    <button @click="loginUser">login</button>
    <h1>List</h1>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => console.log(response))
        .catch(error => console.log(error));
    },
  },
}

</script>