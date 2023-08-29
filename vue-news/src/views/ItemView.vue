<template>
  <div class="home">
    <section class="header-container">
      <UserProfile :user-info="fetchedItem"></UserProfile>
    </section>
    <section>
      <h2>{{ userQuestion }}</h2>
      <div v-html="userContent" class="content"></div>
    </section>
    <section>
      <h3>Comments</h3>
      <div v-for="item in fetchedItem.comments" :key="item.id" class="content">
        <UserProfile :user-info="item"></UserProfile>
        <div v-html="item.content"></div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';

export default {
  components: {
    UserProfile,
  },
  created() {
    this.$emit('on:progress');
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId)
      .then(() => this.$emit('off:progress'))
      .catch(error => console.log('user fetch error', error));
  },
  computed: {
    ...mapGetters([
      'fetchedItem', 'userName', 'userTimeAgo', 
      'userQuestion', 'userContent', 'contentPoints']),
  },
}
</script>

<style scoped>
.home {
  padding: 0 1.8rem;
}
.header-container {
  padding-top: 1rem;
}
.user-container {
  display: flex;
  align-items: center;
}
.fa-user-circle {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
h3 {
  margin-bottom: 0.5rem;
  margin-left: 0.2rem;
}
.content {
  border: ridge;
  padding: 0.5rem;
}
</style>