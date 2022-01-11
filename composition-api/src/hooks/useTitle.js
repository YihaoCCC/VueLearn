import { ref, watch } from 'vue'

export function useTitle() {
    const title = ref('默认标题')

    watch(title,(newValue) => {
        document.title = newValue
    }, {
        immediate:true
    })
    return {
        title
    }
}