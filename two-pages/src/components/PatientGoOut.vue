<template>
  <div class="report-card">
      <!-- 报告单头部 -->
    <div class="card-title">
        <h3 style="color:#666;margin-bottom:15px" >新疆医科大学第五附属医院</h3>
        <h1 >患者转入/转出交接记录单（2016修订版）</h1>
        <br>
        <!-- 基础信息 -->
        <el-row >
            <el-col :span="5">
                    <span>姓名：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
                    </div>
            </el-col>
            <el-col :span="5">
                    <span>住院号：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入住院号" v-model="form.houseNo"></el-input>
                    </div>
            </el-col>
            <el-col :span="5">
                    <span>年龄：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入年龄（岁）" v-model="form.age"></el-input>
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
                    <span>族别：</span>
                    <div class="input-box">
                        <el-input placeholder="请输入族别" v-model="form.Clan"></el-input>
                    </div>
            </el-col>        
        </el-row>
        <br>
        <!-- 时间 -->
         <el-row :gutter="10">
                <el-col :span="18">
                    <span>诊断：</span>
                    <div class="input-box">
                        <el-input v-model="form.dignose" placeholder="诊断结果"></el-input>
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
                        <span>转出科室：</span>
                        <div class="input-box">
                            <el-input v-model="form.out" placeholder="转出科室："></el-input>
                        </div>
                    </div>
                    <div class="item">
                        <span>转入科室：</span>
                        <div class="input-box">
                            <el-input v-model="form.to" placeholder="转出科室："></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 时间  -->
        <div class="item-content">
            <div class="title">
                <h4>时间</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <span>时间：</span>
                        <div class="input-box">
                            <el-date-picker
                                v-model="form.OutTime"
                                type="datetime"
                                placeholder="请选择日期"
                                format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒"
                                value-format="yyyy-MM-dd HH:mm:ss">
                            </el-date-picker>
                        </div>
                    </div>
                    <div class="item">
                        <span>时间：</span>
                        <div class="input-box">
                            <el-date-picker
                                v-model="form.InTime"
                                type="datetime"
                                placeholder="请选择日期"
                                format="yyyy 年 MM 月 dd 日 HH 时 mm 分 ss 秒"
                                value-format="yyyy-MM-dd HH:mm:ss">
                            </el-date-picker>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 意识 -->
        <div class="item-content">
            <div class="title">
                <h4>意识</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutAwareness" label="清醒">清醒</el-radio>
                            <el-radio v-model="form.OutAwareness" label="模糊">模糊</el-radio>
                            <el-radio v-model="form.OutAwareness" label="嗜睡">嗜睡</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.OutAwareness" label="昏睡">昏睡</el-radio>
                            <el-radio v-model="form.OutAwareness" label="浅昏迷">浅昏迷</el-radio>
                            <el-radio v-model="form.OutAwareness" label="深昏迷">深昏迷</el-radio>
                        </div>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.InAwareness" label="清醒">清醒</el-radio>
                            <el-radio v-model="form.InAwareness" label="模糊">模糊</el-radio>
                            <el-radio v-model="form.InAwareness" label="嗜睡">嗜睡</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.InAwareness" label="昏睡">昏睡</el-radio>
                            <el-radio v-model="form.InAwareness" label="浅昏迷">浅昏迷</el-radio>
                            <el-radio v-model="form.InAwareness" label="深昏迷">深昏迷</el-radio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 生命体征 -->
        <div class="item-content">
            <div class="title">
                <h4>生命体征</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                         <el-row :gutter="10">
                            <el-col :span="12">
                                <span>T</span>
                                <div class="input-box-small">
                                    <el-input placeholder="体温" v-model="form.OutTemprature"></el-input>
                                </div>
                                ℃
                            </el-col>
                            <el-col :span="12">
                                <span>P</span>
                                <div class="input-box-small">
                                    <el-input placeholder="脉搏" v-model="form.OutPulse"></el-input>
                                </div>
                                次/分
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span>R</span>
                                <div class="input-box-small">
                                    <el-input placeholder="呼吸" v-model="form.OutRespiration"></el-input>
                                </div>
                                次/分
                            </el-col>
                            <el-col :span="12">
                                <span>Bp</span>
                                <div class="input-box-small">
                                    <el-input placeholder="血压" v-model="form.OutBlood"></el-input>
                                </div>
                                mmHg
                            </el-col>
                        </el-row>
                    </div>
                    <div class="item">
                         <el-row :gutter="10">
                            <el-col :span="12">
                                <span>T</span>
                                <div class="input-box-small">
                                    <el-input placeholder="体温" v-model="form.InTemprature"></el-input>
                                </div>
                                ℃
                            </el-col>
                            <el-col :span="12">
                                <span>P</span>
                                <div class="input-box-small">
                                    <el-input placeholder="脉搏" v-model="form.InPulse"></el-input>
                                </div>
                                次/分
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span>R</span>
                                <div class="input-box-small">
                                    <el-input placeholder="呼吸" v-model="form.InRespiration"></el-input>
                                </div>
                                次/分
                            </el-col>
                            <el-col :span="12">
                                <span>Bp</span>
                                <div class="input-box-small">
                                    <el-input placeholder="血压" v-model="form.InBlood"></el-input>
                                </div>
                                mmHg
                            </el-col>
                        </el-row>
                    </div>
                </div>    
            </div>
        </div>
        <!-- 气道状况 -->
        <div class="item-content">
            <div class="title">
                <h4>气道状况</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutAirway" label="自主呼吸">自主呼吸</el-radio>
                            <el-radio v-model="form.OutAirway" label="鼻塞/面罩吸氧">鼻塞/面罩吸氧</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.OutAirway" label="气管插管">气管插管</el-radio>
                            <el-radio v-model="form.OutAirway" label="气管切开">气管切开</el-radio>
                        </div>
                    </div>
                     <div class="item">
                        <div>
                            <el-radio v-model="form.InAirway" label="自主呼吸">自主呼吸</el-radio>
                            <el-radio v-model="form.InAirway" label="鼻塞/面罩吸氧">鼻塞/面罩吸氧</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.InAirway" label="气管插管">气管插管</el-radio>
                            <el-radio v-model="form.InAirway" label="气管切开">气管切开</el-radio>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 静脉通道 -->
        <div class="item-content">
            <div class="title">
                <h4>静脉通道</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutVein" label="外周静脉置管">外周静脉置管
                            <div class="input-box-small">
                                <el-input placeholder="静脉置管数量" v-model="form.OutVeinNum"></el-input>
                            </div>
                            根
                        </el-radio>
                        </div>
                        <el-radio v-model="form.OutVein" label="PICC">PICC</el-radio>
                        <el-radio v-model="form.OutVein" label="CVC">CVC</el-radio>
                        <el-radio v-model="form.OutVein" label="其他">其他</el-radio>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.InVein" label="label">外周静脉置管
                            <div class="input-box-small">
                                <el-input placeholder="静脉置管数量" v-model="form.InVeinNum"></el-input>
                            </div>
                            根
                        </el-radio>
                        </div>
                        <el-radio v-model="form.InVein" label="PICC">PICC</el-radio>
                        <el-radio v-model="form.InVein" label="CVC">CVC</el-radio>
                        <el-radio v-model="form.InVein" label="其他">其他</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.OutVeinIsGood" label="通畅">通畅</el-radio>
                        <el-radio v-model="form.OutVeinIsGood" label="不通畅">不通畅</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.InVeinIsGood" label="通畅">通畅</el-radio>
                        <el-radio v-model="form.InVeinIsGood" label="不通畅">不通畅</el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 治疗及用药情况 -->
        <div class="item-content">
            <div class="title">
                <h4>治疗及用药情况</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.OutMedication" label="无">无</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.InMedication" label="无">无</el-radio>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutMedication" label="目前输注液体（包括血制品）">目前输注液体（包括血制品）</el-radio>
                        </div>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span>名称:</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.OutMedicationName" placeholder="液体名称"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <span>余量</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.OutMedicationNum" placeholder="余量"></el-input>
                                </div>
                                ml
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span>名称:</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.OutMedicationName2" placeholder="液体名称"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <span>余量</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.OutMedicationNum2" placeholder="余量"></el-input>
                                </div>
                                ml
                            </el-col>
                        </el-row>

                    </div>
                     <div class="item">
                        <div>
                            <el-radio v-model="form.InMedication" label="label">目前输注液体（包括血制品）</el-radio>
                        </div>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span>名称:</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.InMedicationName" placeholder="液体名称"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <span>余量</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.InMedicationNum" placeholder="余量"></el-input>
                                </div>
                                ml
                            </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="12">
                                <span>名称:</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.InMedicationName2" placeholder="液体名称"></el-input>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <span>余量</span>
                                <div class="input-box-small">
                                    <el-input v-model="form.InMedicationNum2" placeholder="余量"></el-input>
                                </div>
                                ml
                            </el-col>
                        </el-row>

                    </div>
                </div>
            </div>
        </div>
        <!-- 各种管道 -->
        <div class="item-content">
            <div class="title">
                <h4>各种管道</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutPipeline" label="胃管">胃管</el-radio>
                            <el-radio v-model="form.OutPipeline" label="尿管">尿管</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.OutPipeline" label="引流管">引流管
                                <div class="input-box-small">
                                    <el-input placeholder="引流管数量" v-model="form.OutDrainageNum"></el-input>
                                </div>
                                根
                            </el-radio>
                            
                        </div>
                        <el-radio v-model="form.OutPipeline" label="其他导管">其他导管
                                <div class="input-box-small">
                                    <el-input placeholder="其他导管数量" v-model="form.OutOtherPipelineNum"></el-input>
                                </div>
                                根
                        </el-radio>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.InPipeline" label="胃管">胃管</el-radio>
                            <el-radio v-model="form.InPipeline" label="尿管">尿管</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.InPipeline" label="引流管">引流管
                                <div class="input-box-small">
                                    <el-input placeholder="引流管数量" v-model="form.InDrainageNum"></el-input>
                                </div>
                                根
                            </el-radio>
                        </div>
                            <el-radio v-model="form.InPipeline" label="其他导管">其他导管
                                <div class="input-box-small">
                                    <el-input placeholder="其他导管数量" v-model="form.InOtherPipelineNum"></el-input>
                                </div>
                                根
                            </el-radio>
                    </div>
                </div>
            </div>
        </div>
        <!-- 皮肤完整性 -->
        <div class="item-content">
            <div class="title">
                <h4>皮肤完整性</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.OutSkin" label="完整">完整</el-radio>    
                        <el-radio v-model="form.OutSkin" label="不完整">不完整</el-radio>              
                    </div>
                     <div class="item">
                        <el-radio v-model="form.InSkin" label="完整">完整</el-radio>    
                        <el-radio v-model="form.InSkin" label="不完整">不完整</el-radio>              
                    </div>
                </div>
            </div>
        </div>
        <!-- 影像资料 -->
        <div class="item-content">
            <div class="title">
                <h4>影像资料</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutImage" label="影像片">影像片
                            <div class="input-box-small">
                                <el-input placeholder="影像片数量" v-model="form.OutImageNum"></el-input>
                            </div>
                                张
                            </el-radio>
                        </div>
                        <el-radio v-model="form.OutImage" label="其他">其他
                            <div class="input-box-small">
                                <el-input placeholder="影像片数量" v-model="form.OutOtherImageNum"></el-input>
                            </div>
                            张
                        </el-radio>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.InImage" label="影像片">影像片
                            <div class="input-box-small">
                                <el-input placeholder="影像片数量" v-model="form.InImageNum"></el-input>
                            </div>
                                张
                            </el-radio>
                        </div>
                        <el-radio v-model="form.InImage" label="其他">其他
                            <div class="input-box-small">
                                <el-input placeholder="影像片数量" v-model="form.InOtherImageNum"></el-input>
                            </div>
                            张
                        </el-radio>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 潜在高风险-->
        <div class="item-content">
            <div class="title">
                <h4>潜在高风险</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <el-radio v-model="form.OutRisk" label="过敏史">过敏史</el-radio>
                        <el-radio v-model="form.OutRisk" label="多重耐药菌感染">多重耐药菌感染</el-radio>
                    </div>
                    <div class="item">
                        <el-radio v-model="form.InRisk" label="过敏史">过敏史</el-radio>
                        <el-radio v-model="form.InRisk" label="多重耐药菌感染">多重耐药菌感染</el-radio>
                    </div>  
                </div>
            </div>
        </div>
        <!-- 病历资料  交接 -->
        <div class="item-content">
            <div class="title">
                <h4>病历资料  交接</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item">
                        <div>
                            <el-radio v-model="form.OutMaterial" label="住院病历">住院病历</el-radio>
                            <el-radio v-model="form.OutMaterial" label="急诊病历">急诊病历</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.OutMaterial" label="门诊病历">门诊病历</el-radio>
                            <el-radio v-model="form.OutMaterial" label="其他">其他</el-radio>
                        </div>
                    </div>
                    <div class="item">
                        <div>
                            <el-radio v-model="form.InMaterial" label="住院病历">住院病历</el-radio>
                            <el-radio v-model="form.InMaterial" label="急诊病历">急诊病历</el-radio>
                        </div>
                        <div>
                            <el-radio v-model="form.InMaterial" label="门诊病历">门诊病历</el-radio>
                            <el-radio v-model="form.InMaterial" label="其他">其他</el-radio>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <!-- 其他 -->
        <div class="item-content">
            <div class="title">
                <h4>其他</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="input-box" style="padding:20px 0">
                        <el-input v-model="form.Remark" placeholder="其他备注内容"></el-input>
                    </div>
                </div>
            </div>
        </div>
        <!-- 签名 -->
        <div class="item-content">
            <div class="title">
                <h4>签名</h4>
            </div>
            <div class="item-detail">
                <div class="row">
                    <div class="item" >
                        <div class="input-box">
                            <el-input v-model="form.OutPatient" placeholder="交人员签名" ></el-input>
                        </div>
                    </div>
                    <div class="item">
                        <div class="input-box">
                            <el-input v-model="form.InPatient" placeholder="接人员签名" ></el-input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="display:flex; justify-content: flex-end;flex-direction: column;text-align:right;color:#555;margin-top: 20px">
            <p>制订时间：2012年5月</p>
            <p>再修订时间：2014年6月</p>
            <p>再修订时间：2016年5月</p>
        </div>
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
                houseNo: '',      // 住院号
                sex: '',          // 性别
                Clan: '',         // 族别

                dignose: '',      // 诊断

                out: '',       // 转出科室
                to: '',        // 转入科室
                OutTime: '',   // 转出时间
                InTime: '',    // 转入时间

                OutAwareness: '',  // 意识
                InAwareness: '',

                OutTemprature: '', // 温度
                InTemprature: '',
                OutPulse: '',      // 脉搏
                InPulse: '',
                OutRespiration: '', // 呼吸
                InRespiration: '',
                OutBlood: '',      // 血/毫升
                InBlood: '',
                
                OutAirway: '',  // 气道状况
                InAirway: '',

                OutVein: '',  // 静脉通道
                OutVeinNum: '',
                InVein: '',
                InVeinNum: '',
                OutVeinIsGood: '', // 畅通
                InVeinIsGood: '',

                OutMedication: '', // 药物用量
                OutMedicationName: '', // 药物名称 
                OutMedicationName2: '',
                OutMedicationNum: '',  // 药物余量
                OutMedicationNum2: '',
                InMedication: '',
                InMedicationName: '',
                InMedicationName2: '',
                InMedicationNum: '',
                InMedicationNum2: '',

                OutPipeline: '', // 管道
                OutDrainageNum: '', // 引流管数量
                OutOtherPipelineNum: '', // 其他数量
                InPipeline: '', 
                InDrainageNum: '',
                InOtherPipelineNum: '', 

                OutSkin: '',   // 皮肤完整性
                InSkin: '',

                OutImage: '', // 影像资料
                OutImageNum: '',
                OutOtherImageNum: '',
                InImage: '',
                InImageNum: '',
                InOtherImageNum: '',  

                OutRisk: '', // 潜在高风险
                InRisk: '',  

                OutMaterial: '', // 病例资料
                InMaterial: '', 

                Remark: '' ,  // 其他备注

                OutPatient: '',       //  交接人员签字
                InPatient: '',

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