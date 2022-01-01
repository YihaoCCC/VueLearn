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
                        <el-input placeholder="请输入民族" v-model="form.nation"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                   <span>婚姻状况：</span>
                    <el-radio v-model="form.marriage" :label="1">未婚</el-radio>
                    <el-radio v-model="form.marriage" :label="2">已婚有配偶</el-radio>
                    <el-radio v-model="form.marriage" :label="3">离异或丧偶</el-radio>
                    <el-radio v-model="form.marriage" :label="4">不详</el-radio>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>文化程度 ：</span>
                    <el-radio v-model="form.education" :label="1">文盲</el-radio>
                    <el-radio v-model="form.education" :label="2">小学</el-radio>
                    <el-radio v-model="form.education" :label="3">初中</el-radio>
                    <el-radio v-model="form.education" :label="4">高中或中专</el-radio>
                    <el-radio v-model="form.education" :label="5">大专或以上</el-radio>
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
                    <el-radio v-model="form.diseaseDetail" :label="1">I期</el-radio>
                    <el-radio v-model="form.diseaseDetail" :label="2">II期</el-radio>
                    <el-radio v-model="form.diseaseDetail" :label="3">III期</el-radio>
                    <el-radio v-model="form.diseaseDetail" :label="4">胎传</el-radio>
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
                    <el-radio v-model="form.diseaseDetail" :label="5">确诊病例</el-radio>
                    <el-radio v-model="form.diseaseDetail" :label="6">无症状感染</el-radio>
                    ）
                </el-col>
                <el-col :span="6">
                    <el-radio v-model="form.diseaseDetail" :label="7">尖锐湿诊</el-radio>
                </el-col>
                <el-col :span="6">
                    <el-radio v-model="form.diseaseDetail" :label="8">生殖器疱疹</el-radio>
                </el-col>
            </el-row>
        </div>
        <!-- 接触史 -->
        <div class="contact content-box-item">
           
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>接触史（可多选） :</span>
                </el-col>
            </el-row>
            <el-checkbox-group v-model="form.historyList">
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-checkbox label="注射毒品史">注射毒品史</el-checkbox>
                </el-col>
                <el-col :span="16">
                    （在您记忆中
                    <div class="content-box">
                        <el-input v-model="form.injection" placeholder=""></el-input>
                    </div>
                    人与您共用过注射器？
                    ）
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-checkbox label="非婚异性接触史" >非婚异性接触史</el-checkbox>
                </el-col>
                <el-col :span="16">
                    （在您记忆中
                    <div class="content-box">
                        <el-input v-model="form.Unmarriage" placeholder=""></el-input>
                    </div>
                    人与您有过非婚性行为？
                    ）
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <el-checkbox label="配偶/固定性伴侣阳性" >配偶/固定性伴侣阳性</el-checkbox>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="6">
                    <el-checkbox label="男男性行为史" >男男性行为史</el-checkbox>
                </el-col>
                <el-col :span="16">
                    （在您记忆中
                    <div class="content-box">
                        <el-input v-model="form.injection" placeholder=""></el-input>
                    </div>
                    人与您有过同性性行为？
                    ）
                </el-col>
            </el-row>
            <el-row :gutter="10">
                
                    <el-col :span="6">
                        <el-checkbox label="献血（浆）史">献血（浆）史</el-checkbox>
                    </el-col>
                    <el-col :span="6">
                        <el-checkbox label="输血/血制品史">输血/血制品史</el-checkbox>
                    </el-col>
                    <el-col :span="6">
                        <el-checkbox label="母亲阳性" >母亲阳性</el-checkbox>
                    </el-col>
                    <el-col :span="6">
                        <el-checkbox label="职业暴露史" >职业暴露史</el-checkbox>
                    </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="6">
                        <el-checkbox label="手术史" >手术史</el-checkbox>
                    </el-col>
                    <el-col :span="12">
                        <el-checkbox label="其他" >其他</el-checkbox>
                        <div class="content-box">
                            <el-input v-model="form.other" placeholder=""></el-input>
                        </div>
                        （请注明）
                    </el-col>
                    <el-col :span="6">
                        <el-checkbox label="不详" >不详</el-checkbox>
                    </el-col>
                </el-row>
            </el-checkbox-group>
        </div>
        <!-- 性病史 -->
        <div class="C-disease content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>性病史 ：</span>
                            <el-radio v-model="form.sexDisease" :label="1">有</el-radio>
                            <el-radio v-model="form.sexDisease" :label="2">无</el-radio>
                            <el-radio v-model="form.sexDisease" :label="3">不详</el-radio>
                </el-col>
            </el-row>
        </div>
        <!-- 最可能感染的途径 -->
        <div class="injectWays content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span> 最可能感染的途径（单选）：  </span>
                    <el-radio-group v-model="form.infectWays" >
                        <el-col :span="6">
                            <el-radio :label="1">注射毒品</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="2">异性传播</el-radio>  
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="3">同行传播</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="4">性接触+注射毒品</el-radio>  
                        </el-col>
                        <br>
                        <el-col :span="6">
                            <el-radio :label="5">采血（浆）</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="6">输血/血制品</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="7">母婴传播</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="8">职业暴露</el-radio>
                            
                        </el-col>
                        <el-col :span="12">
                            <el-radio :label="9">其他</el-radio>
                            <div style="display:inline-block;border-bottom: 1px solid #333">
                                <el-input placeholder="请注明" v-model="form.otherinfectWays"></el-input>
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="10">不详</el-radio>
                        </el-col>
                    </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <div class="examReport content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span> 检测样本来源（单选）：  </span>
                    <el-radio-group v-model="form.examReport" >
                        <el-col :span="6">
                            <el-radio :label="1">术前检测</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="2">受血（制品）前检测</el-radio> 
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="3">性病门诊</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="4">其他就诊者检测</el-radio>   
                        </el-col>
                        <br>
                        <el-col :span="6">
                            <el-radio :label="5">婚前检查（含涉外婚姻）</el-radio>   
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="6">孕产期检查</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="7">检测咨询</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="8">阳性者配偶或性伴检测</el-radio> 
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="9">女子阳性者子女检测</el-radio>   
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="10">职业暴露检测</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="11">娱乐场所职业检测</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="12">有偿供血（浆）人员检测</el-radio>
                        </el-col>
                         <el-col :span="6">
                            <el-radio :label="13">无偿献血人员检测</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="14">出入境人员检测</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="15">新兵体检</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="16">前置/劳教戒毒人员检测</el-radio>                           
                        </el-col>
                         <el-col :span="6">
                            <el-radio :label="17">妇教所/女劳教人员检测</el-radio>                            
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="18">其他羁押人员体检</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="19">专题调查</el-radio>
                        </el-col>
                        <el-col :span="6">
                            <el-radio :label="20">其他</el-radio>
                            <div style="display:inline-block;border-bottom: 1px solid #333">
                                <el-input placeholder="请注明" v-model="form.otherExamReport"></el-input>
                            </div>
                        </el-col>
                    </el-radio-group>
                </el-col>
            </el-row>
        </div>
        <div class="content-box-item">
            <el-row :gutter="10">
                <el-col :span="8">
                    <span>实验室检测结论：</span>
                </el-col>
                <el-col :span="8">
                    <span>确认检测阳性</span>
                </el-col>
                <el-col :span="8">
                    <span>替代策略检测阳性</span>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>确认（替代策略）检测阳性日期：</span>
                    <div class="content-box">
                        <el-date-picker
                            v-model="form.sureDefineteTime"
                            type="datetime"
                            placeholder="选择确认（替代策略）检测阳性日期"
                            format="yyyy 年 MM 月 dd 日 HH:mm:ss"
                            value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>确认（替代策略）检测阳性单位：</span>
                    <div class="content-box">
                        <el-input v-model="form.sureDefineteUnit" placeholder="请输入检测阳性单位"></el-input>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box-item">
            <el-row :gutter="10">
                <el-col :span="24">
                    <span>艾滋病确诊日期：</span>
                    <div class="content-box">
                        <el-date-picker
                            v-model="form.definiteTime"
                            type="datetime"
                            placeholder="艾滋病确诊日期"
                            format="yyyy 年 MM 月 dd 日 HH:mm:ss"
                            value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </div>
                </el-col>
            </el-row>
        </div>
        <div class="content-box-item">
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>报告单位：</span>
                    <div class="content-box">
                        <el-input v-model="form.reportUnit" disabled></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <span>联系电话:</span>
                    <div class="content-box">
                        <el-input v-model="form.reportPhone" placeholder="请输入联系电话"></el-input>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                    <span>报告医生：</span>
                    <div class="content-box">
                        <el-input v-model="form.reportDoctor" disabled></el-input>
                    </div>
                </el-col>
                <el-col :span="12">
                    <el-col :span="12">
                    <span>填卡日期:</span>
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
                nation: '',       // 民族   1
                marriage: '',     // 婚姻状况
                education: '',    // 文化程度
                province: '',     // 省 1
                city: '',         // 市 1
                district: '',     // 县 1
                town: '',         // 乡镇 1 
                detail: '',       // 详细地址 1

                diseaseDetail: '' , // 疾病名称

                historyList: [], // 接触史
                injection: '',   // 共用注射器注射器
                Unmarriage: '',  // 非婚性行为
                sameSex: '',     // 同性性行为
                other: '',       // 其他补充

                sexDisease: '', // 性病史

                infectWays: '', // 感染途径
                otherinfectWays: '', //其他感染途径

                examReport: '', // 检测样本来源
                otherExamReport: '', // 其他检测样本来源

                sureDefineteTime:'', // 确认检测阳性日期
                sureDefineteUnit: '', // 确认检测单位

                definiteTime:' ',  // 确诊日期
                reportUnit: '新疆医科大学第五附属医院', // 填报单位
                reportPhone: '', // 联系电话
                reportDoctor: '管理员', //填报人
                CompleteCardTime: '', // 填卡日期 
            }
        }
    },
    methods: {
        submit() {
            
            let { name, province, city, district, town, CompleteCardTime } = this.form
           
                if( name && province && city && district && town &&  CompleteCardTime  ) {
                    this.$message.success('副卡报告提交成功!')
                    console.log('身份证号：'+this.idCardNumber)
                    console.log('其他内容：')
                    console.log(this.form)
                    this.$parent.compomentName = '' 
                } else {
                    this.$message.error('请检查必填项是否填写完成')
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

.el-checkbox-group {
    font-size: 14px;

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