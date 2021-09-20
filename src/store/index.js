import Vue from 'vue';
import Vuex from 'vuex';
// eslint-disable-next-line import/no-cycle
import setting from './module/setting';
import editor from './module/editor';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        editor,
        setting
    }
});

export default store;
