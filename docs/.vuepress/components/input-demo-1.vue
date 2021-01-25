<template>
     <div class="box">
        <g-input v-model="inputmessage"></g-input>
        <p>{{inputmessage}}</p>
        <g-input value="name" readonly></g-input>
        <g-input value="loadtion" disabled></g-input>
        <g-input value="hello" error='请输入中文'></g-input>
    </div>
</template>
<script>

 import Input from '../../../src/input'
export default {
    components:{
        gInput:Input
    },
    data(){
        return{
            inputmessage: 'hello',
        }
    }
}
</script>