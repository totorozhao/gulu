<template>
    <div class="cascader">
        <div class="trigger" @click="PopoverVisiable = !PopoverVisiable" >
            <slot></slot>
        </div>
        <div class="popover-wraper" v-if="PopoverVisiable">
            <cascader-item :items="source" :height='popoverHeight' :selected="selected" @update:selected="selected = $event"></cascader-item>
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
        },
        selected:{
            type:Array,
            default: () => []
        },
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
        box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.08) 0px 6px 16px 0px, rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    }
}
</style>