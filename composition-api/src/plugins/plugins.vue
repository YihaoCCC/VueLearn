<template>
    <div>

    </div>
</template>
<script>
import { getCurrentInstance } from 'vue'
export default {
    setup() {
        const context = getCurrentInstance()
        
        console.log(context.appContext.config.globalProperties.$message2)
    }   
}
</script>
