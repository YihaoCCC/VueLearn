<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <keyframe></keyframe>
  <transition-mode></transition-mode>
  <use-animate-css></use-animate-css>
</template>

<script>
import HelloWorld from './components/transition.vue'

import Keyframe from './components/keyframe.vue'
import TransitionMode from './components/TransitionMode.vue'
import UseAnimateCss from './components/UseAnimateCss.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Keyframe,
    TransitionMode,
    UseAnimateCss
  }
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
