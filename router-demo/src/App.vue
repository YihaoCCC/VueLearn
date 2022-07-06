<template>
  <router-view></router-view>
  <div id="teleport-target">
  </div>
</template>

<script>

export default {
  name: 'App',
 
}
</script>

<style lang='scss'>
#teleport-target {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
html,body {
  margin: 0;
}
.el-table .cell {
        padding: 0 !important;
}
.dv-scroll-ranking-board .ranking-column .inside-column  {
    background-image: linear-gradient(to bottom right, #7A88FF, #7AFFAF) !important;
   
}
.row-item {
  .ranking-info {
        .rank {
          color: #999 !important;
        }
    }
  &:first-child {
    .ranking-info {
        .rank {
          color: #Faa05a !important;
        }
    }
  }
  &:nth-child(2) {
    .ranking-info {
        .rank {
          color: #a2fa5a !important;
        }
    }
  }
  
}
.dv-scroll-ranking-board { 
  color: #666 !important;
}
</style>
