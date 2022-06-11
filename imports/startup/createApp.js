/* === Vue === */
import Vue from 'vue'

/* === Plugins === */
// import './plugins';
import {vuetify} from './plugins'

/* === Main App === */
import App from '../ui/App.vue';


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
