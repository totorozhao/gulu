<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid rgb(153, 138, 138);height:inherit">
            <slot/>
        </div>
    </div>
</template>
<script>
export default {
    props:{
     span: {
        type: [Number, String]
      },
      offset: {
        type: [Number, String]
      },
    //   gutter:[String,Number]
    },
    computed:{
        colClass(){
            let {span,offset} = this
            return [
                span && `col-${span}`,
                offset && `offset-${offset}`]
        },
        colStyle(){
            return {
                paddingLeft:this.gutter/2+'px',
                paddingRight:this.gutter/2+'px'
            }
        }
    },
    data(){
        return{
         gutter:0 
        }
    }
    
}
</script>
<style lang="scss" scoped>
.col{
    height: 50px;
    width: 50%;
    $class-prefix: col-;
     @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
      }
    }
     $class-prefix: offset-;
    @for $n from 1 through 24 {
      &.#{$class-prefix}#{$n} {
        margin-left: ($n / 24) * 100%;
      }
    }
      
}

</style>



