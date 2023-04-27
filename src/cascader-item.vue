<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="(item,index) in items" @click="onClickLabel(item)" :key="index">
        <span class="name">{{ item.name }}</span>
        <span class="icons">
          <template v-if="item.name === loadingItem.name">
            <icon class="loading" name="loading"></icon>
          </template>
          <template v-else>
            <icon class="next" v-if="rightArrowVisible(item)" name="arrow-right"></icon>
          </template>
      </div>
    </div>
    <div class="right" v-if="rightItems">
      <cascader-item
        :level="level+1"
        :items="rightItems"
        :height="height"
        :load-data="loadData"
        :loading-item="loadingItem"
        :selected="selected" 
        @update:selected="onUpdatedSelected">
      </cascader-item>
    </div>
  </div>
</template>
<script>
import Icon from './icon.vue'
  const cascaderItem = {
    name: "cascaderItem",
    components: {
      cascaderItem:cascaderItem,
      Icon
    },
    props: {  
      items: {
        type: Array,
      },
      height: {
        type: String,
      },
      selected:{
        type:Array,
        default: () => []
      },
      level: {
        type: Number,
        default: 0
      },
      loadData: {
        type: Function
      },
      loadingItem: {
        type: Object,
        default: () => ({})
      },
    },
    data() {
      return {
        leftSelected: null,
      }
    },
    computed: {
      rightItems() {
        if (this.selected[this.level]) {
          let selected = this.items.filter((item) => item.name === this.selected[this.level].name)
          if (selected && selected[0].children && selected[0].children.length > 0) {
            console.log(selected[0].children, 'rightItems')
            return selected[0].children
          }
        }
      },
      
    },
    methods: {
      rightArrowVisible (item) {
        return this.loadData ? !item.isLeaf : item.children
      },
      onClickLabel(item){
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level + 1) // 清除层级后面的值
        this.$emit('update:selected',copy)
      },
      onUpdatedSelected(newSelected){
        this.$emit('update:selected',newSelected)
      }
    },
  }

  export default cascaderItem
</script>
<style lang="scss" scoped>
  .cascaderItem {
    height: 100px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    .left {
        height: 100%;
        padding: .3em 0;
        overflow: auto;
    }
    .right{
      height: 100%;
      border-left: 1px solid #ccc;
    }
    .label{
      padding: .3em 1em;
      display: flex;
      align-items: center;
      white-space: nowrap;
      &:hover {
        background: #eee;
      }
      > .name {
        margin-right: 1em;
        user-select: none;
      }
      .icons {
        margin-left: auto;
        .next {
          transform: scale(0.5);
        }
        .loading {
          animation: spin 2s infinite linear;
        }
      }
    }
  }
</style>
