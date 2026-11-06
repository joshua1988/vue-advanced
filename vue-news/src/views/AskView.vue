<template>
  <div>
    <list-item></list-item>
  </div>
</template>

<script>
import ListItem from '../components/ListItem.vue';

export default {
  components: {
    ListItem
  },
  created() {
    this.$emit('on:progress');
    this.$store.dispatch('FETCH_ASK')
      .then(() => this.$emit('off:progress'))
      .catch(() => console.log('fail'));
  }
}
</script>

<style>

</style>
