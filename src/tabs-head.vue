<template>
    <div class="tabs-head">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'TabsHead',
        inject:['eventBus'],
        created(){
        }
    }
</script>
<style scoped lang="scss">
$tabs-height:40px;
.tabs-head{
    display: flex;
    height: $tabs-height;
    justify-content: flex-start;
    align-items: center;
    border:1px solid #ccc;
}
</style>