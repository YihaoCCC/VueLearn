<template>
    <!-- setup的顶层编写方式 -->
    <div>
        setup的顶层编写方式 父组件
        <br>
        <h2>父组件counter：{{counter}}</h2>
        <button @click="increment">+1</button>
        <br>
        <setup-children message='这是父组件传递的message值' @increment='addNum' @decrement='delNum'></setup-children>
    </div>
</template>
<script setup>
import { ref } from "vue";

import setupChildren from '@/components/setupChildren'

const counter = ref(0)
const increment = () => counter.value++

const addNum = (payload) => {
    counter.value = counter.value + payload
}
const delNum = (payload) => {
   counter.value = counter.value - payload
}
</script>