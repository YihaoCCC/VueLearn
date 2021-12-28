<template>
  <div id="app">
    <el-button type="primary" @click="completeCard" v-if="compomentName === '' ">去填表</el-button>
    <el-button type="primary" @click="compomentName = '' " v-else >回到主页</el-button>
    <component :is="compomentName"></component>
  </div>
</template>

<script>
import ReportCard from './components/ReportCard.vue'
import HIVReport from './components/HIVReport'

export default {
  name: 'App',
  components: {
    ReportCard,
    HIVReport
  },
  data() {
    return {
      compomentName: ''
    }
  },
  methods: {
    completeCard() {
      this.compomentName = 'HIVReport'
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
</style>
