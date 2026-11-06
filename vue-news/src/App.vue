<template>
  <div id="app">
    <progress-bar :loading="loading"></progress-bar>
    <tool-bar></tool-bar>
    <transition name="routing-fade" mode="out-in">
      <router-view @on:progress="onProgress" @off:progress="offProgress"></router-view>
    </transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue';
import ProgressBar from './components/ProgressBar.vue';

export default {
  components: {
    ToolBar,
    ProgressBar
  },
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    onProgress() {
      this.loading = true;
    },
    offProgress() {
      this.loading = false;
    }
  },

}
</script>

<style>
body {
  margin: 0;
}

a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
a.router-link-active {
  text-decoration: underline;
}

/* Router Transition */
.routing-fade-enter-active, .routing-fade-leave-active {
  transition: opacity .3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
