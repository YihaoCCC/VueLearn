<template>
    <div id="pdfTest">
        <div class="title">
            <h1>JS生成PDF文件测试</h1>
        </div>
        <div class="body">
            <div class="item">
                <span>
                    请假姓名：
                </span>
                <em> 陈奕豪 </em>                
            </div>
            <div class="item">
                <span>
                    请假理由：
                </span>
                <em> 出去陪女朋友玩 </em>
            </div>
            <div class="item">
                <span>请假时间：</span>
                <em> 2022年3月28 ~ 2022年3月29日 </em>
            </div>
            <div class="item">
                <span>请假签字：</span>
                <em> 陈奕豪 </em>
            </div>
        </div>
    </div>
    <button @click="getPdf" > 下载PDF </button>
</template>

<script>
    import html2Canvas from 'html2canvas';
    import {jsPDF} from "jspdf";

    export default {
        setup() {
            return {
                htmlTitle: 'JS生成PDF文件测试'
            }
        },
        methods: { 
            getPdf () {
                var title = this.htmlTitle //PDF标题
                html2Canvas(document.querySelector('#pdfTest'), {
                    allowTaint: true,
                    taintTest: false,
                    useCORS: true,
                    //width:960,
                    //height:5072,
                    dpi: window.devicePixelRatio * 4, //将分辨率提高到特定的DPI 提高四倍
                    scale: 4 //按比例增加分辨率
                }).then(function(canvas) {
                    let contentWidth = canvas.width
                    let contentHeight = canvas.height
                    let pageHeight = contentWidth / 592.28 * 841.89
                    let leftHeight = contentHeight
                    let position = 0
                    let imgWidth = 595.28
                    let imgHeight = 592.28 / contentWidth * contentHeight
                    let pageData = canvas.toDataURL('image/jpeg', 1.0)
                    let PDF = new jsPDF('', 'pt', 'a4')
                    if (leftHeight < pageHeight) {
                        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight)
                    } else {
                        while (leftHeight > 0) {
                            PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight)
                            leftHeight -= pageHeight
                            position -= 841.89
                            if (leftHeight > 0) {
                                PDF.addPage()
                            }
                        }
                    }
                    PDF.save(title + '.pdf')
                })
            }
        }
    }
</script>

<style  scoped>
#pdfTest {
    width: 600px;
    margin: auto;
}
    .body {
        border: 2px solid #666;
        
    }
    .item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 12px;
            box-sizing: border-box;
            border: 1px solid #333;
           
        }
         span {
                font-size: 16px;
                font-weight: bolder;
                padding: 10px 60px;
                border-right: 1px solid #444;
            }
</style>