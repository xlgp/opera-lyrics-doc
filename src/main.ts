import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia'
import clipboardDirective from './directives/clipboard/index'


createApp(App).use(router).use(createPinia())
    .directive(clipboardDirective.name, clipboardDirective.directive)
    .mount('#app')
