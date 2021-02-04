<template>
  <div class="cascaderItem" :style="{height:height}">
    <!-- <cascader-item 
         v-if="sourceItem.childern"
         v-for="(item, i) in sourceItem.childern" :key="i" :sourceItem="item" ></cascader-item> -->
    <div class="left">
      <div v-for="item1 in items" @click="leftSelected = item1">
        {{ item1.name }}
      </div>
    </div>
    <div class="right" v-if="rightItems">
        <cascader-item :items="rightItems" :height="height"></cascader-item>
      <!-- <div v-for="item2 in rightItems">{{ item2.name }}</div> -->
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
  }

  export default cascaderItem
</script>
<style lang="scss" scoped>
  .cascaderItem {
    height: 100px;
    display: flex;
    .left {
      border: 1px solid green;
    }
    .right{
        border: 1px solid blue;
    }
  }
</style>
