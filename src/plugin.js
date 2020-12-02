import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message, options) => {
            // const div = document.createElement('div')
            // div.textContent = options
            // document.body.append(div)
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: options
            })
            toast.$slots.default = [message]
            toast.$mount() //mount 之后生命周期的钩子才会执行
            document.body.appendChild(toast.$el)
        }
    }
}