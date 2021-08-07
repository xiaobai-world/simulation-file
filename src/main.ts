import { createApp } from 'vue'
import App from './App.vue'
import { mount } from '@xiaobai-world/api'

function render(selector: string) {
 createApp(App).mount(selector)
}

mount((selector, appInfo) => {
 console.log('appInfo', appInfo)
 render(selector)
}).catch(() => {
 render('#app')
})
