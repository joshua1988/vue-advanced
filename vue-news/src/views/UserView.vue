<template>
  <p>id : {{user.id}}</p>
  <p>karma : {{user.karma}}</p>
  <p>create : {{user.created}}</p>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "UserView",
  computed:{
    ...mapState({
      user : 'user'
    })
  },
  created() {
   const userName = this.$route.params.id;
   this.$store.dispatch('FETCH_USER',userName);
  }
}
</script>

<style scoped>

</style>