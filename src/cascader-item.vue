<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
      <div v-for="(item1,index) in items" @click="onClickLabel(item1)" :key="index">
        <label>{{ item1.name }}</label>
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-item :level="level+1" :items="rightItems" :height="height"
         :selected="selected" @update:selected="onUpdatedSelected"></cascader-item>
    </div>
  </div>
</template>
<script>
  const cascaderItem = {
    name: "cascaderItem",
    components: {
      cascaderItem:cascaderItem
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
        let currentSelected = this.selected[this.level]
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
        copy.splice(this.level+1)
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
    border: 1px solid red;
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
    }
  }
</style>
