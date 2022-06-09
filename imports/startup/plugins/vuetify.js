import Vue from 'vue';


// Use this import while developing
import Vuetify from 'vuetify/lib';

// IMPORTANT: Use this imports in production to reduce bundle size
// import Vuetify from "vuetify/lib/framework";
// import "vuetify/lib/util/colors";
// import "vuetify/lib/directives";

Vue.use(Vuetify);

const opts = {
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#ff79c6',
                secondary: '#bd93f9',
                accent: '#ffb86c',
                error: '#ff5555',
                info: '#8be9fd',
                success: '#50fa7b',
                warning: '#ffb86c',
                background: '#44475a',
                black: '#282a36',
            },
        },
        options: {
            customProperties: true,
        }
    },
    icons : {
        iconfont: 'mdiSvg',
    }
};
export default new Vuetify(opts);