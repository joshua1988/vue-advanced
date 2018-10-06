<template>
  <div>
    <p v-for="job in this.$store.state.jobs" :key="job.id">
      <a :href="job.url">{{ job.title }}</a><br>
      <small>{{ job.time_ago }} by {{ job.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit('on:progress');
    this.$store.dispatch('FETCH_JOBS')
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>
