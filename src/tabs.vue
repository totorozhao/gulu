<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'Tabs',
        props:{
            selected:{
                type:String||Number
            }
        },
        provide(){
            return {
                eventBus:this.eventBus,
            }
        },
        data(){
            return {
               eventBus:new Vue()  
            }
        },
        mounted(){
            this.eventBus.$emit('updata:selectedTab',this.selected)
        },
       
    }
</script>
<style scoped lang="scss">

</style>