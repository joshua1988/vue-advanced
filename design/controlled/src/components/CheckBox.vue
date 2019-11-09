<template>
  <input type="checkbox" :value="value" @click="toggleCheckBox"/>
</template>

<script>
export default {
  //v-model
  //@input 이벤트
  //:value 값 
  props: ['value'], //false
  methods:{
    toggleCheckBox(){
      this.$emit('input',!this.value)
    }
  }
}
</script>