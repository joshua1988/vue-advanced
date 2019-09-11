<template>
  <div>
    <div v-for="user in users">{{ user }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users:[]
    }
  },
  created() {
    var vm = this;
    // axios.get의 결과로 new Promise() 라는 객체 반환해줌.
    axios.get('https://api.hnpwa.com/v0/news/1.json')
    .then(function(response) {
      console.log(response);
      vm.users = response.data;
    })
    .catch(function(error) {
      console.log(error);
    })
  },
}
</script>

<style>

</style>
