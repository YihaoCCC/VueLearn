<template>
  <div>
      about
  </div>
</template>

<script>
  import { getCurrentInstance } from 'vue'
 
  export default {
    setup () {
      const { ctx } = getCurrentInstance()
      // let value = ctx.$router.currentRoute.value
      // console.log(value)
      console.log(ctx)
    }
  }
</script>
<style>

</style>