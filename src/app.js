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

import db from './DB.js'
function ajax (parentId = 0) {
  return new Promise((success, fail) => {
    setTimeout(() => {
      let result = db.filter((item) => item.parent_id == parentId)
      result.forEach(node => {
        if (db.filter(item => item.parent_id === node.id).length > 0) {
          node.isLeaf = false
        }else{
          node.isLeaf = true
        }
      })
      success(result)
    }, 1000)
  })
}
new Vue({
  el: '#app',
  data()  {
    return {
      loading1: false,
      inputmessage: 'hello',
      selectedTab: 'hero',
      selectedCollapseName: ['1', '2'],
      source: [],
      // source: db,
      height: '200px',
      selected: []
    }
  },
  created(){
    ajax(0).then(result => {
      console.log(result)
      this.source = result
    })
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
    loadData ({id}, updateSource) {
      ajax(id).then(result => {
        updateSource(result) // 回调:把别人传给我的函数调用一下
      })
    },
  }
})