<template>
<div style="display:flex;justify-content: space-between">
  <div class="left">
       <mixin-extends></mixin-extends>
      <Composition></Composition>
      <ref-api></ref-api>
      <read-only></read-only>
      <Computed></Computed> 
      <watch-effect></watch-effect>
       <watch></watch>
      <provider></provider> 
  </div>
  <div class="right">
      <use-counter></use-counter>
      <setup-style></setup-style>
      <render></render>
      <jsx></jsx>
      <v-focus></v-focus>
      <time-formats></time-formats>
      <plugins></plugins>
  </div>
</div>
  
  
</template>

<script>

import MixinExtends from './components/MixinExtends.vue'
import Composition from './components/Composition.vue'
import RefApi from './components/RefApi.vue'
import ReadOnly from './components/ReadOnly.vue'
import Computed from './components/Computed.vue'
import WatchEffect from './components/WatchEffect.vue'
import Watch from './components/Watch.vue'
import Provider from './components/Provider.vue'
import UseCounter from './components/useCounter.vue'
import SetupStyle from '@/components/setupStyle'
import Render from './components/render.vue'
import Jsx from './components/jsx.vue'
import VFocus from './components/v-focus.vue'
import TimeFormats from './directive/TimeFormat.vue'
import Plugins from './plugins/plugins.vue'

export default {
  name: 'App',
  components: {
   MixinExtends,
   Composition,
   RefApi,
   ReadOnly,
   Computed,
   WatchEffect,
    Watch,
    Provider,
    UseCounter,
    SetupStyle,
    Render,
    Jsx,
    VFocus,
    TimeFormats,
    Plugins
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
