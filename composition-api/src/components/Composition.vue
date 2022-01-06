<template>
    <div>
        <h2>利用reactive实现数据响应式</h2>
        {{state.counter}}
        <button @click="increment"> +1</button>
    </div>
</template>
<script>
import { reactive } from 'vue'
export default {
    setup() {
        const state = reactive({
            counter: 0
        })
        const increment = () => {
            state.counter ++
        }    
        return {
            state,
            increment
        }
    },
}
</script>
