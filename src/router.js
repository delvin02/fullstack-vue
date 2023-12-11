import { createRouter, createWebHistory } from 'vue-router';
import InputForm from './components/InputForm.vue';
import Dunkirk from './components/Dunkirk.vue';

const routes = [
    {
      path: '/',
      component: InputForm,
      name: 'Input Form'
    },
    {
        path: '/dunkirk',
        component: Dunkirk,
        name: 'Dunkirk', 

    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;