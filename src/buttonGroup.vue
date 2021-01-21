<template>
    <div class="g-button-group">
        <slot />
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
         > .g-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child {
                border-top-left-radius: var($border-radius);
                border-bottom-left-radius: var($border-radius);
            }
            &:last-child {
                border-top-right-radius: var($border-radius);
                border-bottom-right-radius: var($border-radius);
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>



