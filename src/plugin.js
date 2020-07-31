import Toast from './toast.vue'
export default{
    install(Vue,options){
        Vue.prototype.$toast=function(message){
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            toast.$mount()  //必须放后面
            document.body.appendChild(toast.$el)
        }
    }
}