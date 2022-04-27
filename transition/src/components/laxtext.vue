<template>
    <div id="text">
        这是一封告白的信
        <br>
  </div>
</template>

<script >
    import { onMounted} from 'vue'
    import lax from 'lax.js'
    import { text } from '../assets/text.js'
    export default {
        setup() {
            onMounted(() => {
                lax.init()

                lax.addDriver('scrollY', function () {
                    return window.scrollY
                })

                lax.addElements("#text", {}, {
                    onUpdate: function (driverValues, domElement) {
                    const scrollY = driverValues.scrollY[0]

                    const oCount = Math.floor((scrollY / 10) + 1)
                    const contentList = Array.from(text).splice(0,oCount).join('')
                    domElement.innerHTML = contentList
                    // const oString = Array.from({ length: oCount }, () => "o").join("")
                    // domElement.innerHTML = "scr" + oString + "ll"

                    if (scrollY > 1000) {
                        domElement.classList.add('pink')
                    } else {
                        domElement.classList.remove('pink')
                    }
                    }
                })
            })
            return {

            }
        }
    }
</script>
<style scoped>
  #text {
    width: calc(100vw - 40px);
    left: 20;
    top: 20;
    position: fixed;
    font-size: 60px;
    font-family: sans-serif;
    color: #a26ddc;
    overflow-wrap: anywhere;
    font-weight: bold;
  }

  #text.pink {
    color: #ff568c;
  }

  body {
    padding: 0;
    background-color: #dedbde;
    background-image: linear-gradient(rgba(255, 255, 255, .2) 50%, transparent 50%, transparent);
    margin: 0;
    background-size: 700px 700px;
    height: 1000000px;
  }
</style>