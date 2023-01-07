console.log("this script has been injected in this page!");
var num = 0
// document.addEventListener('paste', (e) => {
//     e.preventDefault()  
//     e.clipboardData.setData('text/plain', 'keystone_sugon-paste')
//     console.log(e);
// })
// document.addEventListener('copy', (e) => {
//     e.preventDefault()  
//     e.clipboardData.setData('text/plain', 'keystone_sugon-copy')
//     console.log(e);
// })

//  复制内容到剪切板
 clipboardWrite = (value) => {
    window.navigator.clipboard.writeText(value)
    .then(() => {
        chrome.runtime.sendMessage('', {type: 'notification'})
        console.log('Text copied to clipboard');
    })
    .catch(err => {
        console.error('Could not copy text: ', err);
    });
}
clipboardWrite('keystone_sugon')
