<template>
  <div class="collapse-item">
    <div class="title"  @click="toggle">
        {{title}}
    </div>
    <div class="content" v-if="open">
        <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "CollapseItem",
    props:{
        title:{
            type:String,
            required:true
        },
        name:{
          type:String,
          required:true
        }
    },
    inject:['eventBus'],
    data(){
        return{
            open:false
        }
    },
    mounted(){
      this.eventBus.$on('update:selected',(names)=>{
        if(names.indexOf(this.name)>-1){
          this.open = true
        }else{
          this.open = false
        }
      })
    },
    methods:{
      toggle(){
        if(this.open){
           this.eventBus && this.eventBus.$emit('update:removeSelected',this.name) 
        }else{
           this.eventBus && this.eventBus.$emit('update:addSelected',this.name) 
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  $grey: #cecece;
  $border-radius: 4px;
  .collapse-item {
    /* border: 1px solid $grey;
    border-radius: $border-radius; */
    .title{
        border: 1px solid $grey;
        margin-left: -1px;
        margin-top: -1px;
        margin-right: -1px;
        min-width: 32px;
        display: flex;
        align-items: center;
    }
    &:first-child{
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
    }
    > .content{
        padding: 8px;
    }
  }
</style>
