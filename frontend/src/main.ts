import { createApp } from 'vue'
import App from './App.vue'
import router from '../backend/node_modules/router'
import store from './store'


const app = createApp(App);
app.use(router); // Utiliser Vue Router
app.mount('#app'); // Monter l'application