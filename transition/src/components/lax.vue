<template>
    <div>
        lax.js实现
        <div class="selector">Hello</div>
    </div>
    <img  class="letter-l" />
  <img  class="letter-a" />
  <div class="letter-x">
    <img  />
  </div>

  <h2 class="scrolldown">scroll down</h2>

  <div class="downarrows">
    
  </div>

  <div class="zags">
    <div id="pinkZag" class="zag"></div>
    <div id="tealZag" class="zag"></div>
    <div id="purpleZag" class="zag"></div>
  </div>

  <div class="bubbles">
    <div class="bubble blue"></div>
    <div class="bubble red"></div>
    <div class="bubble yellow"></div>
    <div class="bubble red"></div>
    <div class="bubble blue"></div>
    <div class="bubble yellow"></div>
    <div class="bubble blue"></div>
    <div class="bubble red"></div>
    <div class="bubble yellow"></div>
    <div class="bubble red"></div>
    <div class="bubble blue"></div>
    <div class="bubble blue"></div>
    <div class="bubble red"></div>
    <div class="bubble yellow"></div>
    <div class="bubble red"></div>
    <div class="bubble blue"></div>
    <div class="bubble yellow"></div>
    <div class="bubble blue"></div>
    <div class="bubble red"></div>
    <div class="bubble yellow"></div>
    <div class="bubble red"></div>
    <div class="bubble blue"></div>
    <div class="bubble yellow"></div>
    <div class="bubble blue"></div>
    <div class="bubble red"></div>
  </div>

  <h1 class="oooh">oooh</h1>
  <h1 class="aaah">aaah</h1>

  <h1 class="wheee">wheee!</h1>

  <div class="bottombg"></div>

  <a href="https://github.com/alexfoxy/lax.js">
    <div class="bottombutton">
      Get lax.js
    </div>
  </a>


  <a href="https://github.com/alexfoxy/lax.js" class="github-corner" aria-label="View source on GitHub"><svg width="80"
      height="80" viewBox="0 0 250 250"
      style="fill:#fff; color:#151513; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor" class="octo-body"></path>
    </svg></a>
</template>

<script >
    import { onMounted } from 'vue'
    import lax from 'lax.js'
    export default {
        setup() {
            onMounted(() => {
                lax.init()

      lax.addDriver(
        "scrollY",
        function () {
          return document.documentElement.scrollTop;
        },
        { frameStep: 1 }
      );

      lax.addElements(".letter-x", {
        scrollY: {
          translateY: [[-400, 0, 100], [300, 0, 100]],
          scale: [[100, "screenHeight"], [0.25, 10]],
          opacity: [[0, "screenHeight/2", "screenHeight"], [1, 1, 0]],
        }
      });

      lax.addElements(".letter-l", {
        scrollY: {
          translateY: [[-400, 0], [100, 0]],
          translateX: [[0, "screenHeight"], [0, 400]],
          opacity: [[0, "screenHeight/2"], [1, 0]]
        }
      });

      lax.addElements(".letter-a", {
        scrollY: {
          translateY: [[-400, 0], [200, 0]],
          translateX: [[0, "screenHeight"], [0, -400]],
          opacity: [[0, "screenHeight/2"], [1, 0]]
        }
      });

      lax.addElements(".scrolldown", {
        scrollY: {
          "letter-spacing": [
            [0, "screenHeight"],
            [0, 150],
            {
              cssUnit: "px"
            }
          ],
          opacity: [["screenHeight*0.25", "screenHeight*0.75"], [1, 0]],
          translateX: [[0, "screenHeight"], [0, 80]],
        }
      });

      lax.addElements(".oooh", {
        scrollY: {
          translateX: [["elInY", "elOutY"], [0, "screenWidth-200"]]
        }
      });

      lax.addElements(".aaah", {
        scrollY: {
          translateX: [["elInY", "elOutY"], [0, "-screenWidth-200"]]
        }
      });

      lax.addElements(".wheee", {
        scrollY: {
          translateX: [["elInY", "elOutY"], [-400, "screenWidth+100"]],
          skewX: [["elInY", "elOutY"], [40, -40]],
        }
      });

      lax.addElements(".bubble", {
        scrollY: {
          translateY: [
            ["screenHeight/4", "screenHeight * 3"],
            ["Math.random()*screenHeight", "Math.random()*screenHeight*3"]
          ],
          opacity: [
            ["screenHeight/4", "screenHeight/2"],
            [0, 1]
          ],
          scale: [[0], ["(Math.random()*0.8)+0.2"]],
          translateX: [[0], ["index*(screenWidth/25)-50"]],
          transform: [
            [0, 4000],
            [0, "(Math.random() + 0.8) * 1000"],
            {
              cssFn: function (val) {
                return `rotateX(${val % 360}deg)`
              }
            }
          ],
          rotate: [
            [0, 4000],
            [0, "(Math.random() - 0.5) * 1000"],
          ],
        }
      });

      lax.addElements('#pinkZag', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [0, -300]
          ],
        }
      })

      lax.addElements('#tealZag', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [0, 200]
          ],
        }
      })

      lax.addElements('#purpleZag', {
        scrollY: {
          translateY: [
            ["elInY", "elOutY"],
            [0, 700]
          ],
        }
      })

      lax.addElements(".downarrows img", {
        scrollY: {
          translateY: [
            [0, 200],
            [0, 200]
          ],
          opacity: [
            [0, "screenHeight"],
            [1, 0]
          ]
        }
      })

      lax.addElements(".bottombutton", {
        scrollY: {
          "background-position": [
            ["elInY", "elOutY"],
            [0, 400],
            {
              cssFn: function (val) {
                return `${val}px 0`
              }
            }
          ],
          scale: [
            ["elInY", "elCenterY"],
            [3, 1],
          ]
        },

      })
            })
            return {
                
            }
        },
    }
