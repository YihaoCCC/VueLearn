<template>
    <div class="fixContent">
        <header style="color: #999;">
            <center>这个页面是门户，本次更新了div随着滚动进入的动画。</center>
        </header>
        <h2>描述</h2>
        <div class="subscribe" id="sub">
            <center>这是一些项目的描述文字</center>
        </div>
        <h2>介绍</h2>
        <div class="detail" id="detail">
            <center>这是一些项目的介绍</center>
        </div>
    </div>
    <div class="timeLine">
        <div class="left">
            <div class="item line1">
                <img src="https://joeschmoe.io/api/v1/random" alt="">
                <div class="itemcontent">
                    <div class="top">
                        <center>这是一些文字</center>
                    </div>
                    <div class="center">
                    </div>
                    <div class="buttom">
                        <center>这是一些文字</center>
                    </div>
                </div>
            </div>
            <div class="item line2">
                <img src="https://joeschmoe.io/api/v1/random" alt="">
            </div>
            <div class="item line3">
                <img src="https://joeschmoe.io/api/v1/random" alt="">
            </div>
        </div>
        <div class="inline">

        </div>
        <div class="right">

        </div>
    </div>
    <button @click="goIndex">进入控制台</button>

</template>
    
<script setup >

import { useRouter } from 'vue-router';
const router = useRouter()
const goIndex = () => {
    router.push('/home')
} 
</script>
 <style lang="scss" scoped>
 .fixContent {
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: -1;
     background: black;
     color: #fff;
 
     h2 {
         text-align: center;
     }
 
     .subscribe,
     .detail {
         center {
             height: 400px;
         }
     }
 }
 
 
 .timeLine {
     background: rgb(42, 42, 42);
     margin-top: 100vh;
     display: flex;
     align-items: center;
     justify-content: space-between;
     z-index: 2;
     color: #fff;
     .left {
        position: relative;
        width: 50%;
        padding: 0 20px;
        box-sizing: border-box;
        .item {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: space-between;
             img {
                 border-radius: 50%;
                 width: 100px;
                 height: 100px;
             }
             .itemcontent {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                .center {
                    height: 3px;
                    border-radius: 3px;
                    width: 100%;
                    background-color: azure;
                }
             }
         }
         .line1 {
            opacity: 1;
            position: absolute;
            top: 20px;
         }
     }
 
     .inline {
         width: 3px;
         background-color: aquamarine;
         height: 900px;
     }
     .right  {
        width: 50%;
     }
 }
 </style>   
