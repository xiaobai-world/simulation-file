import { createApp } from 'vue'
import App from './App.vue'
import { mount } from '@xiaobai-world/api'
import { appRootPath } from './app-info'

function render(selector: string) {
 createApp(App).mount(selector)
}

mount((selector, appInfo) => {
 appRootPath.value = appInfo.appRootPath
 render(selector)
}).catch(() => {
 render('#app')
})
