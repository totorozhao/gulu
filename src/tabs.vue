<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: 'Tabs',
        provide(){
            return {
                eventBus:this.eventBus
            }
        },
        data(){
            return {
               eventBus:new Vue()  
            }
        },
        created(){
        },
        methods:{
           
        }
    }
</script>
<style scoped lang="scss">

</style>