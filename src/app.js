import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Content from './content.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import plugin from './plugin'
Vue.component('g-button',Button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-sider',Sider)
Vue.component('g-footer',Footer)
Vue.use(plugin)


new Vue({
    el:'#app',   
    data:{
        loading1:false,
        inputmessage:'hello'
    },
    created(){

    },
    methods:{
        showToast(){
            this.$toast('我是message')
        }
    }
})
