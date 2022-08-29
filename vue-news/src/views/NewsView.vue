<template>
  <div v-for="item in fetched_news">
    <a :href="item.url">{{ item.title }}</a>
    <small>
      <router-link :to="`/user/${item.user}`">{{item.user}} </router-link>
      by {{item.time_ago}}
    </small>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "NewsView",
  computed: {
    ...mapGetters(['fetched_news'])
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
  methods: {}
}
</script>

<style scoped>

</style>