<template>
  <div>
      about
      <h1>vuex中数据</h1>
      counter: {{$store.state.counter}}
  </div>
</template>

<script>
  // import {useStore} from 'vuex'
  // import { getCurrentInstance } from 'vue'
 
  export default {
    setup () {
      // const { proxy } = getCurrentInstance()
      // let value = ctx.$router.currentRoute.value
      // console.log(value)
      // console.log('store')
      // console.log(useStore())
      // console.log('------')
      // console.log(proxy)
      // console.log(proxy.$store)
      // console.log(proxy.$router)
    }
  }
</script>
<style>

</style>