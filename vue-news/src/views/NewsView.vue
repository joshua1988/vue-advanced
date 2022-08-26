<template>
 <div>
   <div v-for="user in users">{{user.title}}</div>
 </div>
</template>

<script>
export default {
  name: "NewsView",
  data() {
    return {
      users: [],
    }
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
  methods: {

  }
}
</script>

<style scoped>

</style>