import Toast from './toast'
let currentToast
export default {
    install(Vue) {
        Vue.prototype.$toast = (message, options) => {
            // const div = document.createElement('div')
            // div.textContent = options
            // document.body.append(div)
            if (currentToast) { currentToast.close() }
            currentToast = createToast({ Vue, message, options })
        }
    }
}

function createToast({ Vue, message, options }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: options
    })
    toast.$slots.default = [message]
    toast.$mount() //mount 之后生命周期的钩子才会执行
    document.body.appendChild(toast.$el)
    return toast
}