<template>
  {{item}}
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "itemView",
  computed : {
    userId(){
      return this.$route.params.id;
    },
    ...mapState({
      item : 'item',
    })
  },
  created() {
    console.log(this.userId);
    this.$store.dispatch('FETCH_ITEMS',this.userId);
  }
}
</script>
