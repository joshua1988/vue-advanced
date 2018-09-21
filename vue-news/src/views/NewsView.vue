<template>
  <div>
    <p v-for="news in this.$store.state.news" :key="news.id">
      <a :href="news.url">{{ news.title }}</a><br>
      <small>{{ news.time_ago }} by {{ news.domain }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_NEWS')
      .then(() => console.log('success'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>
