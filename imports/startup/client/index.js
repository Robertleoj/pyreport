import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import '../../ui/plugins';
import './set_session';

import App from '../../ui/App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

Vue.use(VueMeteorTracker);

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
});
