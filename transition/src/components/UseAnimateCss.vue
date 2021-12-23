<template>
  <div>
    <div>
        <button @click="bounce"> UseAnimateCss</button>
    </div>
    <transition enter-active-class="animate__animated animate__backInLeft"
                leave-active-class="animate__animated animate__backOutRight"
                >
      <h1 v-show="show">let's bounce together with AnimateCss</h1>
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
h1 {
display: inline-block;
}

</style>
