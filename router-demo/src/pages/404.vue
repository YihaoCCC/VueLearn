<template>
  <div style="text-aline: center">
     <h1>404</h1>
     <button @click="GoIndex">回到主页</button>
  </div>
</template>

<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
    const GoIndex = () => {
        router.push('/home')
    }
</script>

<style>

</style>