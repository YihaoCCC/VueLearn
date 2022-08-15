<template>
        <div class="container" ref="scrollBox">
            Servus,<br>Howdy folks!
            <div class="item-container" :style="`background-color:${item.text}`" v-for="item in boxList" :key="item.text">
                <div class="item"  v-for="i in 9" :key="i">
                    {{item.text}}
                </div>
            </div>
        </div>
</template>
    
<script >
    import { onMounted,ref } from 'vue'
    // import { neonify } from 'neontext'
    export default {
        setup() {
            const boxList = [
                {
                    text: 'red'
                },
                {
                    text: 'yellow'
                },
                {
                    text: 'green'
                },
                {
                    text: 'blue'
                }
            ]
            const scrollBox = ref(null)
            const handleScroll= (e) => {
                var scrollNum = scrollBox.value
                //deltaY属性在向下滚动时返回正值，向上滚动时返回负值，否则为0
                scrollNum.scrollLeft = scrollNum.scrollLeft + e.deltaY
                console.log(scrollNum.scrollLeft);
            }
           onMounted(() => {
             let box = document.querySelector('html')
                box.addEventListener('wheel', (event)=>{
                    event.preventDefault()
                    box.scrollLeft += event.deltaY
                })
           })
            return {
                boxList,
                handleScroll,
                scrollBox
            }
        }
    }
    
</script>
    
<style lang='scss' scoped>

.container {
    width: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
   
}

    .item-container {
        width: 960px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .item {
            margin: 5px 5px;
            width: 300px;
            height: 300vh;
            text-align: center;
            line-height: 300px;
        }
    }
    .red {
        background-color: red;
    }
    .yellow {
        background-color: yellow;
    }
    .green {
        background-color: green;
    }
    .blue {
        background-color: blue;
    }
</style>