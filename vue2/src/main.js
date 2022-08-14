import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false
Vue.use(ElementUI)
import VueElementUISkeleton from 'vue-elementui-skeleton';

Vue.use(VueElementUISkeleton, {
    directiveName: 'skeleton',
    rows: 1,
    radius: 3,
    animated:true,
    bg: '#e5e5e5'
});
new Vue({
  render: h => h(App),
}).$mount('#app')
