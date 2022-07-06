<template>
<div>
<div class="formContent">
        <h4>
            核酸检测信息申报
        </h4>
        <div class="content">
            <yh-input v-model="name" placeholder="请输入姓名" inputType="text" width="400px"></yh-input>
            <yh-input v-model='id' placeholder='请输入身份证号' inputType="password"></yh-input>
            <!-- <el-cascader
                size="large"
                :options="options"
                v-model="selectedOptions"
                @change="handleChange">
            </el-cascader> -->
            <button class="subButton" @click="submit">立即申报</button>
        </div>
        
    </div>

        <div class="modal" v-if="show">
            
            <transition name="fade">
                 <!-- <p v-if="ImgShow">hello</p> -->
                <div class="dialog" v-if="ImgShow">
                    <h4 style="text-align:center;font-size:20px;color:#666">核酸检测信息申请成功</h4>
                    <div class="tag">
                        <span>检测时向工作人员请出示此二维码</span>
                    </div>
                    <div id="code" class="code">
                        <img :src="imgUrl" alt="">
                    </div>    
                    <div style="text-align:center">
                        <button class="subButton" @click="close">我知道了</button>
                    </div>     
                </div>
                <div v-else>
                    <loading></loading>
                </div>
            </transition>
                
           
            
        </div>
</div>
    
   
</template>
<script>
 import { regionDataPlus } from 'element-china-area-data'
import  { ref, nextTick } from 'vue'
import qrcode from 'qrcode'
import YhInput from '../components/YhInput.vue'
import loading from '../components/YhLoading.vue'

export default {
    components: {
        YhInput,
        loading,
    },
    
    setup () {
        const name = ref('')
        const id = ref('')
        const show = ref(false)
        const imgUrl = ref('')
        const ImgShow = ref(false)
        const showMessage = ref(false)
        const address = ref('')
        const submit = () => {
            show.value = !show.value
            
            setTimeout(() => {
                ImgShow.value = true  
            },3000)
            qrcode.toDataURL([
                 name.value,id.value
            ]).then(url => {
                imgUrl.value = url
                nextTick(() => {
                    ImgShow.value = false
                })
                console.log(url);
            })
        }
        const close = () => {
            ImgShow.value = false
            setTimeout(() => {
                show.value = false
            },1000)
        }
        const handleChange = (value) => {
            console.log(value);
        }
        return {
            imgUrl,
            ImgShow,
            name,
            id,
            showMessage,
            show,
            address,
            options: regionDataPlus,
            selectedOptions: [],
            handleChange,
            submit,
            close
        }
    }
}
</script>
<style lang="scss" scoped>
       
        .subButton {
                border-radius: 0.5em;
                cursor: pointer;
                width: 360px;
                height: 45px;
                margin: 30px 0;
                border: none;
                color: #fff;
                font-size: 18px;
                font-weight: bolder;
                letter-spacing: 10px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                background: linear-gradient(-200deg, #fac0e7,#aac2ee);
                transition: all .5s;
                &:hover {
                    background: linear-gradient(-200deg, #aac2ee,#fac0e7);
                    background-position-x: -360px;
                }
        }
    .formContent {
        width: 600px;
        margin: auto;
        padding: 20px 15px;
        background-color: #fff;
        box-shadow: inset 5px 5px 10px #a9a9aa77,
              inset -5px -5px 10px #ffffff7e;
        h4 {
            font-size: 40px;
            color: #666;
            text-align: center;
        }
        .content {
            height: 300px;
            text-align: center;   
        }
    }
    .modal {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 0;
      height: 100vh;
      background-color: #b0b4bc73;
      display: flex;
      align-items: center;
      justify-content: center;
      
      .dialog {
          position: relative;
          top: 0;
          width: 400px;
          height: 500px;
          background: linear-gradient(to bottom,rgb(249, 248, 248),rgb(221, 242, 219));
          margin: auto;
          border-radius: 20px;
          transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        //  &.fade-enter-active {
        //     transition: all .3s ease-out;
        // }

        // &.fade-leave-active {
            
        // } 
        &.fade-enter-from,
        &.fade-leave-to {
            // transform: translateX(20px);
            // opacity: 0;
            top: -1200px;
        }
        &.fade-enter-to,
        &.fade-leave-from {
            top: 0;
        }
         
        
          .tag {
              width: 100%;
              color: #666;
              text-align: center;
              padding: 10px 20px;
              background-color: rgba(230, 137, 56, 0.361);
              box-sizing: border-box;
          }
          .code {
              padding-top: 100px;
              text-align: center;
          }
      }
      @keyframes modal {
        from {
            top: -1200px;
        }
         to {
             top: 0px;
         }
      }
    }
</style>