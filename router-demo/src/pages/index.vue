<template>
    <div class="totalBox">
        <!-- <change-data ></change-data>
        <button @click='getref'>12323456</button> -->
        <div class="OverView">
            <div class="header">
                <div class="title">
                    <span>
                        OverView
                    </span>
                    <span>
                        >
                    </span>
                </div>
                <div class="header-right">
                    <button class="today">
                        today
                    </button >
                    <button class='mounth'>
                        mouth
                    </button >
                    <button class='year'>
                        year
                    </button>
                    <button class="sign">
                        今日签到
                    </button>
                </div>
            </div>
            <div class="overview-content">
                <div class="item-box ">
                    <div class="className">
                        研发部门
                    </div>
                    <div class="name">
                        <span>
                            陈奕豪
                        </span>
                    </div>
                    <div class="login-time">
                        2022年2月22日
                    </div>
                </div>
                <div class="item-box">
                    <div class="time">
                        1886
                    </div>
                </div>
                <div class="item-box">
                    <div class="sign-time">
                        6
                    </div>
                    <div class="rate">
                        66%
                    </div>
                </div>  
            </div>

        </div>
        <div class="statistics">
            <div class="second-header">
                <span>
                    statistics
                </span>
            </div>
        </div>
    </div>
   
  
</template>

<script >
// import ChangeData from '@/components/ChangeData'
// import { ref, onMounted } from 'vue'
export default {
    // components: {
    //     ChangeData
    // }
}

</script>


<style lang='scss' scoped>
    .totalBox {
        width: 100%;
        .OverView {
            width: 100%;
            margin-bottom: 40px;
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .title {
                    width: 200px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    span {
                        font-size: 24px;
                        color: #333;
                        &:last-child {
                            color: #666;
                            font-size: 16px;
                        }
                    }
                }
                .header-right {
                    width: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    button {
                        color: #fff;
                        width: 93px;
                        height: 30px;
                        border: none;
                        border-radius: 20px;
                        transition:  all 0.4s ease;
                        cursor: pointer;
                        &:hover{ 
                            transform: scale(1.02);
                        }
                    }
                    .today {
                        background-color: #1E87F0;
                        box-shadow: 0px 8px 30px 1px rgba(41, 122, 228, 0.2);
                    }
                    .mounth {
                        background-color: #FAA05A;
                       box-shadow: 0px 8px 30px 1px rgba(210, 159, 50, 0.2);
                    }
                    .year {
                        background-color: #32D296;
                        box-shadow: 0px 8px 30px 1px rgba(50, 210, 150, 0.20000000298023224);
                    }
                    .sign {
                        width: 100px;
                        height: 40px;
                        border-radius: 5px;
                        background: #f80c0c;
                        
                        opacity: 50%;
                        word-spacing: 50px;
                    }
                }
            }
            .overview-content {
                display: flex;
                align-items: center;
                justify-content: space-between;
                color: #fff;
                margin: 30px 0 0 0 ;
                .item-box {
                    position: relative;
                    width: 420px;
                    height: 236px;
                    box-sizing: border-box;
                    background-image: url("../assets/Card1.png")  ;
                    background-size: 100% ;
                    background-repeat: no-repeat;
                    border-radius: 10px;
                    box-shadow: 0px 8px 30px 1px rgba(30, 135, 240, 0.288);
                    &:nth-child(2) {
                        background-image: url("../assets/Card2.png");
                        box-shadow: 0px 8px 30px 1px rgba(210, 159, 50, 0.281);
                    }
                    &:last-child {
                        background-image: url('../assets/Card3.png');
                        box-shadow: 0px 8px 30px 1px rgba(50, 210, 151, 0.286);
                    }
                    .className {
                        position: absolute;
                        right: 30px;
                        top: 18px;
                        letter-spacing: 6px;
                    }
                    .name {
                        position: absolute;
                        right: 80px;
                        top: 130px;
                        letter-spacing: 6px;
                        font-size: 28px;
                        font-weight: bolder;
                        font-family: Georgia, 'Times New Roman', Times, serif;
                    }
                    .login-time {
                        position: absolute;
                        top: 186px;
                        left: 121px;
                        opacity: 0.6;
                    }
                    .time {
                        position: absolute;
                        font-size: 30px;
                        font-weight: bolder;
                        top: 166px;
                        left: 50px;
                    }
                    .sign-time {
                        position: absolute;
                        font-size: 104px;
                        font-weight: bolder;
                        top: 66px;
                        left: 50px;
                    }
                    .rate {
                        position: absolute;
                        font-size: 30px;
                        font-weight: bolder;
                        top: 168px;
                        right:30px;
                    }
                }
            }
        }
        .statistics {
            width: 100%;
            height: 10px;
            background-color: #32D296;
            .second-header {
                span {
                        font-size: 24px;
                        color: #333;
                        &:last-child {
                            color: #666;
                            font-size: 16px;
                        }
                    }
            }
        }
        
    }
</style>