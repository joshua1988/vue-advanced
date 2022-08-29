<template>
  <div v-for="item in fetched_jobs">
    <a :href="item.url">{{item.title}}</a>
    <small>{{item.domain}} by {{item.time_ago}}</small>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: "JobsView",
  computed: {
    ...mapGetters(['fetched_jobs'])
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },

}
</script>
