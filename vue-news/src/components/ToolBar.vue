<template>
  <div class="header" :class="{ 'fixed': isFixed }" ref="appHeader">
    <img src="../assets/logo.svg" alt="logo" class="logo">
    <router-link to="/news">News</router-link> |
    <router-link to="/ask">Ask</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navHeight: 0,
      isFixed: false,
    }
  },
  mounted() {
    this.navHeight = this.$refs.appHeader.offsetHeight;
    window.addEventListener('scroll', this.checkHeight);
  },
  methods: {
    checkHeight() {
      this.isFixed = window.scrollY > this.navHeight ? true : false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkHeight);
  }
}
</script>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.logo {
  width: 30px;
  margin-right: 18px;
}
a {
  margin: 0 5px;
}
</style>
