<template>
    <v-content>
    <search-bar></search-bar>
    <report-list></report-list>
    </v-content>
</template>

<script lang='js'>
import ReportList from './ReportList.vue';
import SearchBar from '../SearchBar/SearchBar.vue';


export default {
    name: "ReportsMain",

    methods: {
    },
    components: {
        ReportList,
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
