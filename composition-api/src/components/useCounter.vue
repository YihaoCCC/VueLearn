<template>
    计数：{{counter}}
    <br>
    2倍的计数：{{doubleCounter}}
    <br>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <input type="text" v-model="title">
    ScrollX:{{scrollX}}
    ScrollY:{{scrollY}}

    <div>
        鼠标移动
        <p>mouseX：{{mouseX}}</p>
        <p>mouseY：{{mouseY}}</p>
    </div>
    <div>
        localStorage:
        <br>
        {{data}}
    </div>
</template>
<script>
import {useCounter} from '../hooks/useCounter'
import {useTitle} from '../hooks/useTitle'
import useScrollPosition from '../hooks/useScrollPosition'
import useMouseMove from '../hooks/useMouseMove'
import useLocalStorage from '@/hooks/useLocalStorage'
export default {
    // 方法一:
    // computed: {
    //     doubleCounter() {
    //         return this.counter * 2
    //     }
    // },
    // data() {
    //     return {
    //         counter: 0
    //     }
    // },
    // methods: {
    //     increment() {
    //         this.counter ++
    //     },
    //     decrement() {
    //         this.counter --
    //     }
    // },
    // 方法二：
    // setup() {
    //     return {
    //         ...useCounter()
    //     }
    // },
    // 方法三：
    setup() {
        const {counter,doubleCounter,increment,decrement} = useCounter()
        const { title } = useTitle()
        const {scrollX, scrollY} = useScrollPosition()
        const { mouseX, mouseY} = useMouseMove()
        const {data} = useLocalStorage('info', {name:'cyh', age: 18})
        return {
            counter,
            doubleCounter,
            increment,
            decrement,
            title,
            scrollX,
            scrollY,
            mouseX,
            mouseY,
            data
        }
    }
}
</script>