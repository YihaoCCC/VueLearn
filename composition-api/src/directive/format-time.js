import dayjs from "dayjs"

export default function(app) {
    app.directive('time-format', {
        mounted(el, binging) {
            console.log(el.textContent)
            let timescle = parseInt(binging.value)
            if (timescle.length === 10) {
                timescle = timescle * 1000
            }
            el.textContent = dayjs(timescle).format('YYYY-MM-DD HH:mm:ss')
        },
        updated(el,binging) {
            console.log(el.textContent)
            let timescle = parseInt(binging.value)
            if (timescle.length === 10) {
                timescle = timescle * 1000
            }
            el.textContent = dayjs(timescle).format('YYYY-MM-DD HH:mm:ss')
        }
    })
}