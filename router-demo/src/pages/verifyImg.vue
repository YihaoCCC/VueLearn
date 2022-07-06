<template>
        <div>
            {{title}}
            <slide-verify
                :l="42"
                :r="10"
                :w="310"
                :h="155"
                :imgs="pic"
                :show="true"
                slider-text="向右滑动完成验证"
                ref="slideverify"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
            ></slide-verify>

        </div>
</template>
    
<script >
    import { ref } from 'vue'
   import SlideVerify from 'vue-monoplasty-slide-verify';
    export default {
        components: {
            SlideVerify
        },
        setup() {
            const title = ref('verifyImgTest')
            const slideverify = ref()
            const pic = '../assets/Card1.png'
            const onSuccess = () => {
                alert('success')
            }
            const onFail = () => {
                alert('fail')
            }
            const onRefresh= () => {

            }
            return {
                title,
                slideverify,
                pic,
                onSuccess,
                onFail,
                onRefresh
            }
        }
    }
    
</script>
    
<style>
    
</style>