<template>
  <div class="welcome "  id="main" ref="showModel" :class="show ? 'animate__animated animate__fadeOut' : ''"></div>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo orders"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
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
              <el-menu-item index="4" >Orders</el-menu-item>
      <el-menu-item  class="profile">
        个人中心
      </el-menu-item>
  </el-menu>
   
  <div style='display:flex;justify-content: flex-start'>
    <div class="leftBar">
          <el-menu
            active-text-color="#ffd04b"
            background-color="#545c64"
            class="el-menu-vertical-demo"
            :default-active="activeIndex"
            text-color="#fff"
          >
            <template v-for="item in ItemList" :key="item.url">
              <template v-if="item.type === 2">
                <el-menu-item :index="item.url" @click="handleClick(item)" >
                  <el-icon><icon-menu /></el-icon>
                  <span>{{item.name}}</span>
                </el-menu-item>
              </template>
              <template v-else>
                <el-sub-menu :index="item.url">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{item.name}}</span>
                </template>
                <template v-for="child in item.children" :key="child.url">               
                  <el-menu-item :index="child.url" @click="handleClick(child)">{{child.name}}</el-menu-item>
                </template> 
                </el-sub-menu>
              </template>
            </template>
            
          </el-menu>
  </div>
  <div class="rightContent"> 
    <router-view v-slot="props">
      <transition leave-active-class="animate__animated animate__fadeOutDown"
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

import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import matchRouter from '../utils/matchRouter'
import { Location, Document, Menu as IconMenu, Setting} from '@element-plus/icons-vue'

import * as echarts from 'echarts/core';
import { GraphicComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import {useStore} from 'vuex';

export default {
  components: {
    Location,
    Document,
    IconMenu,
    Setting
  },
  setup() {
      const showModel = ref(null)
      const show = ref(false)
      const router = useRouter()
      const activeIndex = ref(null)
      const option = {
        graphic: {
          elements: [
            {
              type: 'text',
              left: 'center',
              top: 'center',
              style: {
                text: '欢迎来到小奕在线办公服务系统',
                fontSize: 80,
                fontWeight: 'bold',
                lineDash: [0, 200],
                lineDashOffset: 0,
                fill: 'transparent',
                stroke: '#666',
                lineWidth: 1
              },
              keyframeAnimation: {
                duration: 3200,
                loop: false,
                keyframes: [
                  {
                    percent: 0.7,
                    style: {
                      fill: 'transparent',
                      lineDashOffset: 200,
                      lineDash: [200, 0]
                    }
                  },
                  {
                    // Stop for a while.
                    percent: 3,
                    style: {
                      fill: 'transparent'
                    }
                  },
                  {
                    percent: 1,
                    style: {
                      fill: '#666'
                    }
                  }
                ]
              }
            }
          ]
        }
      };
      const store = useStore()
      const ItemList = store.state.userStore.menuItem
      onMounted(() => {
        echarts.use([GraphicComponent, CanvasRenderer]);

        var chartDom = document.getElementById('main');
        var myChart = echarts.init(chartDom);
        option && myChart.setOption(option);
        activeIndex.value = useRoute().fullPath
        closeModel()
        
        const route = matchRouter(store.state.userStore.menuItem)
        console.log('用户菜单中匹配到的路由')
        console.log(route);
        // 添加到路由中
        route.forEach((item) => {
          router.addRoute('home',item)
        })
      })
      // 关闭蒙版
      const closeModel = () => {
        setTimeout(() => {
          show.value = true
          // showModel.value.addAttribute('class', 'animate__animated animate__fadeOut')
          
        }, 5000)
      }
      setTimeout(() => {
        showModel.value.style.display = 'none'
      },5500)
   
      const handleClick = (item) => {
        activeIndex.value = item.url
        router.push(item.url)
      }
      return {
        ItemList,  // 后端传回的菜单列表
        handleClick,
        activeIndex,
        showModel,
        show
      }
    }
}

</script>


<style>
.welcome {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(243, 238, 238, 0.329);  
  z-index: 100;
  transition:  all .5s ease;
}
.logo{
  width: 200px;
  font-size: 18px;
}
.leftBar {
  width: 11.8%;
}
.rightContent {
  width: 86%;
  min-height: 91.6vh;
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

.profile {
  position: absolute;
  top: 0px;
  right: 20px;

}
</style>