<template>
    <v-app id="app">
        
        <nav-bar></nav-bar>
        <div height="30px"></div>
        <v-main>
        <router-view></router-view>
        </v-main>
        <!-- <v-main> -->
        <!-- <search-bar></search-bar> -->
        <!-- <report-list-new></report-list-new> -->
        <!-- </v-main> -->
        <!-- <component :is="sessionPage" ></component> -->
    </v-app>
</template>

<script lang='js'>
import EditorPage from './Editor/EditorPage.vue';
import NavBar from './NavBar/NavBar.vue';
import ReportListNew from './Reports/ReportListNew.vue';
import SearchBar from './SearchBar/SearchBar.vue';

import ThemeProvider from './Providers/ThemeProvider.vue';
import {Session} from 'meteor/session';
import {page} from '../../statics/session';

const pageMap = {
    [page.opts.reports]: ReportListNew,
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
</style>
