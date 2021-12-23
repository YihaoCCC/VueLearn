<template>
  <div>
    <button @click="bounce"> bounce</button>
    <transition name="bounce">
      <h1 v-show="show">let's bounce together</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    bounce() {
      this.show = !this.show
    }
  }
}
</script>

<style scoped>

.bounce-enter-from,
.bounce-leave-to {
  opacity: 0;
}

.bounce-enter-to,
.bounce-leave-from {
  opacity: 1;
}

.bounce-enter-active,
.bounce-leave-active {
  transition:  all .8s;
} 
</style>
