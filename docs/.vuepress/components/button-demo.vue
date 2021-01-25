<template>
     <div class="box">
            <g-button>vue.js造轮子</g-button>
            <g-button icon="down" icon-position="left" :loading="loading1" @click="loading1 = !loading1">下载</g-button>
            <g-button icon="arrow-left" icon-position="left">左侧</g-button>
            <g-button icon="arrow-right" icon-position="right">右侧</g-button>

            <g-button-group>
                <g-button icon="arrow-left" icon-position="left">上一页</g-button>
                <g-button>1</g-button>
                <g-button icon="arrow-right" icon-position="right">下一页</g-button>
            </g-button-group>
        </div>
</template>
<script>

 import Button from '../../../src/button.vue'
export default {
    components:{
        gButton:Button
    }
}
</script>