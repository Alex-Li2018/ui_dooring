/* eslint-disable import/no-extraneous-dependencies */
import Vue from 'vue';
import './global';
import ElementUI from 'element-ui';
import formCreate from '@form-create/element-ui';
import VueQuillEditor from 'vue-quill-editor';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import App from './App.vue';
// import './sentry';

Vue.use(formCreate);
Vue.use(ElementUI);
Vue.use(VueQuillEditor);

Vue.config.productionTip = false;
Vue.use(router);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
