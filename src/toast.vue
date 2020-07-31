<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'toast'
}
</script>
<style lang="scss" scoped>
 .toast{
     position: fixed;
     left: 50%;
     transform: translateX(-50%);
     font-size: 14px;
     line-height: 1.8;
     height: 40px;
     display: flex;
     align-items: center
 }
</style>


