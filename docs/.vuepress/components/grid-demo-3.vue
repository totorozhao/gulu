<template>
   <div class="box" style="padding-top:18px">
    <h2>设置 空隙</h2>
    <g-row :gutter="20">
      <g-col span="6">
        <div class="grid-demo bg-light">Col-6</div>
      </g-col>
      <g-col span="6">
        <div class="grid-demo bg-dark">Col-6</div>
      </g-col>
      <g-col span="6">
        <div class="grid-demo bg-light">Col-6</div>
      </g-col>
      <g-col span="6">
        <div class="grid-demo bg-dark">Col-6</div>
      </g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col span="6" :gutter="20">
        <div class="grid-demo bg-dark">Col-2</div>
      </g-col>
      <g-col span="4" :gutter="20">
        <div class="grid-demo bg-dark">Col-4</div>
      </g-col>
      <g-col span="14" :gutter="20">
        <div class="grid-demo bg-dark">Col-18</div>
      </g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col span="4">
        <div class="grid-demo bg-dark">Col-4</div>
      </g-col>
      <g-col span="8" offset="2">
        <div class="grid-demo bg-dark">Col-8</div>
      </g-col>
      <g-col span="8" offset="2">
        <div class="grid-demo bg-dark">Col-8</div>
      </g-col>
    </g-row>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import GRow from "../../../src/row.vue"
  import GCol from "../../../src/col.vue"
  export default {
    components: {
      GRow,
      GCol,
    },
     data() {
      return {
        content: `
        <g-row :gutter="20">
      <g-col span="6">
        <div class="grid-demo bg-light">Col-6</div>
      </g-col>
      <g-col span="6">
        <div class="grid-demo bg-dark">Col-6</div>
      </g-col>
      <g-col span="6">
        <div class="grid-demo bg-light">Col-6</div>
      </g-col>
      <g-col span="6">
        <div class="grid-demo bg-dark">Col-6</div>
      </g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col span="6" :gutter="20">
        <div class="grid-demo bg-dark">Col-2</div>
      </g-col>
      <g-col span="4" :gutter="20">
        <div class="grid-demo bg-dark">Col-4</div>
      </g-col>
      <g-col span="14" :gutter="20">
        <div class="grid-demo bg-dark">Col-18</div>
      </g-col>
    </g-row>
    <g-row :gutter="20">
      <g-col span="4">
        <div class="grid-demo bg-dark">Col-4</div>
      </g-col>
      <g-col span="8" offset="2">
        <div class="grid-demo bg-dark">Col-8</div>
      </g-col>
      <g-col span="8" offset="2">
        <div class="grid-demo bg-dark">Col-8</div>
      </g-col>`
          .replace(/^ {8}/gm, "")
          .trim(),
      }
    },
  }
</script>
<style>
  .grid-demo {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.85);
  }

  .row {
    margin-top: 20px;
  }

  .bg-dark {
    background: rgb(24, 144, 255);
  }

  .bg-light {
    background: rgb(64, 169, 255);
  }
</style>
