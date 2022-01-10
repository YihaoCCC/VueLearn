<template>
    <div>
        <inject></inject>
        {{"我是提供者中的age："+age}}
        <button @click="changeAge">提供者修改age</button>
    </div>
</template>
<script>
import {ref, provide, readonly} from 'vue'
import Inject from './Inject.vue'
export default {
  components: { Inject },
    setup() {
        const name = 'cyh'
        const age = ref(18)
        provide('name',  readonly(name))
        provide('age', readonly(age))
        const changeAge = () => {
            age.value ++
        }
        return {
            name,
            age,
            changeAge
        }
    },
}
</script>