<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabsItem',
        inject:['eventBus'],
        props:{
            name:{
                type:String||Number,
                require:true
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        data(){
            return{
                actived:false
            }

        },
        computed:{
            classes(){
                return {
                    actived:this.actived,
                    disabled:this.disabled
                }
            }
        },
        created(){
            this.eventBus.$on('updata:selectedTab',(name)=>{
                this.actived = name == this.name
            })
        },
        methods:{
            onClick(){
                console.log(this.disabled)
                if(!this.disabled){
                   this.eventBus.$emit('updata:selectedTab',this.name,this)
                }
            }
        }
    }
</script>
<style scoped lang="scss">
$blue:#157cdc;
$disabled-text-color:grey;
.tabs-item{
    padding: 1em;
    cursor: pointer;
    &.actived{
        color: $blue;
    }
    &.disabled{
        color: $disabled-text-color;
        cursor: not-allowed;
    }
}

</style>