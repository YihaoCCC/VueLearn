<template>
  <div>
    <h1>Vue-Transition</h1>
    <router-link to='home' tag='button'> 
      基础动画  
    </router-link>
    <router-link to='scroll' tag='button'> 
      滚动页面延时加载动画  
    </router-link>
    <router-link to='lax' tag="button">
        lax.js 实现
    </router-link>
    <router-link to='laxtext' tag="button">
        lax.js 实现文本
    </router-link>
    <br>
    <router-view />

  </div>
</template>

<script>


export default {
  name: 'App',

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
