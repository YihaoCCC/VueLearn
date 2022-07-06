<template>
  <div class="input">
      <h3>input输入框</h3>
      <p>（支持自定义width，placeholder，支持v-model并保证了单项数据流）</p>
      <yh-input placeholder='请输入您的密码' v-model="password" width='400px' inputType='password'> </yh-input>
      <yh-input placeholder='请输入您的用户名' v-model="username" width='300px' inputType='text'> </yh-input>
      用户名：{{username}}
      密码：{{password}}
      <div class="floatSquare">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </div>
  </div>
  <yh-welcome welcomeText='hello world'></yh-welcome>
  
</template>

<script>
import YhInput from '@/components/YhInput'
import YhWelcome from '@/components/YhWelcome'
import { ref } from 'vue'
export default {
  components: {
    YhInput,
    YhWelcome
  },
  setup() {
    const password = ref('123456789')
    const username = ref('陈奕豪')
    return {
      password,
      username
    }
  },
  
}
</script>

<style lang='scss' scoped>
.input {
  width: 100%;
  height: 200px;
  background: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);
}
.floatSquare {
  position: relative;
  li {
    width: 60px;
    height: 60px;
    list-style: none;
    border: 2px solid #fecfef;
    position: absolute;
    border-radius: 6px;
    animation: square 6s ease-in-out infinite;
    &:first-child{
      top: 0;
      left: 0;
    }
    &:last-child {
      top: 0;
      right: 0;
    }
    @keyframes square {
        0% {
          transform: scale(0) rotateY(0) translateY(0);
          opacity: 1;
        }
        100% {
          transform: scale(4) rotateY(1000deg) translateY(100px);
          opacity: 0;
        }
    }
  }
}
</style>