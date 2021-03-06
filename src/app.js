import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'


import Tabs from './tabs/tabs'
import TabsItem from './tabs/tabs-item'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsPane from './tabs/tabs-pane'

import Collapse from './collapse'
import CollapseItem from './collapse-item'


import Popover from './popover'

import Cascader from './cascader'

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
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)




Vue.component('g-popover', Popover)
import source from './DB.js'
new Vue({
    el: '#app',
    data: {
        loading1: false,
        inputmessage: 'hello',
        selectedTab: 'hero',
        selectedCollapseName: ['1', '2'],
        source: source,
        height: '200px'
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
    }
})