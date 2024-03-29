<template>
  <div class="g-popover" ref="popover">
    <div ref="contentWrap" class="content-wrap" :class="{[`position-${position}`]:true}" v-if="visible" @click.stop>
      <slot name="content" :close="close" frank="1"></slot>
    </div>
    <span ref="triggerWrap" style="display:inline-block;"> <slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: "popover",
    props:{
        position:{
            type:String,
            default:'top',
            validator(value){
                return ['top','bottom','left','right'].indexOf(value) >-1
            }
        },
        trigger:{
          type:String,
          default:'click',
          validator(value){
            return ['click','hover'].indexOf(value) > -1
          }
        }
    },
    data() {
      return {
        visible: false,
      }
    },
    mounted() {
       const {popover} = this.$refs
       if(this.trigger == 'click'){
         popover.addEventListener('click',this.onClick)
       }else{
         popover.addEventListener('mouseenter',this.open)
         popover.addEventListener('mouseleave',this.close)
       }
    },
    destroyed(){
      const {popover} = this.$refs
       if(this.trigger == 'click'){
         popover.removeEventListener('click',this.onClick)
       }else{
         popover.removeEventListener('mouseenter',this.open)
         popover.removeEventListener('mouseleave',this.close)
       }
    },
    //fqa : overflow:hidden 会造成定位隐藏 所以加上window.scrollX,window.scrollY
    //fqa ： 重复关闭，一次关闭，事件触发两次  分开处理：document只管外面 prover只管里面
    //fqa : 忘了取消监听document  在close中处理
    methods: {
      positionContent() {
        const {contentWrap,triggerWrap} = this.$refs
        document.body.appendChild(contentWrap)
        const { width, height, top, left } = triggerWrap.getBoundingClientRect()
        const {width:width2 ,height:height2} = contentWrap.getBoundingClientRect()
        const positions = {
          top:{ left:left + window.scrollX,  top:top + window.scrollY  },
          bottom:{ left:left + window.scrollX, top: top + height + window.scrollY},
          left:{ left:left + window.scrollX, top: top + window.scrollY + (height-height2)/2},
          right:{ left:left + window.scrollX + width, top: top + window.scrollY + (height-height2)/2}
        }
        contentWrap.style.left = `${positions[this.position].left}px`
        contentWrap.style.top = `${positions[this.position].top}px`
      },

      onClickDocument(e) {
        if ( this.$refs.popover && this.$refs.popover.contains(e.target)  ) {
            return
        }
        this.close()
      },
      open() {
        this.visible = true
        setTimeout(() => {
            this.positionContent();
            document.addEventListener("click", this.onClickDocument)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener("click", this.onClickDocument)
      },
      onClick(event) {
        if (this.$refs.triggerWrap.contains(event.target)){
            if(this.visible == true) {
               this.close();
            } else {
               this.open()
            }
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
$border-color:#333;
$border-radius: 4px;
  .g-popover {
    display: inline-block;
    position: relative;
  }
  .content-wrap {
    position: absolute;
    padding: .5em 1em;
    border: 1px solid $border-color;
    filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
    background: white;
    /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
    border-radius: $border-radius;
    transition: all 200ms;
    max-width: 20em;
    word-break: break-all;
    z-index: 9999;
    &::before, &::after{
        content:'';
        display: block;
        border:10px solid transparent;
        width: 0;
        height: 0;
        position: absolute;
    }
    &.position-top{
      margin-top: -10px;
      transform: translateY(-100%);
      &::before{
        border-top-color:$border-color;
        border-bottom: none;
        top:100%;
        left: 10px;
      }
      &::after{
        border-top-color:white;
        border-bottom: none;
        top:calc(100% - 1px);
        left: 10px;
      }
    }

     &.position-bottom{
      margin-top: 10px;
      &::before{
        border-bottom-color:$border-color;
        border-top: none;
        bottom:100%;
        left: 10px;
      }
      &::after{
        border-bottom-color:white;
        border-top: none;
        bottom:calc(100% - 1px);
        left: 10px;
      }
    }

    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before{
        border-left-color:$border-color;
        border-right: none;
        left: calc(100% + 1px);
        top:50%;
        transform: translateY(-50%);
      }
      &::after{
        border-left-color:white;
        border-right: none;
        left: 100%;
        top:50%;
        transform: translateY(-50%);
      }
    }

     &.position-right{
      margin-left: 10px;
      &::before{
        border-right-color:$border-color;
        border-left: none;
        right: calc(100% + 1px);
        top:50%;
        transform: translateY(-50%);
      }
      &::after{
        border-right-color:white;
        border-left: none;
        right: 100%;
        top:50%;
        transform: translateY(-50%);
      }
    }
    
   
  }
</style>
