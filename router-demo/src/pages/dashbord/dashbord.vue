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
            <div class="item line1" id="item1">
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
            <div class="item line3">
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
        </div>
        <div class="inline">

        </div>
        <div class="right">

        </div>
    </div>
    <button @click="goIndex">进入控制台</button>

</template>
    
<script setup >
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()
const goIndex = () => {
    router.push('/home')
}
onMounted(() => {
    const domList = document.getElementsByClassName('item')   
    const node1 = domList[0]
    const node2 = domList[1]
    const node3 = domList[2]
    const clientH = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.addEventListener('scroll', () => {
        let node1Top = node1.getBoundingClientRect().top;
        let node2Top = node2.getBoundingClientRect().top;
        let node3Top = node3.getBoundingClientRect().top;
        console.log("node1 "+ node1Top);
        let x1 = ((clientH-node1Top)*1)/372;
        if (node1Top <= clientH && x1 !== 1) {
            node1.style.opacity = `${x1}`;
            node1.style.transform = `translateX(-${(1-x1)*100}%)`;
        }
        console.log("node2 "+ node2Top);
        let x2 = ((clientH-node2Top)*1)/574;
        if (node2Top <= clientH && x2 !== 1) {
            node2.style.opacity = `${x2}`;
            node2.style.transform = `translateX(-${(1-x2)*100}%)`;
        }
        console.log("node3 "+ node3Top);
        let x3 = ((clientH-node3Top)*1)/574;
        if (node3Top <= clientH && x3 !== 1) {
            node3.style.opacity = `${x3}`;
            node3.style.transform = `translateX(-${(1-x3)*100}%)`;
        }
        console.log(clientH);
    })
})
</script>
 <style lang="scss" scoped>
 @import './dashbord.scss';
 </style>   
