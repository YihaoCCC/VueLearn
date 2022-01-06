<template>
    <div>
        <h1>vue3中的computed和watch</h1>
       <h1> {{fullName}}</h1>
        <button @click="change">改变lastName</button>
    </div>
</template>
<script>
import { ref, computed } from 'vue'
export default {
    setup() {
        const firstName = ref('cyh')
        const lastName = ref('rich')
        const fullName = computed(() => firstName.value+ '-' + lastName.value)
        const change = () => {
            lastName.value = 'richAndHandsome'
        }
        return {
            fullName,
            change
        }
    },
}
</script>