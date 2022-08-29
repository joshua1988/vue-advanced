<template>
 <div>
   <p v-for="item in this.$store.state.news">
     <a :href="item.url">{{item.title}}</a>
     <small>{{item.time_ago}} by {{item.user}}</small>
   </p>
 </div>
</template>

<script>
export default {
  name: "NewsView",
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
  methods: {

  }
}
</script>

<style scoped>

</style>