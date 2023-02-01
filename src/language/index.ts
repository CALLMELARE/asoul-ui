import { createI18n } from 'vue-i18n'
import en from './en'
import ch from './ch'

// vue-i18n设置
const i18n = createI18n({
    locale: 'ch',    // 语言标识
    fallbackLocale: 'ch',//没有英文的时候默认中文语言
    legacy: false,// 启用Composition API
    globalInjection: true,
    silentFallbackWarn: true,//抑制警告
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        en, ch
    }
})

export default i18n