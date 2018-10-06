<template>
  <div>
    <p v-for="ask in this.$store.state.ask" :key="ask.id">
      <router-link :to="`item/${ask.id}`">{{ ask.title }}</router-link><br>
      <small>
        {{ ask.time_ago }} 
        by 
        <router-link :to="'/user/' + ask.user">{{ ask.user }}</router-link>
      </small>
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
