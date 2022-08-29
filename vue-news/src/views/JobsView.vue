<template>
  <p v-for="item in fetchedJobs">
    <a :href="item.url">{{item.title}}</a>
    <small>{{item.time_ago}} by {{item.domain}}</small>
  </p>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  name: "JobsView",
  computed : {
    ...mapGetters(['fetchedJobs']),
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
}
</script>
