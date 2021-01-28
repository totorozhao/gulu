<template>
  <div class="tabs-pane" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabsPane",
    inject: ["eventBus"],
    props: {
      name: {
        type: String || Number,
        require: true,
      },
    },
    data() {
      return {
        actived: false,
      }
    },
    computed: {
      classes() {
        return {
          actived: this.actived,
        }
      },
    },
    created() {
      this.eventBus.$on("updata:selectedTab", (name) => {
        this.actived = name == this.name
      })
    },
  }
</script>
<style scoped lang="scss">
.tabs-pane{
    &.actived{
        color: red;
    }
}
</style>
