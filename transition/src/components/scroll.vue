<template>
    <div>
       <h3>滚动页面延时加载动画</h3>
       <div class="box-default first">
           
        </div>
        <div class="box-default second">
            如果用节流来控制div的显示，会出现当用户一直在滚动时候，到了div该出现的时刻然后div并不出现，而且只会出现一次动画 
        </div>
        <div class="box-default third">
            <div>
                右侧浮出
            </div>
            <div id="test" style="background-color: #e5e5e5;width:600px;height:150px" class='animate__animated' >
                    
            </div>
        </div>
        <div class="big-box">

        </div>
    </div>
</template>

<script >
    import { onMounted } from 'vue';
    export default {
        setup() {
            const computedheight = () => {
                console.log('节流11');
                const testBox = document.getElementById('test')
                const elementTop = testBox.getBoundingClientRect().top
                if(elementTop < 620) {
                    testBox.style.opacity = 1
                    testBox.classList.add('animate__backInRight')
                    console.log('进入动画')
                    console.log(elementTop)
                }
                //  if( elementTop <= (window.innerHeight || document.documentElement.clientHeight)) {
                //      console.log('进入动画')
                //  }  
            }
            onMounted(() => {
                const testBox = document.getElementById('test')
                testBox.style.opacity = 0
                document.addEventListener('scroll',
                   jieliu2(computedheight, 1000)
                
                )
            })
            const jieliu2 = (func,delay) => {
                let vaild = true
                return function() {
                    if(!vaild) return
                    vaild = false
                    setTimeout(() => {
                        console.log('节流2');
                        func()
                        vaild = true
                    },delay)
                }
            } 
            // let flag = false
            // const jieliu = (fun = computedheight,delay) => {
            //     if( flag ) return
            //     flag = true 
            //     setTimeout(() => {
            //         fun()
            //         flag = false
            //     }, delay);
            //  } 
            return {
                
            }
        },
    }
</script>

<style  scoped>
    .box-default {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 360px;
    }
    .big-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 660px;
        background-color: darkgray;
    }
    .first {
        background-color: bisque;
    }
    .second {
        background-color: burlywood
    }
    .third {
        background-color: azure;
    }

</style>