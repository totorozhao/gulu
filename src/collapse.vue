<template>
  <div class="collapse">
    <slot />
  </div>
</template>
<script>
import Vue from "vue";
  export default {
    name: "Collapse",
    props:{
      selected:{
        type:Array
      },
      single:{
        type:Boolean,
        default:false
      }
    },
    provide() {
      return {
        eventBus: this.eventBus,
      };
    },
    data() {
      return {
        eventBus: new Vue(),
      };
    },
    mounted(){
      this.eventBus.$emit('update:selected',this.selected)  // 初始化子组件选中
      this.eventBus.$on('update:addSelected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        if(this.single){
          selectedCopy = [name]
        }else{
          selectedCopy.push(name)
        }
        this.eventBus.$emit('update:selected',selectedCopy) 
        this.$emit('update:selected',selectedCopy) 
      })
      this.eventBus.$on('update:removeSelected',(name)=>{
        let selectedCopy = JSON.parse(JSON.stringify(this.selected))
        let index = selectedCopy.indexOf(name)
        selectedCopy.splice(index,1)
        this.eventBus.$emit('update:selected',selectedCopy)
         this.$emit('update:selected',selectedCopy)  
      })
    }
  }
</script>
<style lang="scss" scoped>
  $grey: #cecece;
  $border-radius: 4px;
  .collapse {
    border: 1px solid $grey;
    border-radius: $border-radius;
  }
</style>
