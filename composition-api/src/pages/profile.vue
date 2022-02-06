<template>
  profile
</template>

<script>
import { useRouter, useRoute } from 'vue-router'
export default {
    created() {
        console.log(this.$route.params.usename)
    },
    setup() {
        const router = useRouter()
        const route = useRoute()
        console.log(router)
        console.log(route.params.usename)
    }
}
</script>

<style>

</style>