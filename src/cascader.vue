<template>
  <div class="cascader" ref="cascader">
    <div class="trigger" @click="PopoverVisiable = !PopoverVisiable">
      {{ result || "&nbsp;" }}
    </div>
    <div class="popover-wraper" v-if="PopoverVisiable">
      <cascader-item
        :items="source"
        :height="popoverHeight"
        :selected="selected"
        @update:selected="selected = $event"
      ></cascader-item>
    </div>
  </div>
</template>
<script>
import cascaderItem from "./cascader-item";
export default {
  name: "cascader",
  components: {
    cascaderItem: cascaderItem,
  },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String,
    },
    selected: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      PopoverVisiable: false,
      level1Selected: null,
    };
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/")
    },
  },
  methods: {
    // onClickDocument() {
    //   console.log('click')
    // },
    // open() {
    //   this.PopoverVisiable = true
    //   this.$nextTick(()=> {
    //     document.addEventListener("click", this.onClickDocument)
    //   })
    // },
    // close() {
    //   this.PopoverVisiable = false
    // },
    // toggle () {
    //   if (this.PopoverVisiable === true) {
    //     this.close()
    //   } else {
    //     this.open()
    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.cascader {
  position: relative;
  .trigger {
    height: 32px;
    line-height: 32px;
    display: inline-block;
    padding: 0 1em;
    min-width: 10em;
    border: 1px solid #cecece;
    white-space: nowrap;
  }
  .popover-wraper {
    position: absolute;
    margin-top: 8px;
    left: 0;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
  }
}
</style>
