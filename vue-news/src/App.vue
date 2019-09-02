<template>
  <div id="app">
    <ToolBar></ToolBar>
    <router-view></router-view>
  </div>
  <!-- test -->
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  }
}
</script>

<style>
</style>
