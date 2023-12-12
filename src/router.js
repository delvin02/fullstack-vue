import { createRouter, createWebHistory } from 'vue-router';
import Home from "./components/Home.vue";
import InputForm from './components/InputForm.vue';
import Dunkirk from './components/Dunkirk.vue';
import NotFound from './components/NotFound.vue';

const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
      path: '/form',
      component: InputForm,
      name: 'Input Form'
    },
    {
        path: '/dunkirk',
        component: Dunkirk,
        name: 'Dunkirk'
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound
    }
];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;