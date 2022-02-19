<template>
  <div>
      ref带获取子组件
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    setup() {
        const selfData = ref('cyh')
        return {
            selfData
        }
    }
}
</script>

<style>

</style>