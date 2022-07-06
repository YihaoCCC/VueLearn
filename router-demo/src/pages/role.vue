<template>
    <div class="card-content">
         <yh-card></yh-card>
        <yh-card imgurl='Card2'></yh-card>
        <yh-card imgurl='Card3'></yh-card>
    </div>
</template>
<script setup >
    import YhCard from '@/components/YhCard'
</script>

<style lang="scss" scoped>
    .card-content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
        background-blend-mode: multiply,multiply;

    }
</style>