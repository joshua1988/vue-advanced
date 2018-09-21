<template>
  <div>
    user
  </div>
</template>

<script>
import { fetchUser } from '../api/index.js';

export default {
  created() {
    fetchUser('davideast')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
