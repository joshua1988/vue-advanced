<template>
  <div>
    jobs
  </div>
</template>

<script>
import { fetchJobs } from '../api/index.js';

export default {
  created() {
    fetchJobs()
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
