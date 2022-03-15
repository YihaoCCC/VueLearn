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
                
                <button>2531321</button>
            </div>
            
        </div>
        
    </div>

</template>
<script>

export default {
    watch: {

    },
    data() {
        return {
            action: 0,
            form: {
                name: 'cyh',
                age: 18,
            }
        }
    },
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
