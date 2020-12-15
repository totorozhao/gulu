<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabsBody',
         inject:['eventBus'],
        created(){
        }
    }
</script>
<style scoped lang="scss">

</style>