<template>
  <div>
    ask
  </div>
</template>

<script>
import { fetchAsk } from '../api/index.js';

export default {
  created() {
    fetchAsk()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
