<template>
  <div>
    <ul class="news-list">
      <li v-for="(item, index) in fetched_jobs" class="post">
        <div class="points">
          {{ index }}
        </div>
        <div>
          <p class="news-title">
            <a :href="item.url">{{ item.title }}</a>
          </p>
          <small class="link-text">
            {{ item.domain }} by {{ item.time_ago }}
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

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

<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}

.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}

.news-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>
