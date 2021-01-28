<template>
  <div class="box">
    <g-button>vue.js造轮子</g-button>
    <g-button icon="down" icon-position="left" :loading="loading1" @click="loading1 = !loading1">下载</g-button>
    <g-button icon="arrow-left" icon-position="left">左侧</g-button>
    <g-button icon="arrow-right" icon-position="right">右侧</g-button>

    <g-button-group>
      <g-button icon="arrow-left" icon-position="left">上一页</g-button>
      <g-button>1</g-button>
      <g-button icon="arrow-right" icon-position="right">下一页</g-button>
    </g-button-group>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GButton from "../../../src/button.vue"
  import GButtonGroup from "../../../src/buttonGroup.vue"
  export default {
    components: { GButton,GButtonGroup },
     data() {
      return {
        content: `
       <g-button>vue.js造轮子</g-button>
<g-button icon="down" icon-position="left" :loading="loading1" @click="loading1 = !loading1">下载</g-button>
<g-button icon="arrow-left" icon-position="left">左侧</g-button>
<g-button icon="arrow-right" icon-position="right">右侧</g-button>

<g-button-group>
    <g-button icon="arrow-left" icon-position="left">上一页</g-button>
    <g-button>1</g-button>
    <g-button icon="arrow-right" icon-position="right">下一页</g-button>
</g-button-group>`
          .replace(/^ {8}/gm, "")
          .trim(),
      }
    },
  }
</script>
