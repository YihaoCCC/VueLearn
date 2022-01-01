<template>
    <div>
        <button @click="add">addTItem</button>
        <button @click="del">delItem</button>
        <button @click="flsk">重新排列</button>
        <transition-group tag="p" name='test' >
            <span v-for="item in list" :key="item" class="item">
                {{item}}
            </span>
        </transition-group>
        
    </div>
</template>
<script>
 export default {
     data() {   
         return {
            list: [1,2,3,4,5,6,7,8,9,10,11],
            counter: 11
         }
     },
     methods: {
         add() {
             this.list.splice(parseInt(Math.random()*this.list.length), 0 , ++this.counter)
             console.log()
         },
         del() {
             this.list.splice(parseInt(Math.random()*this.list.length), 1 )
         },
         flsk() {
             this.list.sort(()=> {
                  return (0.5-Math.random());
             })
         }
     }
 }
</script>
<style scoped>
.item {
    margin: 0 10px;
    font-size: 20px;
    display: inline-block;
}
.test-enter-active,
.test-leave-active {
    
    transition: all .6s ease    ;
}
.test-leave-active {
    position: absolute;
}

.test-enter-from,
.test-leave-to {
    opacity: 0;
    transform: translateY(60px);
}


.test-move {
    transition: transform 1s ease;
}
</style>
