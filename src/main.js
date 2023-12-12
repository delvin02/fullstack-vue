import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import store from './store';
import router from './router';
import mitt from 'mitt';
const emitter = mitt();

window.addEventListener('popstate', () => {
    emitter.emit('navigate');
  });
  
const app = createApp(App);
app.config.globalProperties.emitter = emitter

app.use(store)
  .use(router)
  .mount('#app');
