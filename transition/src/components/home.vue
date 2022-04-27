<template>
  <div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <keyframe></keyframe>
    <transition-mode></transition-mode>
    <use-animate-css></use-animate-css>
    <gsap></gsap>
    <transition-group-test></transition-group-test>
  </div>
</template>

<script>
import HelloWorld from './transition.vue'
import Keyframe from './keyframe.vue'
import TransitionMode from './TransitionMode.vue'
import UseAnimateCss from './UseAnimateCss.vue'
import gsap from './gsap.vue'
import TransitionGroupTest from './TransitionGroup.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    Keyframe,
    TransitionMode,
    UseAnimateCss,
    gsap,
    TransitionGroupTest
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
