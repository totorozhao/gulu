<template>
  <div class="box">
    <g-input v-model="inputmessage"></g-input>
    <p>{{ inputmessage }}</p>
    <g-input value="name" readonly></g-input>
    <g-input value="loadtion" disabled></g-input>
    <g-input value="hello" error="请输入中文"></g-input>

    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content}}</code></pre>
  </div>
</template>
<script>
  import gInput from "../../../src/input"
  export default {
    components: { gInput },
     data() {
      return {
        inputmessage: "hello",
        content: `
        <g-input v-model="inputmessage"></g-input>
<g-input value="name" readonly></g-input>
<g-input value="loadtion" disabled></g-input>
<g-input value="hello" error="请输入中文"></g-input>`
          .replace(/^ {8}/gm, "")
          .trim(),
      }
    },
  }
</script>
