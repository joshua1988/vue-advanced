<template>
  <div>
    <p v-for="ask in this.$store.state.ask" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a><br>
      <small>{{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASK')
      .then(() => console.log('success'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>
