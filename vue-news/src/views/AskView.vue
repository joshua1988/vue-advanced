<template>
  <div>
    <div v-for="user in users">{{user}}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index'
export default {
  name: "AskView",
  data() {
    return {
      users : [],
    }
  },
  created() {
    fetchAskList()
        .then(responwse => {
          this.users = responwse.data;
        })
        .catch(error => console.log(error));
  }
}
</script>

<style scoped>

</style>