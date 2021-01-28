<template>
  <div class="tabs-head">
      <div class="line" ref="line"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabsHead",
  inject: ["eventBus"],
  mounted() {
    this.eventBus.$on("updata:selectedTab",(name,vm)=>{
        let {width,height,top,left} = vm.$el.getBoundingClientRect()
        this.$refs.line.style.width = `${width}px`
        this.$refs.line.style.left = `${left}px`
    });
  },
};
</script>
<style scoped lang="scss">
$tabs-height: 40px;
$blue:#157cdc;
.tabs-head {
  display: flex;
  height: $tabs-height;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid #ccc;
  position: relative;
  > .line{
      border-bottom: 1px solid $blue;
      position: absolute;
      bottom: 0;
      transition: all 300ms;
  }
}
</style>
