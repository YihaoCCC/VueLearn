<template>
    <div>
        <h2>利用ref进行数据响应式</h2>
        {{counter}}
        <button @click="increment">+1</button>

        {{testCouner1.counter}}
        {{testCouner2.counter}}
    </div>
</template>
<script>
import { ref, reactive } from 'vue'
export default {
    setup() {
        const counter = ref(100)
        const increment = () => {
            counter.value ++
        }
        const testCouner1 = {
            counter
        }
        const testCouner2 = reactive({
            counter
        })
        return {
            counter,
            testCouner1,
            testCouner2,
            increment
        }
    },
}
</script>