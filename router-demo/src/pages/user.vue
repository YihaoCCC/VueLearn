<template>
    <div class="userList">
        <div class="listContent">
            <h3>System User List Rank</h3>
            <div class="userItem">
                <div class="imgBox">
                    <img src="https://joeschmoe.io/api/v1/jai" alt="">
                </div>
                <div class="content">
                    <h2 class="rank">
                        <small>#</small>1
                    </h2>
                    <h4>Programmer Desginer</h4>
                    <p>just a Programmer Programmer Programmer</p>
                </div>
            </div>
             <div class="userItem">
                <div class="imgBox">
                    <img src="https://joeschmoe.io/api/v1/josh" alt="">
                </div>
                <div class="content">
                    <h2 class="rank">
                        <small>#</small>2
                    </h2>
                    <h4>Programmer Desginer</h4>
                    <p>just a Programmer Programmer Programmer</p>
                </div>
            </div>
             <div class="userItem">
                <div class="imgBox">
                    <img src="https://joeschmoe.io/api/v1/jean" alt="">
                </div>
                <div class="content">
                    <h2 class="rank">
                        <small>#</small>3
                    </h2>
                    <h4>Programmer Desginer</h4>
                    <p>just a Programmer Programmer Programmer</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    h1,h2,h3,h4 {
        margin: 0;
    }
    .userList {
        position: relative;
        height: 91vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #161623;
        &::before {
            content: '';
            width: 350px;
            height: 350px;
            border-radius: 50%;
            position: absolute;
            background: linear-gradient(#ffc107, #e91e63);
            transform: translate(-60%,-50%);
        }
        &::after {
            content: '';
            width: 350px;
            height: 350px;
            border-radius: 50%;
            position: absolute;
            background: linear-gradient(#2196f3, #31ff38);
            transform: translate(300px,200px);
        }
        .listContent {
            position: relative;
            min-height: 400px;
            min-width: 350px;
            padding: 20px 10px;
            background: rgba(255,255,255, 0.1);
            box-shadow: 0 25px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255,255,255, 0.5);
            border-radius: 10px;
            color: #fff;
            z-index: 10;    
            backdrop-filter: blur(25px);
            h3 {
                text-align: center;
                margin-bottom: 30px;
            }
            .userItem {
                position: relative;
                display: flex;
                align-items: center;
                padding: 10px 10px;
                box-sizing: border-box;
                background: rgba(0, 0, 0, 0.1);
                border-radius: 10px;
                margin: 10px 0;
                cursor: pointer;
                transition: all .5s;
                overflow: hidden;

                &:hover {
                    background: #fff;
                    box-shadow: -15px  30px 50px rgba(0,0,0,0.5);
                    transform: scale(1.15) translateX(30px) translateY(-15px);
                    color: #666;
                    .imgBox {
                        background: rgba(0, 0, 0, 0.1);
                    }
                    .content {
                        .rank {
                            right: 10px;
                        }
                    }
                }
                .imgBox {
                    width: 150px;
                    height: 100px;
                    margin-right: 10px;
                    border-radius: 50%;
                    backdrop-filter: blur(20px);
                    background: rgba(255,255,255, 0.5);
                    transition: all .5s;
                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }
                .content {
                    padding: 0 30px;
                    .rank {
                        font-size: 30px;
                        position: absolute;
                        right: -50px;
                        top: 40px;
                        color: #2196f3;
                        transition: all 0.3s;
                        transition-delay: .2s;
                        small {
                            color: #7bbdf3;
                            font-size: 20px;
                        }
                    }
                    p {
                        width: 260px;
                        color: rgb(172, 170, 170);
                    }
                }
            }
        }
    }
</style>