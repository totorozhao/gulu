<template>
    <div class="cascaderItem">
        <cascader-item 
         v-if="sourceItem.childern"
         v-for="(item, i) in sourceItem.childern" :key="i" :sourceItem="item" ></cascader-item>
    </div>
</template>
<script>
const cascaderItem = {
    name:'cascaderItem',
    components:{
        cascaderItem:cascaderItem
    },
    props:{
        sourceItem:{
            type:Object
        }
    }
}

export default  cascaderItem
</script>
<style lang="scss" scoped>

</style>