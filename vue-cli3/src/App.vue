<template>
  <div id="app"><tool-bar></tool-bar><router-view></router-view></div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";

export default {
  methods: {},
  components: {
    ToolBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
