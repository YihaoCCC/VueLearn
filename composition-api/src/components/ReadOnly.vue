<template>
    <div>
        <h2>readOnly</h2>
        {{counter}}
        <button @click="changeCounter">changeCounter</button>
    </div>
</template>
<script>
import { ref, readonly} from 'vue'
export default {
    setup() {
        const counter = ref(100)
        const counterReadOnly = readonly(counter)
        // 可以通过counter.value进行修改数据，但是通过counterReadOnly修改数据的时候会发生报错
        const changeCounter = () => {
            counter.value = 200
        }
        return {
            counter,
            counterReadOnly,
            changeCounter
        } 
    },
}
</script>