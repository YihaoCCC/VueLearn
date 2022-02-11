<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item class="logo">小奕办公系统</el-menu-item>
    <el-menu-item index="1" >Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
  <div style='display:flex;justify-content: flex-start'>
 <div class="leftBar">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1" @click="GoMeeting">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2" @click="GoProfile">
          <el-icon><icon-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3" @click="GoAbout" >
          <el-icon><document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4" @click="GoHome">
          <el-icon><setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
  </div>
  <div class="rightContent"> 
    <router-view v-slot="props">
      <transition leave-active-class="animate__animated animate__bounceOutLeft"
                  enter-active-class="animate__animated animate__bounceInRight" 
                  appear
                  mode="out-in">
          <keep-alive >
              <component :is="props.Component" />
          </keep-alive>
      </transition>
    </router-view>
  </div>
  </div>
 
</template>

<script >

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Location, Document, Menu as IconMenu, Setting} from '@element-plus/icons-vue'

export default {
  components: {
    Location,
    Document,
    IconMenu,
    Setting
  },
  setup() {
      const router = useRouter()
      const activeIndex = ref('1')
      const handleSelect = (key, keyPath) => {
        console.log(key, keyPath)
      }

      const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
      }
      const GoAbout = () => {
        router.push('/home/about')
      }
      const GoProfile = () => {
        router.push('/home/profile')
      }
      const GoHome = () => {
        router.push('/home')
      }
      const GoMeeting= () => {
        router.push('/home/meeting')
      }
      return {
        activeIndex,
        handleSelect,
        handleClose,
        handleOpen,
        GoAbout,
        GoProfile,
        GoHome,
        GoMeeting
      }
    }
}

</script>


<style>
.logo{
  width: 200px;
  font-size: 18px;
}
.leftBar {
  width: 11.8%;
}
.rightContent {
  width: 86%;
  height: 91.6vh;
  border-radius: 20px;
  margin-left: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
  background-color: #f6f8f8;
  margin-top: 10px;
}
.el-menu-vertical-demo {
  height: 92.6vh;
}
.animate__animated.animate__bounceOutLeft {
  --animate-duration: 1s;
}
</style>