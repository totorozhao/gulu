<template>
  <div class="box" style="padding-top:18px">
      <g-button @click="showToast">点我弹框</g-button>
      <g-button @click="showToast('top')">点我弹框</g-button>
      <g-button @click="showToast('bottom')">点我弹框</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GToast from '../../../src/toast'
  import GButton from '../../../src/button'
  import plugin from '../../../src/plugin.js'
   import Vue from 'vue'
  Vue.use(plugin)
  export default {
    components: {GButton},
    data() {
      return {
         content: `
          <g-button @click="showToast">点我弹框</g-button>
          <g-button @click="showToast('top')">点我弹框</g-button>
          <g-button @click="showToast('bottom')">点我弹框</g-button>`.replace(/^ {8}/gm, '').trim()
      }
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
  }
</script>
