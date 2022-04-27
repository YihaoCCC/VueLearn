let imgIndex = 0
    let imgList = []
    function getyiyan () {
        fetch('https://api.muxiaoguo.cn/api/yiyan?api_key=16d76a0353713b97')
        .then(response => response.json())
            .then(data => {
                document.getElementsByClassName('sentence1')[0].innerHTML = data.data.constant
                let actor = `--------${data.data.source}`
                document.getElementsByClassName('actor1')[0].innerHTML = actor
        });
    }
    function gettiangou() {
        fetch('https://api.muxiaoguo.cn/api/tiangourj?api_key=85c0abe3399eb029')
        .then(response => response.json())
            .then(res => {
                document.getElementsByClassName('sentence2')[0].innerHTML = res.data.comment

            });
    }
    function getcaihongpi() {
        fetch('https://api.muxiaoguo.cn/api/caihongpi?api_key=10cb537a3e3e19de')
            .then(response => response.json())
                .then(res => {
                    document.getElementsByClassName('sentence3')[0].innerHTML = res.data.comment
            });
    }
    function getxiaohua() {
        fetch('https://api.muxiaoguo.cn/api/xiaohua?api_key=542ef6dd9006f6b5')
                .then(response => response.json())
                    .then(res => {
                        document.getElementsByClassName('sentence4')[0].innerHTML = res.data.content
        })
    }
    getyiyan()
    gettiangou()
    getcaihongpi()
    getxiaohua()
    fetch('https://api.muxiaoguo.cn/api/bing?api_key=e4ce5899be0f50e3&id=today&pn=7')
                .then(response => response.json())
                    .then(res => {
                        imgList = res.data
            });
    document.getElementById('changeBackGroundImg').addEventListener('click' , () => {
        imgIndex ++
        if (imgIndex < imgList.length) {
            document.body.style.backgroundImage = 'url('+`${imgList[imgIndex].imgurl}`+')'
        } else {
            this.alert('没有更多图片了，明天再来吧')
        }
    })
    document.getElementById('yiyan').addEventListener('click', () => {
        getyiyan()
    })
    document.getElementsByClassName('change')[1].addEventListener('click', () => {
        gettiangou()
    })
    document.getElementsByClassName('change')[2].addEventListener('click', () => {
        getcaihongpi()
    })
    document.getElementsByClassName('change')[3].addEventListener('click', () => {
        getxiaohua()
    })