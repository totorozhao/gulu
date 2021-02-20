<template>
  <div class="cascaderItem" :style="{height:height}">
    <div class="left">
        {{selected&&selected[level]}}
      <div v-for="(item1,index) in items" @click="onClickLabel(item1)" :key="index">
        {{ item1.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-item :level="level+1" :items="rightItems" :height="height" :selected="selected" @update:selected="onUpdatedSelected"></cascader-item>
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
        if (this.leftSelected && this.leftSelected.children) {
          return this.leftSelected.children
        } else {
          return null
        }
      },
    },
    methods: {
      onClickLabel(item){
        let copy = JSON.parse(JSON.stringify(this.selected))
        copy[this.level] = item
        this.$emit('update:selected',copy)
      },
      onUpdatedSelected(){

      }
    },
  }

  export default cascaderItem
</script>
<style lang="scss" scoped>
  .cascaderItem {
    height: 100px;
    display: flex;
    .left {
        padding: .3em 0;
        overflow: auto;
    }
    .right{
    }
  }
</style>
