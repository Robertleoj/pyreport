/* === Vue === */
import Vue from 'vue'

/* === Plugins === */
// import './plugins';
import {default as vuetify} from './vuetify';

/* === Main App === */
import App from '../../ui/components/App.vue';


console.log(vuetify)

function createApp() {

    return {
        app: new Vue({
            vuetify,
            render: h => h(App),
        }).$mount('#app')
    }
}

export default createApp;
