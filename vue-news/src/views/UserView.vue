<template>
  <div class="container">
    <h2>User Profile</h2>
    <user-profile :userInfo="fetchedUser">
      <div slot="userName">{{ fetchedUser.id }}</div>
      <span slot="userKarma">{{ fetchedUser.karma }} karma</span>
    </user-profile>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile
  },
  created() {
    this.$emit('on:progress');
    const userId = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userId)
      .then(() => this.$emit('off:progress'))
      .catch(error => console.log('user fetch error', error));
  },
  computed: {
    ...mapGetters(['fetchedUser']),
  },
}
</script>

<style scoped>
.container {
  padding: 0 0.5rem;
}
</style>