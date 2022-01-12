<template>
    <!-- setup的顶层编写方式 子组件 -->
    <div>
        setup的顶层编写方式 子组件
        <br>
        {{message}}
        给父组件发射emit事件
        <input type="text" v-model.number="counter" placeholder="请输入数字">
        <br>
        <button @click="increment">input中数组加上给父组件的counter </button>
        <button @click="decrement">父组件的counter减去input中的值</button>
    </div>
</template>
<script setup>
import {defineProps, defineEmits, ref} from 'vue'
defineProps({
    message: {
        type: String,
        default: '这是默认的message值'
    }
})
const counter = ref()
const emits = defineEmits(['increment', 'decrement'])
const increment = () => {
    emits('increment', counter.value)
}
const decrement = () => {
    emits('decrement', counter.value)
}
</script>
