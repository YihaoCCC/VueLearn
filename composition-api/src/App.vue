<template>

    <div style="position: absolute; top: 20px; text-align:center;width:100%">
      <router-link to="/tiphome">主页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link to="/home">家庭</router-link>
      <router-link to="/profile/cyh">个人中心</router-link>
    </div>
    <router-view></router-view>

  
</template>

<script>
import {watch} from 'vue'
import {useRoute} from 'vue-router'
export default {
  name: 'App',
  setup() {
    const route = useRoute()
    watch(route, (newv,old) => {
      console.log('-----')
      console.log(newv)
      console.log('oooo')
      console.log(old)
      if(newv.fullPath.includes('profile') ) {
        alert('个人中心')
      }
    })
  },
  watch: {
    $route(newV, old) {
      console.log(newV, old)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.left {
  width: 50%;
}
.right {
  width: 50%;
  height: 1000px;


}
</style>
