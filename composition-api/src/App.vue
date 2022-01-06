<template>
  <mixin-extends></mixin-extends>
  <Composition></Composition>
  <ref-api></ref-api>
  <read-only></read-only>
  <Computed></Computed>
  <Watch></Watch>
</template>

<script>

import MixinExtends from './components/MixinExtends.vue'
import Composition from './components/Composition.vue'
import RefApi from './components/RefApi.vue'
import ReadOnly from './components/ReadOnly.vue'
import Computed from './components/Computed.vue'
import Watch from './components/Watch.vue'

export default {
  name: 'App',
  components: {
   MixinExtends,
   Composition,
   RefApi,
   ReadOnly,
   Computed,
   Watch
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
</style>
