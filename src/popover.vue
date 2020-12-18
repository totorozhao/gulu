<template>
  <div class="g-popover" @click.stop="xxx">
    <div class="content-wrap" v-if="visible">
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
      visible: false,
    };
  },
  methods: {
    xxx() {
      this.visible = !this.visible;
       if (this.visible === true) {
            setTimeout(() => {
                let eventHandler = () => {
                    this.visible = false;
                    console.log('document 隐藏 popover')
                    document.removeEventListener("click", eventHandler);
                };
                document.addEventListener("click", eventHandler);
            });
      }else{
           console.log('vm 隐藏 popover')
      }

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
