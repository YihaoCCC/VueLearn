<template>
    计数：{{counter}}
    <br>
    2倍的计数：{{doubleCounter}}
    <br>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
</template>
<script>
import {useCounter} from '../hooks/useCounter'
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
        return {
            counter,
            doubleCounter,
            increment,
            decrement
        }
    }
}
</script>