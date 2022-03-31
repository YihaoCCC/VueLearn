<template>
  <div>
      Home
      <router-link to="/home/message">消息</router-link>
      <router-link to="/home/settings">设置</router-link>
      <router-link to="/home/pdf">    pdf </router-link>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>