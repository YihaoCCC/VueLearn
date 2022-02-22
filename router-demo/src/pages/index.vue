<template>
    <div class="totalBox">
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
                    Statistics
                </span>
                <span>
                    >
                </span>
            </div>
            <div class="second-content">
                <div class="leftgragh">
                   <div class="myCard">
                       <div id="container" style="min-width:400px;height:400px;"></div>
                   </div>
                </div>
                <div class="center">
                    <div class=" myCard top haspadding">
                        <dv-scroll-ranking-board :config="config3" style="width:500px;height:180px" />
                    </div>
                    <div class="bottom">
                        <div class="myCard">

                            <dv-active-ring-chart :config="config" style="width:300px;height:300px" />
                            
                        </div>
                        <div class="myCard haspadding">
                            <dv-water-level-pond :config="config2" style="width:150px;height:200px" />
                        </div>
                    </div>
                    
                </div>
                <div class="rightCard">
                <el-card shadow="hover" >
                    <template #header>
                        <div class="clearfix">
                            <span>待办事项</span>
                            <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
                        </div>
                    </template>

                    <el-table :show-header="false" :data="todoList" style="width:100%;">
                        <el-table-column width="40">
                            <template #default="scope">
                                <el-checkbox v-model="scope.row.status"></el-checkbox>
                            </template>
                        </el-table-column>
                        <el-table-column>
                            <template #default="scope">
                                <div
                                    class="todo-item"
                                    :class="{
                                        'todo-item-del': scope.row.status,
                                    }"
                                >{{ scope.row.title }}</div>
                            </template>
                        </el-table-column>
                        <el-table-column width="60">
                            <template #default="scope">
                                <el-icon :size='20' class="icon " color="#409EFF" :class="{
                                        'todo-item-del': scope.row.status,
                                    }"><edit /></el-icon>
                                <el-icon :size="20" class ='icon' color="#F56C6C" :class="{
                                        'todo-item-del': scope.row.status,
                                    }"><delete/></el-icon>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-card>
            </div>
            </div>
            
        </div>
    </div>
   
  
</template>

<script >
import {Edit,Delete} from '@element-plus/icons-vue'
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsDrilldown from 'highcharts/modules/drilldown';
import Highcharts3D from 'highcharts/highcharts-3d';
import Highmaps from 'highcharts/modules/map';

HighchartsMore(Highcharts)
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
Highmaps(Highcharts);

export default {
    components: {
        Edit,
        Delete
    },
    mounted() {
        Highcharts.chart('container', {
            credits: {
                enabled: true,                    // 默认值，如果想去掉版权信息，设置为false即可
                text: '小奕办公系统',             // 显示的文字
                href: 'http://www.hcharts.cn',      // 链接地址
                position: {                         // 位置设置 
                    align: 'left',
                    x: 300,
                    verticalAlign: 'bottom',
                    y: -20
                },
                style: {                            // 样式设置
                    cursor: 'pointer',
                    color: '#666',
                    fontSize: '12px'
                }
            },
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: '2018 年浏览器市场份额'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                }, {
                    name: 'Internet Explorer',
                    y: 11.84
                }, {
                    name: 'Firefox',
                    y: 10.85
                }, {
                    name: 'Edge',
                    y: 4.67
                }, {
                    name: 'Safari',
                    y: 4.18
                }, {
                    name: 'Other',
                    y: 7.05
                }]
            }]
        });
    },
    setup() { 
        const config ={
            data: [
                {
                name: '周口',
                value: 55
                },
                {
                name: '南阳',
                value: 120
                },
                {
                name: '西峡',
                value: 78
                },
                {
                name: '驻马店',
                value: 66
                },
                {
                name: '新乡',
                value: 80
                }
            ],
             digitalFlopStyle: {
                color: '#e5e5e5',
                fontSize: 20
            },
        }
        const config2 = {
                data: [66]
            }
        const config3 = {
                data: [
                    {
                    name: '周口',
                    value: 55
                    },
                    {
                    name: '南阳',
                    value: 120
                    },
                    {
                    name: '驻马店',
                    value: 66
                    },
                    {
                    name: '新乡',
                    value: 80
                    },
                    {
                    name: '信阳',
                    value: 45
                    },
                    {
                    name: '漯河',
                    value: 29
                    }
                ]
            }
        const todoList= [
                {
                    title: "今天要修复100个bug",
                    status: false
                },
                {
                    title: "小奕办公管理系统",
                    status: false
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: false
                },
                {
                    title: "今天要写100行代码加几个bug吧今天要写100行代码加几个bug吧今天要写100行代码加几个bug吧今天要写100行代码加几个bug吧今天要写100行代码加几个bug吧",
                    status: false
                },
                {
                    title: "今天要修复100个bug",
                    status: true
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: false
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true
                },
                {
                    title: "今天要写100行代码加几个bug吧",
                    status: true
                },
                {
                    title: '这是我的毕业设计',
                    status: false
                }
            ]
            return {
                todoList,
                config,
                config2,
                config3
            }
    }
}

</script>


<style lang='scss' scoped>
.dv-scroll-ranking-board .ranking-column .inside-column  {
    background-color: #32D296 !important;
}
    .myCard {
        background-color: #fff;
        border-radius: 20px;
        cursor: pointer;
        transition: all .3s;
        color: #666 !important;
        &:hover {
            box-shadow: 0px 0px 20px 1px rgba(93, 150, 236, 0.286);
    }
}
    .haspadding {
        padding: 20px 20px;
        box-sizing: border-box;
        margin-left: 20px;
    }
    .totalBox {
        width: 100%;
        .OverView {
            width: 100%;
            margin-bottom: 20px;
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
            .second-content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                .leftgragh {
                    width: 400px;
                }
                .center{
                        display: flex;
                        flex-direction: column;
                        .top {
                            
                            height: 220px;
                            
                            margin-bottom: 20px;
                        }
                        .bottom {
                            display: flex;
                            justify-content: space-around;
                            align-items: center;
                            
                        }
                }
                .rightCard {
                    height: 540px;
                    width: 420px;
                    overflow: visible;
                    overflow-x: hidden;
                    
                    .icon {
                        cursor: pointer;
                        transition:  all 0.5s ease;
                        margin: 0 2px;
                        &:hover {
                            transform: scale(1.2);
                        }
                    }
                    .todo-item {
                        font-size: 14px;
                    }

                    .todo-item-del {
                        text-decoration: line-through;
                        color: #999;
                        .icon {
                            color: #666;
                            cursor: default;
                            &:hover {
                                transform: none !important;

                            }
                        }
                    }
                }
            }
        }
        
    }
</style>