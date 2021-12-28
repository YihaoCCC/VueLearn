<template>
  <div class="report-card">
      <!-- 报告单头部 -->
    <div class="card-title">
        <h1>传染病报告卡艾滋病性病附卡</h1>
        <br>
        <el-row >
            <el-col :span="24">
                <span>卡片编号：</span>

                    BK00001499

            </el-col>
            
        </el-row>
    </div>
    <!-- 报告卡片内容 -->
    <div class="card-content">
        <!-- 详情部分 -->
        <div class="detail-content content-box-item">
            <el-row :gutter="10">
                <el-col :span="8">
                    <span>患者姓名 * ：</span>
                    <div class="content-box">
                        <el-input placeholder="请输入患者姓名" v-model="form.name"></el-input>
                    </div>
                </el-col>
                <el-col :span="8">
                    <span>（患儿家长姓名：</span>
                    <div class="content-box">
                        <el-input placeholder="请输入患儿家长姓名" v-model="form.parentName"></el-input>
                    </div>
                    ）
                    
                </el-col>
                <el-col :span="8">
                        <span>名族：</span>
                    <div class="content-box">
                        <el-input placeholder="请输入民族" v-model="form.parentName"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                   <span>婚姻状况：</span>
                    <el-radio v-model="form.sex" :label="1">未婚</el-radio>
                    <el-radio v-model="form.sex" :label="2">已婚有配偶</el-radio>
                    <el-radio v-model="form.sex" :label="3">离异或丧偶</el-radio>
                    <el-radio v-model="form.sex" :label="4">不详</el-radio>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>文化程度 ：</span>
                    <el-radio v-model="form.sex" :label="1">文盲</el-radio>
                    <el-radio v-model="form.sex" :label="2">小学</el-radio>
                    <el-radio v-model="form.sex" :label="3">初中</el-radio>
                    <el-radio v-model="form.sex" :label="4">高中或中专</el-radio>
                    <el-radio v-model="radio" :label="5">大专或以上</el-radio>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>户籍地址（详填）* ：</span>
                    <div class="address-box">
                         <el-input placeholder="请输入省份" v-model="form.province"></el-input>
                    </div>
                    省
                    <div class="address-box">
                        <el-input placeholder="请输入市名" v-model="form.city"></el-input>
                    </div>
                    市
                    <div class="address-box">
                        <el-input placeholder="请输入县名" v-model="form.district"></el-input>
                    </div>
                    县
                    <div class="address-box">
                        <el-input placeholder="请输入街道名" v-model="form.town"></el-input>
                    </div>
                    乡（镇、街道）
                    <div style="display: inline-block;width: 30%;border-bottom: 1px solid #333;padding-left: 5px;margin: 0 5px;">
                        <el-input placeholder="请输入详细地址" v-model="form.detail"></el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 疾病名称部分 -->
        <div class="HIVdetail content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>疾病名称 :</span>
                    <br>
                    <br>    
                </el-col>
                <el-col :span="12">
                    <span>艾滋病病毒感染</span>
                </el-col>
                <el-col :span="12">
                    <span>艾滋病</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>梅毒</span>
                    （
                    <el-radio v-model="form.sex" :label="1">I期</el-radio>
                    <el-radio v-model="form.sex" :label="2">II期</el-radio>
                    <el-radio v-model="form.sex" :label="3">III期</el-radio>
                    <el-radio v-model="form.sex" :label="4">胎传</el-radio>
                    ）
                </el-col>
                <el-col :span="12">
                    <span>淋病</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>生殖道沙眼衣原体感染</span>
                    （
                    <el-radio v-model="form.sex" :label="1">确诊病例</el-radio>
                    <el-radio v-model="form.sex" :label="2">无症状感染</el-radio>
                    ）
                </el-col>
                <el-col :span="6">
                    <span>尖锐湿诊</span>
                </el-col>
                <el-col :span="6">
                    <span>生殖器疱疹</span>
                </el-col>
            </el-row>
        </div>
        <!-- 接触史 -->
        <div class="contact content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>乙类传染病 * :</span>
                    <br>
                    <el-radio-group v-model="form.Bdisease" >
                        <el-radio :label="1">传染性非典型肺炎</el-radio>
                        <el-radio :label="2">艾滋病（艾滋病病人 、HIV）</el-radio>
                        <el-radio :label="3">病毒性肝炎（甲型、乙型、丙型、丁肝、戊型、未分型）</el-radio>
                        <el-radio :label="4">脊髓灰质炎</el-radio>
                        <el-radio :label="5">人感染高致病性禽流感</el-radio>
                        <el-radio :label="6">麻疹</el-radio>
                        <el-radio :label="7">流行性出血热</el-radio>
                        <el-radio :label="8">狂犬病</el-radio>
                        <el-radio :label="9">流行性乙型脑炎</el-radio>
                        <el-radio :label="10">登革热</el-radio>
                        <el-radio :label="11">  炭疽 (肺炭疽、皮肤炭疽、未分型)  </el-radio>
                        <el-radio :label="12">  痢疾(细菌性、阿米巴性)</el-radio>
                        <el-radio :label="13">   肺结核(利福平耐药、病原学阳性、病原学阴性、无病原学结果)</el-radio>
                        <el-radio :label="14">伤寒(伤寒、副伤寒)</el-radio>
                        <el-radio :label="15">流行性脑脊髓膜炎  </el-radio>
                        <el-radio :label="16">百日咳</el-radio>
                        <el-radio :label="17">白喉</el-radio>
                        <el-radio :label="18">新生儿破伤风</el-radio>
                        <el-radio :label="19">猩红热</el-radio>
                        <el-radio :label="20">布鲁氏菌病</el-radio>
                        <el-radio :label="21">淋病</el-radio>
                        <el-radio :label="22">梅毒(Ⅰ期、Ⅱ期、Ⅲ期、胎传、隐性)</el-radio>
                        <el-radio :label="23">钩端螺旋体病</el-radio>
                        <el-radio :label="24">血吸虫病</el-radio>
                        <el-radio :label="25">疟疾(恶性疟、未分型)</el-radio>
                        <el-radio :label="26">人感染H7N9禽流感</el-radio>
                        <el-radio :label="27" class="bloder">新型冠状病毒肺炎</el-radio>
                    </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <!-- 丙类传染病 -->
        <div class="C-disease content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>丙类传染病 * ：</span>
                        <el-radio-group v-model="form.Cdisease" >
                            <el-radio :label="1">流行性感冒、</el-radio>
                            <el-radio :label="2">流行性腮腺炎、</el-radio>
                            <el-radio :label="3">风疹、</el-radio>
                            <el-radio :label="4">急性出血性结膜炎、</el-radio>
                            <el-radio :label="5">麻风病、</el-radio>
                            <el-radio :label="6">流行性和地方性斑疹伤寒、</el-radio>
                            <el-radio :label="7">黑热病、</el-radio>
                            <el-radio :label="8">包虫病、</el-radio>
                            <el-radio :label="9">丝虫病、</el-radio>
                            <el-radio :label="10">除霍乱、细菌性和阿米巴性痢疾、伤寒和副伤寒以外的感染性腹泻病、</el-radio>
                            <el-radio :label="11">  手足口病 </el-radio>
                        </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <!-- 其他法定管理以及重点监测传染病： -->
        <div class="other-disease content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span> 其他法定管理以及重点监测传染病：</span>
                    <el-radio-group v-model="form.otherDisease" >
                            <el-radio :label="1">生殖器疱疹、</el-radio>
                            <el-radio :label="2">生殖道沙眼衣原体感染、</el-radio>
                            <el-radio :label="3">尖锐湿疣、</el-radio>
                            <el-radio :label="4">肝吸虫病</el-radio>
                            <el-radio :label="5">恙虫病</el-radio>
                            <el-radio :label="6">森林脑炎</el-radio>
                            <el-radio :label="7">人感染猪链球菌</el-radio>
                            <el-radio :label="8">人粒细胞无形体病</el-radio>
                            <el-radio :label="9">不明原因肺炎</el-radio>
                            <el-radio :label="10">发热伴血小板减少综合征</el-radio>
                            <el-radio :label="11">  AFP </el-radio>
                            <el-radio :label="12">  中东呼吸综合征（MERS） </el-radio>
                            <el-radio :label="13">  埃博拉出血热 </el-radio>
                            <el-radio :label="14">  寨卡病毒病 </el-radio>
                            <el-radio :label="15">  水痘、 </el-radio>
                            <el-radio :label="16">  不明原因、 </el-radio>
                            <el-radio :label="17">  其他 </el-radio>
                            <div style="display:inline-block;border-bottom: 1px solid #333">
                                <el-input placeholder="其他名称" v-model="form.detail"></el-input>
                            </div>
                        </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <div class="CardDetail content-box-item">
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>订正病名:</span>
                    <div class="content-box">
                        <el-input placeholder="请输入订正病名" v-model="form.changeDiseaseName"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <span>退卡原因:</span>
                    <div class="content-box">
                        <el-input placeholder="请输入退卡原因" v-model="form.backCardReason"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>报告单位:</span>
                    <div class="content-box">
                        <el-input placeholder="请输入报告单位名称" v-model="form.reportUnit"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <span>联系电话:</span>
                    <div class="content-box">
                        <el-input placeholder="请输入联系电话" v-model="form.doctorPhone"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>填卡医生 * :</span>
                    <div class="content-box">
                        <el-input placeholder="请输入填卡医生姓名" v-model="form.doctor"></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <span>填卡日期 * :</span>
                    <div class="content-box">
                        <el-date-picker
                            v-model="form.CompleteCardTime"
                            type="datetime"
                            placeholder="选择填卡日期"
                            format="yyyy 年 MM 月 dd 日 HH:mm:ss"
                            value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>备注:</span>
                    <div class="content-box">
                        <el-input v-model="form.remark" placeholder=""></el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <el-button style="margin-top:15px" type="primary" @click="submit">提交信息</el-button>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        this.$message.info('检测到艾滋病病例，即将填写副卡！')
    },
    data() {
        return {
            form: {
                name: '',         // 患者姓名  1 代表必填
                parentName: '',   // 患儿家长姓名
                sex: 'man',       // 性别   1
                born: '',         // 出生日期 1
                realAge: '',      // 实足年龄 
                ageUnit: '',      // 年龄单位
                address: '',      // 工作地址  
                region: 3,        // 病人属于 1
                province: '',     // 省 1
                city: '',         // 市 1
                district: '',     // 县 1
                town: '',         // 乡镇 1 
                detail: '',       // 详细地址 1
                personType: 1,    // 人群分类 1
                disaseType: 2,    // 病例分类 1
                attackTime: '',   // 发病日期 1
                diagnose: '',     // 诊断日期 1
                diedTime: '',     // 死亡日期
                Adisease: 1,      // 甲类传染病 1
                Bdisease: 27,     // 乙类传染病 1
                Cdisease: 3,      // 丙类传染病 1
                otherDisease: 4,  // 其他传染病
                changeDiseaseName: ''  , // 订正病名
                backCardReason: '',      // 退卡原因
                reportUnit: '',          // 报告单位
                doctorPhone: '',         // 联系电话
                doctor: '',              // 填卡医生 1
                CompleteCardTime: '',    // 填卡日期 1
                remark: '',              // 填卡备注
            }
        }
    },
    computed: {
        idCardNumber() {
            let idCard=''
            let inputels = document.getElementsByName('idCard')
            for (let i = 0; i< inputels.length; i++) {
                idCard += inputels[i].value
            }
            return idCard
        }
    },
    methods: {
        submit() {
            
            let { name, sex, born, region, province, city, district, town, personType, disaseType, attackTime, diagnose, Adisease, Bdisease, Cdisease, doctor, CompleteCardTime } = this.form
            if(this.idCardNumber) {
                if( name && sex && born && region && province && city && district && town && personType && disaseType&& attackTime && diagnose && Adisease && Bdisease && Cdisease && doctor && CompleteCardTime  ) {
                    this.$message.success('提交报告成功!')
                    console.log('身份证号：'+this.idCardNumber)
                    console.log('其他内容：')
                    console.log(this.form)
                    if(Bdisease === 2) {
                        
                        this.$parent.compomentName = 'HIVReport'
                    }
                } else {
                    this.$message.error('请检查必填项是否填写完成')
                }
            } else {
                this.$message.error('身份证号码不可为空！')
            }
            
        },
        nextFocus(index) {
            const curInput = this.$refs[`input${index}`];
            const nextInput = this.$refs[`input${index + 1}`];
            if (!curInput) return;
            if (curInput.value.length === curInput.maxLength) {
            if (nextInput && !nextInput.value) {
                nextInput.focus();
            }
        }
        }
    }
    
}
</script>

