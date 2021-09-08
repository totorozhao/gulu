<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div class="label" v-for="(item1,index) in items" @click="onClickLabel(item1)" :key="index">
        <span class="name">{{ item1.name }}</span>
        <template>
           <icon class="next" v-if="rightItems" name="arrow-right"></icon>
        </template>
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-item :level="level+1" :items="rightItems" :height="height"
         :selected="selected" @update:selected="onUpdatedSelected"></cascader-item>
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
      }
    },
    data() {
      return {
        leftSelected: null,
      }
    },
    computed: {
      rightItems() {
        console.log(currentSelected, 'ccc')
        let currentSelected = this.selected[this.level]
        console.log(currentSelected, 'ccc')
        if (currentSelected && currentSelected.children) {
          return currentSelected.children
        } else {
          return null
        }
      },
    },
    methods: {
      onClickLabel(item){
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        copy.splice(this.level+1) // 清除层级后面的值
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
        background: #ddd;
      }
      > .name {
        margin-right: 1em;
        user-select: none;
      }
      .icon {
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
