<template>
  <div class="g-popover" ref="popover" @click="onClick">
    <div ref="contentWrap" class="content-wrap" :class="{[`position-${position}`]:true}" v-if="visible" @click.stop>
      <slot name="content"></slot>
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
        }
    },
    data() {
      return {
        visible: false,
      }
    },
    mounted() {},
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
        // if(this.position === 'top'){
        //   contentWrap.style.left = `${left + window.scrollX}px`
        //   contentWrap.style.top = `${top + window.scrollY}px`
        // }else if(this.position === 'bottom'){
        //    contentWrap.style.left = `${left + window.scrollX}px`
        //    contentWrap.style.top = `${top + height + window.scrollY}px`
        // } else if(this.position === 'left'){
        //    contentWrap.style.left = `${left + window.scrollX}px`
        //    contentWrap.style.top = `${top + window.scrollY + (height-height2)/2}px`
        // }else if(this.position === 'right'){
        //    contentWrap.style.left = `${left + window.scrollX + width}px`
        //    contentWrap.style.top = `${top + window.scrollY + (height-height2)/2}px`
        // }
        
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
        top:100%;
        left: 10px;
      }
      &::after{
        border-top-color:white;
        top:calc(100% - 1px);
        left: 10px;
      }
    }

     &.position-bottom{
      margin-top: 10px;
      &::before{
        border-bottom-color:$border-color;
        bottom:100%;
        left: 10px;
      }
      &::after{
        border-bottom-color:white;
        bottom:calc(100% - 1px);
        left: 10px;
      }
    }

    &.position-left{
      transform: translateX(-100%);
      margin-left: -10px;
      &::before{
        border-left-color:$border-color;
        left: calc(100% + 1px);
        top:50%;
        transform: translateY(-50%);
      }
      &::after{
        border-left-color:white;
        left: 100%;
        top:50%;
        transform: translateY(-50%);
      }
    }

     &.position-right{
      margin-left: 10px;
      &::before{
        border-right-color:$border-color;
        right: calc(100% + 1px);
        top:50%;
        transform: translateY(-50%);
      }
      &::after{
        border-right-color:white;
        right: 100%;
        top:50%;
        transform: translateY(-50%);
      }
    }
    
   
  }
</style>
