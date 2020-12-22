<template>
  <div class="g-popover" ref="popover" @click="xxx">
    <div ref="contentWrap" class="content-wrap" v-if="visible" @click.stop>
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrap"> <slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: "popover",
    data() {
      return {
        visible: false,
      }
    },
    mounted() {},
    methods: {
      positionContent() {
        document.body.appendChild(this.$refs.contentWrap)
        let {
          width,
          height,
          top,
          left,
        } = this.$refs.triggerWrap.getBoundingClientRect()
        this.$refs.contentWrap.style.left = `${left + window.scrollX}px`
        this.$refs.contentWrap.style.top = `${top + window.scrollY}px`
      },

      onClickDocumnet(e) {
        if ( this.$refs.popover && this.$refs.popover.contains(e.target)  ) {
            return
        }
        this.close()
      },
      open() {
        this.visible = true
        setTimeout(() => {
            this.positionContent();
            document.addEventListener("click", this.onClickDocumnet)
        })
      },
      close() {
        this.visible = false
        document.removeEventListener("click", this.onClickDocumnet)
      },
      xxx(event) {
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
  .g-popover {
    display: inline-block;
    position: relative;
    .content-wrap {
      position: absolute;
      bottom: 100%;
      left: 0;
      border: 1px solid rgba(0, 0, 0, 0.2);
    }
  }

  .content-wrap {
    position: absolute;
    padding: 10px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    transform: translateY(-100%);
    transition: all 200ms;
  }
</style>
