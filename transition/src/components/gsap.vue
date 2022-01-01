<template>
  <div>
      <h1>gasp实现动画</h1>
      <input type="text" step="100" v-model='counter'>
      {{showCounter.toFixed(2)}}
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
    data() {
        return {
            counter: 100,
            showCounter: 0
        }
    },
    mounted() {
        gsap.to(this, {
            duration: 2,
            showCounter: this.counter
        })
    },
    watch: {
        counter(newValue) {
            gsap.to(this, {
                duration: 2,
                showCounter: newValue
            })
        }
    }
}
</script>

<style>

</style>