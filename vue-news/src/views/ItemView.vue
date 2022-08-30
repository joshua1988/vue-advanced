<template>
  <div>
    <section>
      <div class="user-container">
        <div>
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="user-discription">
          <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
          <div class="time">
          {{ item.time_ago }}
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2>{{ item.title }}</h2>
      <div v-html="item.content"></div>
      <textarea></textarea>
      <div>
        <button>add button</button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import itemCss from '../css/itemVue.css'

export default {
  name: "itemView",
  computed: {
    userId() {
      return this.$route.params.id;
    },
    ...mapState({
      item: 'item',
    })
  },
  created() {
    console.log(this.userId);
    this.$store.dispatch('FETCH_ITEMS', this.userId);
  }
}
</script>
