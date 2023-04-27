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
        :loadData="loadData"
        :loading-item="loadingItem"
        @update:selected="onUpdateSelected"
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
    loadData: {
      type: Function
    }
  },
  data() {
    return {
      PopoverVisiable: false,
      loadingItem: {},
    };
  },
  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/")
    },
  },
  methods: {
    onClickDocument(e) {
      console.log('click')
    },
    open() {
      this.PopoverVisiable = true
      this.$nextTick(()=> {
        document.addEventListener("click", this.onClickDocument)
      })
    },
    close() {
      this.PopoverVisiable = false
    },
    toggle () {
      if (this.PopoverVisiable === true) {
        this.close()
      } else {
        this.open()
      }
    },
    onUpdateSelected (newSelected) {
      this.$emit('update:selected', newSelected)
      let lastItem = newSelected[newSelected.length - 1]
      let simplest = (children, id) => {
        return children.filter(item => item.id === id)[0]
      }
      let complex = (children, id) => {
        let noChildren = []
        let hasChildren = []
        children.forEach(item => {
          if (item.children) {
            hasChildren.push(item)
          } else {
            noChildren.push(item)
          }
        })
        let found = simplest(noChildren, id)
        if (found) {
          return found
        } else {
          found = simplest(hasChildren, id)
          if (found) { return found }
          else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id)
              if (found) {
                return found
              }
            }
            return undefined
          }
        }
        }
      let updateSource = (result) => {
        this.loadingItem = {}
        let copy = JSON.parse(JSON.stringify(this.source))
        let toUpdate = complex(copy, lastItem.id)
        toUpdate.children = result
        console.log(result, 'result')
        this.$emit('update:source', copy)
      }
      if (!lastItem.isLeaf && this.loadData) {
        this.loadData(lastItem, updateSource) // 回调:把别人传给我的函数调用一下
        // 调回调的时候传一个函数,这个函数理论应该被调用
        this.loadingItem = lastItem
      }
    }
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
    z-index: 1;
    margin-top: 8px;
    left: 0;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px,
      rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
  }
}
</style>
