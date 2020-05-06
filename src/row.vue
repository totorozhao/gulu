<template>
    <div class="row" :style="rowStyle" >
        <slot/>
    </div>
</template>
<script>
export default {
    name:'GuluRow',
    props:{
        gutter:[String,Number]
    },
     computed:{
        rowStyle(){
            let {gutter} = this;
            return {
                marginRight:-gutter/2+'px',
                marginLeft:-gutter/2+'px'
            }
        }
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