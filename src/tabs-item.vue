<template>
    <div class="tabs-item" @click="xxx" :class="classes">
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
                    actived:this.actived
                }
            }
        },
        created(){
            this.eventBus.$on('updata:selectedTab',(name)=>{
                this.actived = name == this.name
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('updata:selectedTab',this.name,this)
            }
        }
    }
</script>
<style scoped lang="scss">
.tabs-item{
    padding: 1em;
    cursor: pointer;
    &.actived{
        color: red;
    }
}

</style>