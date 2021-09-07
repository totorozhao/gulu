<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "Tabs",
  props: {
    selected: {
      type: String || Number,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },
  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "TabsHead") {
        vm.$children.forEach((childVm) => {
          if (childVm.$options.name === "TabsItem" && childVm.name === this.selected) {
            this.eventBus.$emit("updata:selectedTab", this.selected,childVm);
          }
        });
      }
    });
  },
};
</script>
<style scoped lang="scss"></style>
