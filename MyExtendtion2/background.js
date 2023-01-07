chrome.runtime.onMessage.addListener(data => {
    if(data.type === 'notification') {
        chrome.notifications.create(
            '',
            {
                type: 'basic',
                title: '来自yh的通知',
                message: '已自动赋值admin密码：keystone.......',
                iconUrl: "../image/logo-透明.png"
            }
        );
    }
})