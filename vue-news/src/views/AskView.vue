<template>

  <div v-for="item in fetched_ask">
    <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
    <small>
      <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
      by {{item.time_ago}}
    </small>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "AskView",
  computed: {
    ...mapGetters(['fetched_ask'])
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  }
}
</script>

<style scoped>

</style>