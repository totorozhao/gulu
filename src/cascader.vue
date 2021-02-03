<template>
    <div class="cascader">
        <div class="trigger" @click="PopoverVisiable = !PopoverVisiable" >
            <slot></slot>
        </div>
        <div class="popover" v-if="PopoverVisiable">
            <div class="level1">
                <div v-for="item1 in source" @click="level1Selected = item1" >{{item1.name}}</div>
            </div>
             <div class="level2">
                <div v-for="item2 in level1Items">{{item2.name}}</div>
            </div>
            <!-- <div v-for="item in source">
                {{item.name}}
                <div v-for="e in item.children">{{e.name}}</div>
             <cascader-item :sourceItem='item' ></cascader-item>
            </div> -->
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
    .trigger{
        height: 32px;
        border: 1px solid red;
    }
    .popover{
        height: 100px;
        border: 1px solid red;
        display: flex;
        .level1{
            border: 1px solid green;
        }
        .level2{
            border: 1px solid pink;
        }
    }
}
</style>