<template>
  <div class="toast" ref="wrapper" :class="toastClass">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <div class="line" ref="line"></div>
    <span class="close" v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
  </div>
</template>
<script>
    export default {
        name: 'toast',
        props: {
            // 自动关闭
            autoClose: {
                type: Boolean,
                default: false
            },
            // 关闭时间
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object, //  对象的话 注意引用，用方法包裹返回对象
                default () {
                    return {
                        text: '关闭',
                        callback: undefined
                    }
                }
            },
            //enableHtml 支持html标签
            enableHtml: {
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: "top",
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) > -1
                }
            }

        },
        computed: {
            toastClass() {
                return {
                    [`position-${this.position}`]: true
                }
            },
        },
        created() {},
        mounted() {
            this.execAutoClose()
            this.updateStyle()
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            updateStyle() {
                this.$nextTick(() => {
                    console.log(this.$refs.wrapper)
                    this.$refs.line.style.height = `${this.$refs.wrapper.getBoundingClientRect().height}px`
                })
            },
            close() {
                this.$el.remove() //移除
                this.$destroy() //销毁
            },
            onClickClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this) // this === toast实例
                }
            },
        }
    }
</script>
<style lang="scss" scoped>
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast {
        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-min-height;
        display: flex;
        align-items: center;
        color: white;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
        padding: 0 16px;
        position: fixed;
        left: 50%;
        white-space: nowrap;
        .message {
            padding: 4px 0;
        }
        .close {
            flex-shrink: 0;
            padding-left: 16px;
        }
        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 8px;
        }
        &.position-top {
            top: 0;
            transform: translate(-50%);
        }
        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }
        &.position-bottom {
            bottom: 0;
            transform: translate(-50%);
        }
    }
</style>