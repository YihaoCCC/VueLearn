<template>
    <div class="box">
      <div class="item" style="--mystyle:0"></div>
      <div class="item" style="--mystyle:1"></div>
      <div class="item" style="--mystyle:2"></div>
      <div class="item" style="--mystyle:3"></div>
      <div class="item" style="--mystyle:4"></div>
      <div class="item" style="--mystyle:5"></div>
    </div>
</template>

<style scoped lang='scss'>
.box {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
      .item {
        position: relative;
        width: 60px;
        height: 300px;
        border-radius: 50px;
        background: linear-gradient(to bottom, rgba(0,0,0,0.05),#eef1f5);
        margin: 0 20px;
        border: 2px solid #bebebe; 
        overflow: hidden;
        box-shadow: 20px 20px 60px #bebebe,
                    -20px -20px 60px #ffffff,
                    inset -5px -5px 5px rgba(255, 255, 255,0.5),
                    inset 5px 5px 5px rgba(0, 0, 0 ,0.5);
        &::before {
          position: absolute;
          content: ' ';
          width: 60px;
          height: 60px;
          left: 0;
          border-radius: 60%;
          bottom: 0;
          background-color: #91aaca;
          box-shadow: 0 126px 0px 100px #91aaca;
          animation: loadingFrame 2.5s ease-in-out infinite;
          animation-delay: calc(var(--mystyle)*0.3s);
        }
        @keyframes loadingFrame {
          0% {
            transform: translateY(0px);
            filter: hue-rotate(0deg);
          }
          50% {
            transform: translateY(-180px);
            filter: hue-rotate(180deg);
          }
          100% {
            transform: translateY(0px);
            filter: hue-rotate(360deg);
          }
        }
      }

    }
</style>