<template>
  <div class="g-popover" @click="xxx">
    <div class="content-wrap" v-if="visable">
      <slot name="content"></slot>
    </div>

    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "popover",
  data() {
    return {
      visable: false,
    };
  },
  methods: {
    xxx() {
      this.visable = !this.visable;
    },
  },
};
</script>
<style lang="scss" scoped>
.g-popover {
  display: inline-block;
  position: relative;
  .content-wrap {
    position: absolute;
    bottom: 100%;
    left: 0;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}
</style>
