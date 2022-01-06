<template>
    <div>
        <h3>watchEffect监控数据变化</h3>
        {{name}}
        <button @click="changeName">改变名字</button>
        {{height}}
        <button @click="changeAge">终止监控</button>
    </div>
</template>
<script>
import {ref, watchEffect} from 'vue'
export default {
    setup() {
        const name = ref('cyh')
        const height = ref(1.88)
        const changeName = () => name.value = 'cyh - rich'
        const changeAge = () => {
           if(height.value > 3) {
               stop()
           }
           height.value ++
        }
        const stop =  watchEffect(() => {
            console.log('name:'+ name.value)
            console.log('height:' + height.value)
        })

        return {
            name,
            height,
            changeAge,
            changeName
        }
    }
}
</script>