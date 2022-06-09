<template>
  <v-app id="app">
    <nav-bar></nav-bar>
    <v-main>
      <search-bar></search-bar>
      <report-list-new></report-list-new>
    </v-main>
    <!-- <theme-provider>
      <component :is="sessionPage" ></component>
    </theme-provider> -->
  </v-app>
</template>

<script lang='js'>
import ReportList from './components/Reports/ReportList.vue';
import EditorPage from './components/Editor/EditorPage.vue';
import NavBar from './components/NavBar/NavBar.vue';
import ReportListNew from './components/Reports/ReportListNew.vue';
import SearchBar from './components/SearchBar/SearchBar.vue';

import ThemeProvider from './components/Providers/ThemeProvider.vue';
import {Session} from 'meteor/session';
import {page} from '../statics/session';

const pageMap = {
    [page.opts.reports]: ReportList,
    [page.opts.editor]: EditorPage
};

export default {
    name: "App",
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
        ReportList,
        EditorPage,
        ThemeProvider,
        NavBar,
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
