<template>
  <div>
    <section>
        <!--사용자 정보-->
        <user-profile :info="fetchedItem">
            <router-link slot="username" :to="`/user/${fetchedItem.user}`">
                {{ fetchedItem.user }}
            </router-link>
            <template slot="time">{{ fetchedItem.time_ago }}</template>
        </user-profile>
    <section>
        <h2>{{fetchedItem.title}}</h2>
    </section>
    <section>
        <!--질문 댓글-->
        <div v-html="fetchedItem.content">
            
        </div>
    </section>
    </section>
  </div>
</template>

<script>
import UserProfile from '../components/UserProfile.vue';
import { mapGetters } from 'vuex';

export default {
  components: { UserProfile },
  computed: {
    ...mapGetters(['fetchedItem']),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>

</style>