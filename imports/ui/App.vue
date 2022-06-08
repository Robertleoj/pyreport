<template>
    <theme-provider>
        <component :is="sessionPage" ></component>
    </theme-provider>
</template>

<script>
import ReportList from './components/Reports/ReportList.vue';
import EditorPage from './components/Editor/EditorPage.vue';
import ThemeProvider from './components/Providers/ThemeProvider.vue';
import {Session} from 'meteor/session';
import {page} from '../statics/session';

const pageMap = {
    [page.opts.reports]: ReportList,
    [page.opts.editor]: EditorPage
};

export default {
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
        ThemeProvider
    },
}
</script>

<style>
body {
    font-family: sans-serif;
    padding: 10px;
    height: 100%;
    background-color: #30343F;
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
