import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'

import plugin from './plugin.js'



Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.use(plugin)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        inputmessage: 'hello'
    },
    methods: {
        showToast() {
            this.$toast('<p>保留所有权利。</p>', {
                text: '知道了',
                position: 'middle',
                enableHtml: true,
                closeButton: {
                    text: '关闭',
                    callback: () => {
                        console.log('我知道了')
                    }
                }
            })
        }
    }
})