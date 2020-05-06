<template>
    <div class="row" :style="{marginRight:-gutter/2+'px',marginLeft:-gutter/2+'px'}" >
        <slot/>
    </div>
</template>
<script>
export default {
    name:'GuluRow',
    props:{
        gutter:[String,Number]
    },
    mounted(){
        this.$children.forEach(e =>{
            e.gutter=this.gutter
        })
    }
}
</script>
<style lang="scss" scoped>
.row{
    display: flex;
}
</style>