<template>
  <div>
<!--    <div v-for="ask in fetchedAsk">{{ask.title}}</div>-->
    <p v-for="item in fetchedAsk">
      <a :href="item.url">{{item.title}}</a>
      <small>{{item.time_ago}} by {{item.domain}}</small>
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "AskView",
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
  computed : {
    ...mapState({
      fetchedAsk: state => state.ask
    })

  }

}
</script>

<style scoped>

</style>