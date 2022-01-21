<template>
  <div id="app">
    <!-- <el-button type="primary" @click="completeCard" v-if="compomentName === '' ">去填表</el-button>
    <el-button type="primary" @click="compomentName = '' " v-else >回到主页</el-button>
    <transition name="test" mode="out-in" appear >
        <component :is="compomentName"></component>
    </transition> -->
    <!-- <healthy-report></healthy-report> -->
    <!-- <patient></patient> -->
    <patient-go-out></patient-go-out>
  </div>
</template>

<script>
// import HealthyReport from './components/HealthyReport.vue'
// import Patient from './components/Patient.vue'
import PatientGoOut from './components/PatientGoOut.vue'
// import ReportCard from './components/ReportCard.vue'
// import HIVReport from './components/HIVReport'

export default {
  name: 'App',
  components: {
    // HealthyReport,
    // Patient,
    PatientGoOut
    // ReportCard,
    // HIVReport
  },
  data() {
    return {
      compomentName: ''
    }
  },
  methods: {
    completeCard() {
      this.compomentName = 'report-card'
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
.test-leave-to,
.test-enter-from {
  opacity: 0;
  transform: translateY(-100) scale(0.5);
}
.test-enter-active,
.test-leave-active {
  transition: all .5s ease;
}
</style>
