<template>
  <div v-for="user in users">{{user}}</div>
</template>

<script>
import {fetchJobsList} from "../api/common"
export default {
  name: "JobsView",
  data() {
    return {
      users : [],
    }
  },
  created() {
    fetchJobsList()
        .then(response => {
          this.users = response.data
        })
        .catch(error => console.log(error));
  },

}
</script>
