<template>
  <div class="toast">
    <slot v-if="!enableHtml"></slot>
    <div v-else v-html="$slots.default[0]"></div>
    <span v-if="closeButton.text" @click="closeButton">{{closeButton.text}}</span>
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
                type: Object,
                default () {
                    return {
                        text: '关闭',
                        callback: (toast) => {
                            toast.close()
                        }
                    }
                }
            },
            //enableHtml 支持html标签
            enableHtml: {
                type: Boolean,
                default: false
            },
        },
        created() {
            console.log(this.closeButton, 'dd')
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close()
                }, this.autoCloseDelay * 1000)
            }
        },
        methods: {
            close() {
                this.$el.remove() //
                this.$destroy()
            },
            closeButton() {

            }
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
        transform: translate(-50%);
        white-space: nowrap;
    }
</style>