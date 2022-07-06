<template>
    <div class="box-content">
        <div class="input-box">
            <input :type="inputType" required v-model="value">
            <label>{{placeholder}}</label>
            <div class="underline"></div>
        </div>
    </div>
</template>

<script>
import { onMounted, computed } from 'vue'
export default {
    props: {
      placeholder: String,
      modelValue: String,
      width: {
          type:String,
          default: '400px'
      },
      inputType: String
    },
    emits: ['update:modelValue'],
    setup(props, context) {
        const value = computed({
            get: () => {
                return props.modelValue
            },
            set: (value) => {
                context.emit('update:modelValue', value)
            }
        })
        onMounted(() => {
            console.log(props);
        })
        return{
            value
        }
    }
}
    
</script>

<style lang="scss" scoped>
    .box-content {
        width: v-bind(width);
        height: 80px;
        border-radius: 6px;
        margin: 10px auto;
        background-color: #fff;
        padding: 10px 10px;
        box-sizing: border-box;
        color: #666;
        .input-box {
            width: 100%;
            height: 40px;
            margin-top: 18px;
            position: relative;
            input{ 
                width: 100%;
                height: 100%;
                border: none;
                border-bottom: 2px solid; 
                border-image: linear-gradient(to right, #e5e5e5, #666) 1;
                font-size: 16px;
                outline: none;
                
                transition: all 1s ease-in-out;
                box-sizing: border-box;
                &:focus,&:valid {
                    transform: border scaleX(1);
                    & ~ label {
                        color: #b12a5b;
                        transform: translateY(-22px);
                        font-size: 15px;
                    }
                    & ~ .underline {
                        transform:  scaleX(1);
                    }
                }
            }
            .underline {
                position: absolute;
                bottom: 0;
                left: 0;
                height: 3px;
                width: 100%;
                background: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);
                transform:  scaleX(0);
                transition: all .5s ease-in-out;
            }
            label {
                position: absolute;
                font-size: 20px;
                top: 6px;
                left: 2px;
                transition: all .5s ease-in-out;
                /**
                    这个属性可以使点击span时候穿透到输入框
                */
                pointer-events: none;
            }
        }
    }
</style>