<template>
   <div class="box" style="padding-top:18px">
     <h2>将触发方式改为 hover</h2>
    <g-popover position="top"  trigger="hover">
      <template slot="content" slot-scope="{close}" >他出身于望族<g-button @click="close" >关闭</g-button ></template>
      <g-button>点我 孙策</g-button>
    </g-popover>

    <g-popover position="bottom"  trigger="hover">
      <div slot="content">会一直、一直守护弟弟的。</div>
      <g-button>点我 百里守约</g-button>
    </g-popover>

    <g-popover position="left"  trigger="hover">
      <div slot="content">她似乎已再度抓住契机，去逆转不可能的过往。</div>
      <g-button>点我 大乔</g-button>
    </g-popover>

    <g-popover position="right"  trigger="hover">
      <div slot="content">你，会跳舞吗</div>
      <g-button>点我 貂蝉</g-button>
    </g-popover>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GButton from "../../../src/button"
  import GPopover from "../../../src/popover"
  export default {
    components: { GPopover, GButton },
    data() {
      return {
        content: `
         <g-popover position="top"  trigger="hover">
    <template slot="content" slot-scope="{close}" >他出身于望族<g-button @click="close" >关闭</g-button ></template>
    <g-button>点我 孙策</g-button>
  </g-popover>

  <g-popover position="bottom"  trigger="hover">
    <div slot="content">会一直、一直守护弟弟的。</div>
    <g-button>点我 百里守约</g-button>
  </g-popover>

  <g-popover position="left"  trigger="hover">
    <div slot="content">她似乎已再度抓住契机，去逆转不可能的过往。</div>
    <g-button>点我 大乔</g-button>
  </g-popover>

  <g-popover position="right"  trigger="hover">
    <div slot="content">你，会跳舞吗</div>
    <g-button>点我 貂蝉</g-button>
  </g-popover>`
          .replace(/^ {8}/gm, "")
          .trim(),
      }
    },
  }
</script>