<style scoped>
.report-card {
    width: 80%;
    margin: auto;
    padding: 10px 20px;
    box-sizing: border-box;
    border: 1px solid #333;
}
.card-title {
    border-bottom: 2px solid #666;
    padding-bottom: 5px ;
}
.card-content {
    padding-top: 10px;
    box-sizing: border-box;
}
.detail-content {
    border-bottom: 2px solid #666;
    padding-bottom: 20px;
}
.content-box-item {
    border-bottom: 2px solid #666;
    padding-bottom: 20px;
}
.bloder {
    font-weight: bolder;
}
.id-card-box {
    display: inline-block;
    border: 1px solid #333;
    width: 4%;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.id-card-box input {
    border: none !important;
    width: 100%;
    padding-left: 6px;
    box-sizing: border-box;
    font-size: 16px;
    height: 38px;
}


.el-row {
    margin-top: 25px;
}
.el-col {
    text-align: left;
}
.el-col span {
    margin-left: 10px;
}
.el-radio {
    margin-top: 10px;
}
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 300px;
}
.address-box {
    display: inline-block;
    width: 8%;
    border-bottom: 1px solid #333;   
}
.content-box {
    display: inline-block;
    width: 60%;
    border-bottom: 1px solid #333;
}
div >>>.el-input__inner {
    width: 100%;
    border: none !important;
    height: 30px;
}
</style>