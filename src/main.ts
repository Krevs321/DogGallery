import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import pinia from './store'; // This imports the default export from store.ts
import "./style.css";

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
