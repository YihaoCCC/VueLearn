<template>
    <div class="container">
        <div class="item" v-for="(item,index) in 5" :key="index"  @click="test(item,index)">
            <div class="imgBox">
                <img src="https://img11.360buyimg.com/jdcms/s300x300_jfs/t1/210793/37/16331/244774/61ecfe2aE7241ee35/15fe246bc413c56e.jpg.webp" alt="">
            </div>
            <div class="title">
                <div class="logo"><span>【天天吃货】</span></div>
                <p>
                    网红培训蛋糕好吃的蛋糕
                </p>
                <div class="detail">
                    <p>
                        <svg  style="margin-right:8px " t="1643295541592" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2093" width="16" height="16">
                        <path d="M515.2 224c-307.2 0-492.8 313.6-492.8 313.6s214.4 304 492.8 304 492.8-304 492.8-304S822.4 224 515.2 224zM832 652.8c-102.4 86.4-211.2 140.8-320 140.8s-217.6-51.2-320-140.8c-35.2-32-70.4-64-99.2-99.2-6.4-6.4-9.6-12.8-16-19.2 3.2-6.4 9.6-12.8 12.8-19.2 25.6-35.2 57.6-70.4 92.8-102.4 99.2-89.6 208-144 329.6-144s230.4 54.4 329.6 144c35.2 32 64 67.2 92.8 102.4 3.2 6.4 9.6 12.8 12.8 19.2-3.2 6.4-9.6 12.8-16 19.2C902.4 585.6 870.4 620.8 832 652.8z" p-id="2094" fill="#fff"></path>
                        <path d="M512 345.6c-96 0-169.6 76.8-169.6 169.6 0 96 76.8 169.6 169.6 169.6 96 0 169.6-76.8 169.6-169.6C681.6 422.4 604.8 345.6 512 345.6zM512 640c-67.2 0-121.6-54.4-121.6-121.6 0-67.2 54.4-121.6 121.6-121.6 67.2 0 121.6 54.4 121.6 121.6C633.6 582.4 579.2 640 512 640z" p-id="2095" fill="#fff"></path></svg>
                        查看详情
                    </p>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>

export default {
    methods: {
        test(item,index) {
            console.log(item)
            console.log(index)
        }
    }
}
</script>

<style scoped>
.container {
    width: 1200px;
    min-height: 300px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
}
.container .item {
    width: 230px;
    padding: 10px 25px;
    background-color: #fff;
    min-height: 300px;
    box-sizing: border-box;
    border-radius: 10px;
    transition: all .3s ease;
    cursor: pointer;
}
.container .item:hover { 
    transform: scale(1.03);
}
.item .imgBox  img{
    width: 160px;
    margin: auto;
    transition: all 0.5s ease;
}
.item .imgBox  img:hover {
    transform: scale(1.09) ;
}
.container .item .title {
    font-size: 15px;
    color: #666;
    margin: 16px auto;
    word-break: break-all;
    position: relative;
}
.container .item .title p {
    margin: 10px 0;
}
.container .item .title .logo {
    margin: auto;
    width: 100px;
    padding: 4px 0;
    box-sizing: border-box;
    border-radius: 50px;
    background-color: #Ed1458;
    color: #FFF;
}
.container .item .title .detail {
    position: absolute;
    opacity: 0;
    transition: all .5s;
    min-height: 90px;
    width: 180px;
    background: linear-gradient(180deg,rgba(255, 255, 255, 0.041) 0,white 66%,white);
    top: -10px;
    box-sizing: border-box;
}
.container .item .title .detail p{
    margin: 70px auto 0 auto;
    background-color: #222;
    padding: 6px 10px;
    width: 90px;
    border-radius: 20px;
    color: #fff;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
}
.container .item .title .detail:hover {
    opacity: 1;
}
.container .item .title .detail p:hover {
    background-color: #Ed1458;
}
</style>
