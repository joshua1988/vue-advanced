<template>
 <div>
   <div v-for="user in users">{{user.title}}</div>
 </div>
</template>

<script>
import { fetchNewList } from '../api/index'
export default {
  name: "NewsView",
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchNewList()
        .then(response => {
          this.users = response.data;
          console.log(response);
        })
        .catch(error => console.log(error));
    this.test();
  },
  methods: {
    test : function() {
      console.log(this.users);
    }
  }
}
</script>

<style scoped>

</style>