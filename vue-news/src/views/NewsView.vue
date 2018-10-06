<template>
  <div>
    <p v-for="news in this.$store.state.news" :key="news.id">
      <a :href="news.url">{{ news.title }}</a><br>
      <small>
        {{ news.time_ago }} 
        by 
        <router-link :to="'/user/' + news.user">{{ news.user }}</router-link>
      </small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$emit('on:progress');
    this.$store.dispatch('FETCH_NEWS')
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>
