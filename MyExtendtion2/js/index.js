document.getElementById('back').addEventListener('click', () => {
    // chrome.tabs.query({active: true}, function (tabs)  {
    //     console.log(tabs)
    // })
    chrome.notifications.create(
        '',
        {
            type: 'basic',
            title: '来自yh的通知',
            message: '已自动赋值admin密码：keystone.......',
            iconUrl: "../image/logo-透明.png"
        }
    );
    console.log(chrome.tabs.query({active: true}))
})
