<template>
    <v-content>
    <search-bar></search-bar>
    <report-list-new></report-list-new>
    </v-content>
</template>

<script lang='js'>
import EditorPage from '../Editor/EditorPage.vue';
import ReportListNew from './ReportListNew.vue';
import SearchBar from '../SearchBar/SearchBar.vue';

import {Session} from 'meteor/session';
// import {page} from '../../statics/session';

// const pageMap = {
//     [page.opts.reports]: ReportListNew,
//     [page.opts.editor]: EditorPage
// };

export default {
    name: "ReportsMain",
    inject: {
        theme: {
            default: {},
        },
    },
    data() {
        return {
            colorTheme: this.theme,
        };
    },
    created(){
        console.log(pageMap[page.opts.reports]);
        console.log(Session.get(page.var));
    },
    meteor: {
        sessionPage(){
            var pagevar = Session.get(page.var);
            return pageMap[pagevar];
        }
    },
    methods: {
    },
    components: {
        EditorPage,
        ReportListNew,
        SearchBar,
    }
}
</script>

<style scoped>
#app {
  background-color: var(--v-background-base);
}

html {
    height: 100%
}
.bodyDiv {
    display: flex;
    flex-direction: column;
    height: 100%;
}
</style>
