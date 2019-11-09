<template>
  <div>
    <fetch-data url="https://jsonplaceholder.typicode.com/users/1">
      <!-- ... -->
      <div slot-scope="{response, loading}">
        <div v-if="!loading">
          <p>name : {{response.name}}</p>
          <p>email : {{response.email}}</p>
        </div>
        <div v-if="loading">loading...</div>
      </div>
      
    </fetch-data>
  </div>
</template>

<script>
import FetchData from './components/FetchData.vue'

export default {
  components: {
    FetchData
  },
}
</script>