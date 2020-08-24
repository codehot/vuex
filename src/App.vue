<template>
  <div id="app">
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <hello-vuex :counter="counter"/>
  </div>
</template>

<script>
import helloVuex from '@/components/HelloVuex'
export default {
  name:"App",
  data(){
    return {
      counter:0,
      message:"我是App组件"
    }
  },
  components:{
    helloVuex
  },
  methods:{
    addition(){
      this.$store.commit("increment")
    },
    subtraction(){
      this.$store.commit("decrement")
    }
  }
}
</script>
<style>

</style>
