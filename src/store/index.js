import { createStore } from 'vuex';
import formModule from './modules/form';


export default createStore({
  modules: {
    formModule: formModule
  },
});
