import { createStore } from 'vuex';
import formModule from './modules/form';
import loginModule from './modules/login';

export default createStore({
  modules: {
    formModule: formModule,
    loginModule: loginModule
  },
});
