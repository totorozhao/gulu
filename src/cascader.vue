<template>
    <div class="cascader">
        <div class="trigger" @click="PopoverVisiable = !PopoverVisiable" >
            <slot></slot>
        </div>
        <div class="popover-wraper" v-if="PopoverVisiable">
            <cascader-item :items="source" :height='popoverHeight'></cascader-item>
        </div>
    </div>
</template>
<script>
import cascaderItem from './cascader-item'
export default {
    name:'cascader',
    components:{
        cascaderItem:cascaderItem
    },
    props:{
        source:{
            type:Array
        },
        popoverHeight:{
            type:String
        }
    },
    data(){
        return{
            PopoverVisiable:false,
            level1Selected:null,
        }
    },
    computed:{
        level1Items(){
            if(this.level1Selected){
                return this.level1Selected.children
            }else{
                return []
            }
        },
    }


}
</script>
<style lang="scss" scoped>

.cascader{
    position: relative;
    .trigger{
        height: 32px;
        border: 1px solid red;
    }
    .popover-wraper{
        /* border: 1px solid red; */
        position: absolute;
        left: 0;
        background: #fff;
    }
}
</style>