<template>
    <div>
        {{message}}
        <button @click="testMixin">mixin中的方法</button>
    </div>
</template>
<script>
import {mixinDemo} from '../mixinjs/mixin.js'
export default {
    mixins: [mixinDemo],
    data() {
        return {
            message: ' data中重名优先使用组件内的值'
        }
    }
}
</script>
