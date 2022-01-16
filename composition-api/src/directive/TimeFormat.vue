<template>
    <div>
        <h2 >当前时刻： <h4 v-time-format="nowTime">{{nowTime}}</h4></h2>
        <button @click="getTime">
            获取当前时刻
        </button>
    </div>
</template>
<script>
import { ref } from 'vue'
export default {
    setup() {
        let nowTime = ref(null)
        nowTime.value = new Date ().getTime ()
        const getTime = () => {
            nowTime.value = new Date ().getTime ()
            console.log(nowTime.value)
        }
        return {
            nowTime,
            getTime
        }
    },
}
</script>