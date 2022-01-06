export const mixinDemo = {
    data() {
        return {
            message: '我是mixin 中的message',
        }
    },
    methods: {
        testMixin() {
            console.log('我是mixin中的方法')
        }
    }
}