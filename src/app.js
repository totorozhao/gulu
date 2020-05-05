import Vue from 'vue'
import Button from './button'
import icon from './icon'
import ButtonGroup from './buttonGroup'
import Input from './input.vue'
Vue.component('g-button',Button)
Vue.component('g-icon',icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
new Vue({
    el:'#app',
    data:{
        loading1:false,
        inputmessage:'hello'
    }
})
