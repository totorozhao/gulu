<template>
   <div class="box" style="padding-top:18px">
      <g-tabs :selected.sync="selectedTab">
          <g-tabs-head>
              <g-tabs-item name="culture">文化</g-tabs-item>
              <g-tabs-item name="music" disabled>音乐</g-tabs-item>
              <g-tabs-item name="hero">英雄</g-tabs-item>
          </g-tabs-head>
          <g-tabs-body>
              <g-tabs-pane name="culture">文化内容</g-tabs-pane>
              <g-tabs-pane name="music">音乐内容</g-tabs-pane>
              <g-tabs-pane name="hero">英雄技能</g-tabs-pane>
          </g-tabs-body>
      </g-tabs>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GTabs from '../../../src/tabs/tabs'
  import GTabsHead from '../../../src/tabs/tabs-head'
  import GTabsBody from '../../../src/tabs/tabs-body'
  import GTabsPane from '../../../src/tabs/tabs-pane'
  import GTabsItem from '../../../src/tabs/tabs-item'
  export default {
    components: {GTabs,GTabsHead,GTabsBody,GTabsPane,GTabsItem},
    data() {
      return {
         content: `
          <g-tabs :selected.sync="selectedTab">
            <g-tabs-head>
                <g-tabs-item name="culture">文化</g-tabs-item>
                <g-tabs-item name="music" disabled>音乐</g-tabs-item>
                <g-tabs-item name="hero">英雄</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="culture">文化内容</g-tabs-pane>
                <g-tabs-pane name="music">音乐内容</g-tabs-pane>
                <g-tabs-pane name="hero">英雄技能</g-tabs-pane>
            </g-tabs-body>
          </g-tabs>`.replace(/^ {8}/gm, '').trim()
      }
    },
  }
</script>
