
<script>
import { h } from 'vue'
export default {
    render() {
        return h('h2', {class: 'title'}, '利用render函数实现的界面展示') 
    }
}
</script>
<style scoped>
.title {
    color: aquamarine;
}
</style>