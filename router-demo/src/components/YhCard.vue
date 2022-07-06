<template>
    <div class="card">
        <div class="img-box">
            <img :src="img" alt="">
        </div>
        
            <h1>Yihao Chen</h1>
            <h4>Programmer</h4>
            <div class="describe">
                Luck：2022 just a web Desginer
            </div>
            <div class="KnowMore">
                <button>了解更多</button>
            </div>    
    </div>
</template>
<script setup>
    import { defineProps, onMounted,computed } from 'vue'
    const img = computed(()=> {
        if(props.imgurl.includes('Card1.png')) {
            return 'https://joeschmoe.io/api/v1/jon'
        } else if(props.imgurl.includes('Card2')){
            return 'https://joeschmoe.io/api/v1/jerry'
        } else{
            return 'https://joeschmoe.io/api/v1/jana'
        }
    }) 
    const props = defineProps({
        imgurl: {
            type: String,
            default: '../assets/Card1.png'
        },
        
    })
    onMounted(() => {
        console.log(props);
    })
</script>
<style lang="scss" scoped>
    .card {
        width: 360px;
        height: 210px;
        border-radius: 20px;
        overflow: hidden;
        margin: 10px 10px;
        position: relative;
        color: #fff;
        box-sizing: border-box;
        transition:  all .5s;
        box-shadow: 0 0 30px rgba(0,0,0,.5);
       background-image: linear-gradient(to top, #f39699 0%, #fecfef 99%, #fecfef 100%);
        &:hover {
            padding: 0 20px;
            .img-box {
                top: 30px;  
                width: 150px;
                height: 150px;
                border-radius: 50%;
                box-shadow: 0 0 10px #666;
            }
            h1 {
                top: 10px;
                right: 26px;
            }
            h4 {
                opacity: 1;
                top: 76px;
            } 
            .describe {
                opacity: 1;
                top: 110px;
            }
            .KnowMore {
                right: 50px;
                opacity: 1;
            }

        }
        .img-box {            
            overflow: hidden;
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            transition: all .5s ease;
            transition-delay: .1s;
            img {
                width: 100%;
                height: 100%;
                /**保持原有图片比例，并裁切长边 */
                object-fit: cover;
            }
        }
        h1 {
            position: absolute;
            top: 120px;
            right: 20px;
            margin-top: 6px;
            margin-bottom: 10px;
            transition: all .5s ease;
        }
        h4 {
            opacity: 0;
            transition: all .5s;
            position: absolute;
            top: 200px;
            right: 46px;
            font-size: 16px;
            padding:0px 30px 6px 0;
            margin: 0;
            box-sizing: border-box;
            border-bottom: 1px solid #e5e5e5;
        }
        .describe {
            opacity: 0;
            transition: all .5s;   
            position: absolute;
            top: 200px;
            font-size: 12px;
            right: 15px;
            width: 160px;
        }
        .KnowMore {
            opacity: 0;
            position: absolute;
            bottom: 20px;
            right: -100px;
            transition: all .5s ease;
            
            button {
                border: none;
                border: 1px solid #fff;
                background: rgba(255,255,255,0.2);
                width: 100px;
                height: 36px;
                border-radius: 20px;
                cursor: pointer;
            }
        }
    }
</style>