<template>
    <iframe class="frameTest" :src="src" > 

    </iframe>
</template>
<script setup >
    const frame = document.getElementsByClassName('frameTest')
    
    console.log(frame);
    const src = 'https://staging-cn.vuejs.org/'
</script>
<style  scoped>
    .frameTest {
        width: 100%;
        height: 100%;
    }
</style>