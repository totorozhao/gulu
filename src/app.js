import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'


import Tabs from './tabs'
import TabsItem from './tabs-item'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

import plugin from './plugin.js'



Vue.component('g-button', Button)
Vue.component('g-icon', icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.use(plugin)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-pane', TabsPane)
new Vue({
    el: '#app',
    data: {
        loading1: false,
        inputmessage: 'hello'
    },
    methods: {
        showToast(position) {
            this.$toast('<p>保留所有权利。</p>', {
                text: '知道了',
                position: position,
                enableHtml: true,
                closeButton: {
                    text: '关闭',
                    callback: () => {
                        console.log('我知道了')
                    }
                }
            })
        },
        updated() {},
    }
})