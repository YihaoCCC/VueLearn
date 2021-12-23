<template>
  <div>
      <button @click="show = !show"> bounce keyframe</button>
    <transition name="bounce">
      <h1 v-if="show">let's bounce together keyframe</h1>
    </transition>

  </div>
</template>
<script>
import transition from './transition.vue'
export default {
  components: { transition },
    data() {
        return {
            show: true
        }
    }
}
</script>
<style scoped>
    .bounce-enter-active {
        animation: keyframesName .8s ease;
    }
    .bounce-leave-active {
        animation: keyframesName .8s ease reverse;
    }
    .bounce-enter-from,
    .bounce-leave-to {
        opacity: 0;
    }
    .bounce-enter-active,
    .bounce-leave-active {
        transition:  all .8s;
    }
    @keyframes keyframesName {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>