<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]">
        <slot/>
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
    }
    
}
</script>
<style lang="scss" scoped>
.col{
    height: 50px;
    background: #edf4fb;
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
      border: 1px solid rgb(153, 138, 138);
}

</style>



