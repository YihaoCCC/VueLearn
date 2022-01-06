<template>
    <div>
        <h3>watch监控数据变化</h3>
        {{cyh.friends.name}}
        <button @click="changeCyhName">对象中数据监控</button>
        {{name}}
        <button @click="changeName">普通数据监控</button>
    </div>
</template>
<script>
import {watch, ref, reactive} from 'vue'
export default {
    setup() {
        const cyh = reactive({
            name: 'cyh-name',
            age: 18,
            friends: {
                name: 'kobe'
            }
        })
        const name = ref('cyh')
        // 默认传入reactive对象时候是深度监听
        watch(() => cyh.friends.name, (value, oldValue) => {
            console.log(value)
            console.log(oldValue)
        },{
            deep: true,
            immediate: false
        })


        const changeCyhName = () => {
            cyh.friends.name = 'cyh-rich'
        } 
        const changeName = () => {
            name.value = 'cyh-rich'
        }
           
        
        
        return {
            cyh,
            name,
            changeName,
            changeCyhName
        }
    },
}
</script>
