<template>
  <div class="report-card">
      <!-- 报告单头部 -->
    <div class="card-title">
        <h3 style="color:#666;margin-bottom:15px" >新疆医科大学第五附属医院</h3>
        <h1 >手术患者交接记录单</h1>
        <br>
        <!-- 基础信息 -->
        <el-row >
            <el-col :span="5">
                    <span>姓名：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                    </div>
            </el-col>
            <el-col :span="4">
                    <span>性别：</span>
                    <div class="input-box">
                        <el-select v-model="form.sex" placeholder="请选择">
                            <el-option label="男" value="man"> </el-option>
                            <el-option label="女" value="woman"> </el-option>
                        </el-select>
                    </div>
            </el-col>
            <el-col :span="5">
                    <span>年龄：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入年龄（岁）" v-model="form.age"></el-input>
                    </div>
            </el-col>
            <el-col :span="5">
                    <span>科室：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入科室" v-model="form.department"></el-input>
                    </div>
            </el-col>
            <el-col :span="5">
                    <span>床号：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入床号" v-model="form.bedNo"></el-input>
                    </div>
            </el-col>
            
            
        </el-row>
        <br>
        <!-- 时间 -->
         <el-row :gutter="10">
             <el-col :span="5">
                    <span>住院号：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入住院号" v-model="form.houseNo"></el-input>
                    </div>
            </el-col>
                <el-col :span="18">
                    <span>日期：</span>
                    <div class="input-box">
                        <el-date-picker
                            v-model="form.sureDefineteTime"
                            type="datetime"
                            placeholder="请选择日期"
                            format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒"
                            value-format="yyyy-MM-dd HH:mm:ss">
                        </el-date-picker>
                    </div>
                </el-col>
        </el-row>
    </div>
    <!-- 报告卡片内容 -->
    <div class="card-content">
        <!-- 核对项目 -->
        <div class="item-content">
            <div class="title">
                <h4>核对项目</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <h4>术前病区/手术室</h4>
                    </div>
                    <div class="item">
                        <h4>手术室/PACU、ICU、病区</h4>
                    </div>
                    <div class="item">
                        <h4>PACU/术后病区</h4>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <span>时间：</span>
                        <el-time-picker
                            v-model="form.BeforeOperationTime"
                            placeholder="选择时间点">
                        </el-time-picker>
                    </div>
                    <div class="item">
                        <span>时间：</span>
                        <el-time-picker
                            v-model="form.OperationTime"
                            placeholder="选择时间点">
                        </el-time-picker>
                    </div>
                    <div class="item">
                        <span>时间：</span>
                        <el-time-picker
                            v-model="form.AfterOperationTime"
                            placeholder="选择时间点">
                        </el-time-picker>
                    </div>
                </div>
            </div>
        </div>
        <!-- 患者身份核验 -->
        <div class="item-content">
            <div class="title">
                <h4>患者身份</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeIdentity" :label="1">确认</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.identity" :label="1">确认</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterIdentity" :label="1">确认</el-radio>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 过敏史 -->
        <div class="item-content">
            <div class="title">
                <h4>过敏史</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeAllergy" :label="0">无</el-radio>
                        <el-radio v-model="form.BeforeAllergy" :label="1">不详</el-radio>
                    </div>
                    <div class="item" style="border-right: 1px solid #333">
                        <el-radio v-model="form.allergy" :label="0">无</el-radio>
                        <el-radio v-model="form.allergy" :label="1">不详</el-radio>
                    </div>
                    <div class="item" style="border: none">
                        
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeAllergy" :label="2">有
                            <div class="input-box-small">
                                <el-input placeholder="过敏史名称" v-model="form.BeforeAllergyName"></el-input>
                            </div>
                            过敏史
                        </el-radio>
                    </div>
                    <div class="item" >
                        <el-radio v-model="form.allergy" :label="2">有
                            <div class="input-box-small">
                                <el-input placeholder="过敏史名称" v-model="form.allergyName"></el-input>
                            </div>
                            过敏史
                        </el-radio>
                    </div>
                    <div class="item">
                            /
                    </div>
                </div>
            </div>
        </div>
        <!-- 手术用药 -->
        <div class="item-content">
            <div class="title">
                <h4>手术用药</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.OptionMedicine" :label="0">无</el-radio>
                        <el-radio v-model="form.OptionMedicine" :label="1">有</el-radio>
                    </div>
                    <div class="item">/</div>
                    <div class="item">/</div>
                </div>
            </div>
        </div>
        <div class="item-content">
            <div class="title">
                <h4>皮肤完整性</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeSkin" :label="1">完整</el-radio>
                        <el-radio v-model="form.BeforeSkin" :label="0">不完整</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.skin" :label="1">完整</el-radio>
                        <el-radio v-model="form.skin" :label="0">不完整</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterSkin" :label="1">完整</el-radio>
                        <el-radio v-model="form.AfterSkin" :label="0">不完整</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 管道 -->
        <div class="item-content">
            <div class="title">
                <h4>管道</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeTrachea" :label="1">气管插管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.trachea" :label="1">气管插管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterTrachea" :label="1">气管插管</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeCasing" :label="1">气管切开套管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.casing" :label="1">气管切开套管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterCasing" :label="1">气管切开套管</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeVein" label="label">静脉置管
                            <div class="input-box-small">
                                <el-input placeholder="静脉置管数量" v-model="form.BeforeVeinNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.vein" label="label">静脉置管
                            <div class="input-box-small">
                                <el-input placeholder="静脉置管数量" v-model="form.veinNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterVein" label="label">静脉置管
                            <div class="input-box-small">
                                <el-input placeholder="静脉置管数量" v-model="form.AfterVeinNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeUrine" :label="1">导尿管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.Urine" :label="1">导尿管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterUrine" :label="1">导尿管</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeDrainage" label="label">引流管
                            <div class="input-box-small">
                                <el-input placeholder="引流管数量" v-model="form.BeforeDrainageNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.drainage" label="label">引流管
                            <div class="input-box-small">
                                <el-input placeholder="引流管数量" v-model="form.drainageNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterDrainage" label="label">引流管
                            <div class="input-box-small">
                                <el-input placeholder="引流管数量" v-model="form.AfterDrainageNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeStomach" :label="1">胃管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.stomach" :label="1">胃管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterStomach" :label="1">胃管</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeOther" label="label">其他导管
                            <div class="input-box-small">
                                <el-input placeholder="其他导管数量" v-model="form.BeforeOtherNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.other" label="label">其他导管
                            <div class="input-box-small">
                                <el-input placeholder="其他导管数量" v-model="form.otherNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterOther" label="label">其他导管
                            <div class="input-box-small">
                                <el-input placeholder="其他导管数量" v-model="form.AfterOtherNum"></el-input>
                            </div>
                            根
                        </el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                         <el-radio v-model="form.BeforeLogo" :label="1">管道标识</el-radio>
                    </div>
                    <div class="item">
                         <el-radio v-model="form.logo" :label="1">管道标识</el-radio>
                    </div>
                    <div class="item">
                         <el-radio v-model="form.AfterLogo" :label="1">管道标识</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                         <el-radio v-model="form.BeforeSmooth" :label="1">管道畅通</el-radio>
                    </div>
                    <div class="item">
                         <el-radio v-model="form.smooth" :label="1">管道畅通</el-radio>
                    </div>
                    <div class="item">
                         <el-radio v-model="form.AfterSmooth" :label="1">管道畅通</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 禁食水 -->
        <div class="item-content">
            <div class="title">
                <h4>禁食水</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.foodWater" :label="1">确认</el-radio>
                    </div>
                    <div class="item">/</div>
                    <div class="item">/</div>
                </div>
            </div>
        </div>
        <!-- 排空膀胱 -->
        <div class="item-content">
            <div class="title">
                <h4>排空膀胱</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.empty" :label="1">排空膀胱</el-radio>                  
                    </div>
                    <div class="item">/</div>
                    <div class="item">/</div>
                </div>
            </div>
        </div>
        <!-- 病例 -->
        <div class="item-content">
            <div class="title">
                <h4>病例</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeMedicalRecords" :label="1">确认</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.MedicalRecords" :label="1">确认</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterMedicalRecords" :label="1">确认</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 手术室、麻醉科相关医疗文书-->
        <div class="item-content">
            <div class="title">
                <h4>手术室、麻醉科相关医疗文书</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div style="display:flex;align-items: center;height:100%;flex-direction: column;justify-content: center">
                            <div>
                                <el-radio v-model="form.informed" :label="1">麻醉知情同意书</el-radio>
                            </div>
                            <el-radio v-model="form.visit" :label="1">麻醉前访视单</el-radio>
                        </div>
                        
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.SurgicalSafety" :label="1">手术安全核查表</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.SurgicalRisk" :label="1">手术风险评估表</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.NursingRecords" :label="1">手术护理记录单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.StickySheet" :label="1">体内植入物条码粘帖单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.BloodTransfusion" :label="1">输血护理记录单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.anaesthetization" :label="1">麻醉记录单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.hocus" :label="1">麻醉知情同意书</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterHocusVisit" :label="1">麻醉前后访视及计划单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.DoctorOrder" :label="1">麻醉临时医嘱单</el-radio> 
                        </div>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.AfterSurgicalSafety" :label="1">手术安全核查表</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterSurgicalRisk" :label="1">手术风险评估表</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterNursingRecords" :label="1">手术护理记录单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterStickySheet" :label="1">体内植入物条码粘帖单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterBloodTransfusion" :label="1">输血护理记录单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.Afteranaesthetization" :label="1">麻醉记录单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.Afterhocus" :label="1">麻醉知情同意书</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterAfterHocusVisit" :label="1">麻醉前后访视及计划单</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.AfterDoctorOrder" :label="1">麻醉临时医嘱单</el-radio> 
                        </div>  
                    </div>
                </div>
            </div>
        </div>
        <!-- 手术部位标记 -->
        <div class="item-content">
            <div class="title">
                <h4>手术部位标记</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.SiteMarker" :label="1">已标记</el-radio>
                        <el-radio v-model="form.SiteMarker" :label="0">未标记</el-radio>
                    </div>
                    <div class="item">/</div>
                    <div class="item">/</div>
                </div>
            </div>
        </div>
        <!-- 携带物品 -->
        <div class="item-content">
            <div class="title">
                <h4>携带物品</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeImage" label="label">影像资料
                            <div class="input-box-small">
                                <el-input placeholder="影像资料数量" v-model="form.BeforeImageNum"></el-input>
                            </div>
                            张
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.Image" label="label">影像资料
                            <div class="input-box-small">
                                <el-input placeholder="影像资料数量" v-model="form.ImageNum"></el-input>
                            </div>
                            张
                        </el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterImage" label="label">影像资料
                            <div class="input-box-small">
                                <el-input placeholder="影像资料数量" v-model="form.AfterImageNum"></el-input>
                            </div>
                            张
                        </el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeCummerbund" :label="1">腹带</el-radio>
                        <el-radio v-model="form.BeforeGastricTube" :label="1">胃管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.Cummerbund" :label="1">腹带</el-radio>
                        <el-radio v-model="form.GastricTube" :label="1">胃管</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterCummerbund" :label="1">腹带</el-radio>
                        <el-radio v-model="form.AfterGastricTube" :label="1">胃管</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeChest" :label="1">胸腔引流瓶</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.chest" :label="1">胸腔引流瓶</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterChest" :label="1">胸腔引流瓶</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeCatheter" :label="1">导尿包</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.Catheter" :label="1">导尿包</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterCatheter" :label="1">导尿包</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.BeforeOtherItems" label="label">其他</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.OtherItems" label="label">其他</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.AfterOtherItems" label="label">其他</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 备注 -->
        <div class="item-content">
            <div class="title">
                <h4>备注</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="input-box" style="padding:20px 0">
                        <el-input v-model="form.Remark" placeholder="备注内容"></el-input>
                    </div>
                </div>
            </div>
        </div>
        <!-- 交/接科室 -->
        <div class="item-content">
            <div class="title">
                <h4>交/接科室</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item" >
                        <p style="font-size: 14px;line-height: 86px">术前病区/手术室</p>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.PACU" :label="1">手术室/PACU</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.ICU" :label="1">手术室/ICU</el-radio>
                        </div>
                        <el-radio v-model="form.sick" :label="1">手术室/病区</el-radio>
                    </div>
                    <div class="item">
                        <p style="font-size: 14px;line-height: 86px">PACU/术后病区</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- 交/接人员签名 -->
        <div class="item-content">
            <div class="title">
                <h4>交/接人员签名</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item" >
                        <div class="input-box">
                            <el-input v-model="form.BeforePatient" placeholder="交/接人员签名" ></el-input>
                        </div>
                    </div>
                    <div class="item">
                        <div class="input-box">
                            <el-input v-model="form.patient" placeholder="交/接人员签名" ></el-input>
                        </div>
                    </div>
                    <div class="item">
                       <div class="input-box">
                            <el-input v-model="form.AfterPatient" placeholder="交/接人员签名" ></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <p style="margin:10px 0;font-size:15px;color:#666">备注：术前病区/手术室交接由病区护士填写，手术室/PACU、ICU、病区交接由手术室护士填写，PACU/术后病区交接由PACU护士填写，经双方核对无误后签名。</p>
        <el-button style="margin-top:15px" type="primary" @click="submit">提交该记录单</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',         // 患者姓名
                age: '',          // 年龄
                department: '',   // 科室
                houseNo: '',      // 住院号
                bedNo: '',        // 床号
                sex: '',          // 性别
                time: '',         // 时间
                
                BeforeOperationTime: '', // 术前时间
                OperationTime: '',       // 手术时间
                AfterOperationTime: '',  // 术后时间

                BeforeIdentity: '', // 术前身份确认
                identity: '',       // 术
                AfterIdentity: '',  // 术后身份确认

                BeforeAllergy:'',   // 过敏史术前
                BeforeAllergyName: '', // 过敏史名称
                allergy: '',        // 过敏史
                allergyName: '',    // 过敏史名称

                OptionMedicine:  '',  // 手术用药

                BeforeSkin: '',   // 皮肤完整性
                skin: '',
                AfterSkin: '',    

                BdforeTrachea: '', // 气管
                trachea: '',
                AfterTrachea: '',
                BeforeCasing: '', // 套管
                casing: '',
                AfterCasing: '',
                BeforeVein: '', // 静脉置管
                BeforeVeinNum: '',
                vein: '',
                veinNum: '',
                AfterVein: '',
                AfterVeinNum: '',
                BeforeUrine: '', // 导尿管
                Urine: '', 
                AfterUrine: '',
                BeforeDrainage: '', // 引流管
                BeforeDrainageNum: '',
                drainage: '',
                drainageNum: '',
                AfterDrainage: '',
                AfterDrainageNum: '',
                BeforeStomach: '', // 胃管
                stomach: '', 
                AfterStomach: '',
                BeforeOther: '',  // 其他导管
                BeforeOtherNum: '',
                other: '',
                otherNum: '',
                AfterOther: '',
                AfterOtherNum: '',
                BeforeLogo: '', // 管道标识
                logo: '',
                AfterLogo: '',
                BeforeSmooth: '', // 管道通畅
                smooth: '',
                AfterSmooth: '',

                foodWater: '', // 禁食水

                empty: '', // 排空膀胱

                BeforeMedicalRecords: '', // 病历
                MedicalRecords: '',
                AfterMedicalRecords: '',

                informed: '', // 麻醉知情同意书
                visit: '',    // 麻醉前访视单
                SurgicalSafety: '', // 手术安全核查表
                SurgicalRisk: '',   // 手术风险评估表 
                NursingRecords: '', // 手术护理记录单
                StickySheet: '',    // 体内植入物条码粘帖单
                BloodTransfusion: '', // 输血护理记录单
                anaesthetization: '', // 麻醉记录单
                hocus: '',          // 麻醉知情同意书
                evaluateNurse: '', //评估及宣教护士签名
                AfterHocusVisit: '', // 麻醉前后访视及计划单
                DoctorOrder: '',   // 麻醉临时医嘱单
                AfterSurgicalSafety: '', // 手术安全核查表
                AfterSurgicalRisk: '',   // 手术风险评估表 
                AfterNursingRecords: '', // 手术护理记录单
                AfterStickySheet: '',    // 体内植入物条码粘帖单
                AfterBloodTransfusion: '', // 输血护理记录单
                Afteranaesthetization: '', // 麻醉记录单
                Afterhocus: '',          // 麻醉知情同意书
                AfterevaluateNurse: '', //评估及宣教护士签名
                AfterAfterHocusVisit: '', // 麻醉前后访视及计划单
                AfterDoctorOrder: '',   // 麻醉临时医嘱单


                SiteMarker: '',    // 手术部位标记

                BeforeImage: '',   // 影像资料
                BeforeImageNum: '',
                Image: '',
                ImageNum: '',
                AfterImage: '', 
                AfterImageNum: '',

                BeforeCummerbund: '', // 腹带
                BeforeGastricTube: '', //胃管
                Cummerbund: '',
                GastricTube: '',
                AfterCummerbund: '',
                AfterGastricTube: '', 
                BeforeChest: '', // 胸腔引流瓶
                chest: '', 
                AfterChest: '',
                BeforeCatheter: '', // 导尿包
                Catheter: '',
                AfterCatheter: '',
                BeforeOtherItems: '', // 其他
                OtherItems: '',
                AfterOtherItems: '',

                Remark: '' ,  // 备注

                PACU: '', // 
                ICU: '',
                sick: '',

                BeforePatient: '',       //  交接人员签字
                Patient: '',
                AfterPatient: '',
            }
        }
    },
    methods: {
        submit() {
            console.log(this.form)
        },
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
/* 页面统一单元项样式 */
.item-content {
    border: 1px solid #666;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.item-content .title {
    width: 20%;
    text-align: center;
}
.item-content .item-detail {
    border-left: 1px solid #666;
    width: 80%;   
}
/* 自定义行内栅格,使其平均分成三份 */
.item-detail .row {
    width: 100%;
    display: flex;
}
.item-detail .row .item {
    flex: 1;
    border-right: 1px solid #333;
    align-items: center;
    border-bottom: 1px solid #333;
    padding: 10px 0;
}
.item-detail .row .item:last-child {
    border-right: none;
}
/* 最后一行不需要底部边框 */
.item-detail .row:last-child .item {
    border-bottom: none;
}
/* 页面重置的element样式 */
.el-row {
    margin: 15px 0 15px 0 !important;
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
/* 重写日期时间选择样式 */
.el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 300px;
}
/* 重写时间选择样式 */
.el-date-editor.el-input.el-date-editor--time, .el-date-editor .el-input__inner {
    width: 200px ;
}
/* 输入框盒子样式 */
.input-box {
    display: inline-block;
    width: 60%;
    border-bottom: 1px solid #333;
}
/* 较小输入框样式 */
.input-box-small {
    display: inline-block;
    width: 40%;
    border-bottom: 1px solid #333;
}
/* 输入框穿透 */
div >>>.el-input__inner {
    width: 100%;
    border: none !important;
    height: 30px;
}
</style>