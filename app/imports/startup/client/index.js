import Vue from 'vue'
import VueMeteorTracker from 'vue-meteor-tracker'

import '../../ui/plugins'

import App from '../../ui/App.vue'

Vue.use(VueMeteorTracker);

Meteor.startup(() => {
  new Vue({
    el: '#app',
    ...App,
  })
})
