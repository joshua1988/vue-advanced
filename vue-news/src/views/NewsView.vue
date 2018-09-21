<template>
  <div>
    news
  </div>
</template>

<script>
import { fetchNews } from '../api/index.js';

export default {
  created() {
    fetchNews()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