</script>
 <style >
    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out
    }

    @keyframes octocat-wave {

      0%,
      100% {
        transform: rotate(0)
      }

      20%,
      60% {
        transform: rotate(-25deg)
      }

      40%,
      80% {
        transform: rotate(10deg)
      }
    }

    @media (max-width:500px) {
      .github-corner:hover .octo-arm {
        animation: none
      }

      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out
      }
    }
    html {
      overflow-x: hidden;
      width: 100%;
    }

    body {
      padding: 0;
      overflow-x: hidden;
      width: 100%;
      background-color: #242224;
      margin: 0;
      height: 480vh;
      color: white;
      font-family: "Montserrat", sans-serif;
      position: relative;
    }

    .bottombutton {
      width: 250px;
      height: 70px;
      background-size: 160px;
      color: white;
      font-weight: 800;
      text-align: center;
      line-height: 70px;
      font-size: 30px;
      text-decoration: none;
      position: absolute;
      top: 425vh;
      border-radius: 20px;
      left: 50vw;
      margin-left: -125px;
      z-index: 100;
      pointer-events: all;
      cursor: pointer;
    }

    .bottombg {
      background-color: #8d77ed;
      width: 100vw;
      height: 100vh;
      top: 380vh;
      z-index: 50;
      position: absolute;
    }

    .letter-l {
      margin-top: 100px;
      width: 200px;
      left: 50vw;
      margin-left: -75px;
      position: fixed;
      left: 50vw;
      margin-left: -75px;
    }

    .letter-a {
      margin-top: 158px;
      position: fixed;
      left: 50vw;
      margin-left: -77px;
      width: 150px;
    }

    .letter-x {
      margin-top: 85px;
      position: fixed;
      left: 50vw;
      margin-left: -300px;
      transform: scale(0.25);
      transform-origin: 50% 50%;
      width: 600px;
      height: 600px;
    }

    .letter-x img {
      width: 600px;
      position: absolute;
    }

    .scrolldown {
      bottom: 90px;
      height: 40px;
      position: fixed;
      width: 300vw;
      left: -100vw;
      font-size: 40px;
      text-align: center;
    }

    .oooh {
      font-size: 150px;
      position: absolute;
      left: 0;
      top: 140vh;
    }

    .aaah {
      font-size: 150px;
      position: absolute;
      right: 0;
      top: 170vh;
    }

    .wheee {
      top: 230vh;
      position: absolute;
      left: 0;
      height: 50px;
      font-size: 100px;
    }

    .downarrows {
      bottom: 60px;
      position: fixed;
      left: 50vw;
      width: 70px;
      margin-left: -35px;
      height: 26px;
    }

    .downarrows img {
      width: 70px;
      position: absolute;
    }

    .bubbles {
      top: -100vh;
      position: fixed;
      -webkit-transform: translate3d(0, 0, 0);
      z-index: 5;
    }

    .bubble {
      width: 140px;
      height: 140px;
      opacity: 1;
      position: absolute;
    }

    .bubble.red {
      background: #a94fe4;
    }

    .bubble.blue {
      background: #68e4f1;
    }

    .bubble.yellow {
      background: #ffe773;
    }

    .zags {
      margin-top: 250vh;
      z-index: 100;
      position: relative;
      overflow: hidden;
      height: 150vh;
    }

    .zag {
      width: 100vw;
      height: 150vh;
      position: absolute;
    }

    #pinkZag {

      background-size: 200px;
      background-repeat: repeat-x;
      background-position-y: bottom;
    }

    #tealZag {

      background-size: 200px;
      background-repeat: repeat-x;
      background-position-y: bottom;
    }

    #purpleZag {

      background-size: 200px;
      background-repeat: repeat-x;
      background-position-y: bottom;
    }

    .bottom {
      margin-top: 400vh;
    }
  </style>