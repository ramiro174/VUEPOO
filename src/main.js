import './assets/main.css'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'light'
    },
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(pinia)
app.mount('#app')
