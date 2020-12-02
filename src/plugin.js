import Toast from './toast'
export default {
    install(Vue, options) {
        Vue.prototype.$toast = (message) => {
            // const div = document.createElement('div')
            // div.textContent = options
            // document.body.append(div)
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor({
                propsData: {
                    text: '知道了',
                    callback() {
                        console.log('我知道了')
                    }
                }
            })
            toast.$slots.default = [message]
            toast.$mount() //mount 之后生命周期的钩子才会执行
            document.body.appendChild(toast.$el)


        }
    }
}