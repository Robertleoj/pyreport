<template>
    <!-- Border around --> 
                    <!-- :key="`Title${index}`" -->
                    <!-- :key="`Card${index}`" -->
    <v-container fluid>
        <!-- <v-row> -->
        <template v-for="(section, index) in sections">
            <v-col 
                cols="12" 
                :class="`pb-0`" 
            >
                <v-container class='pa-0 ma-0'>
                    <v-icon color='primary'>{{ section.icon }}</v-icon>
                    <strong>{{ section.title }}</strong>
                </v-container>

            </v-col> 
            <v-col 
                cols="12" 
            >           
                <report-file-container
                    :class="section.class"
                />
            </v-col>
        </template>  
        <!-- </v-row> -->
  </v-container>
</template>

<script lang="js">
import ReportFileContainer from './components/ReportFileContainer.vue';
import { mdiHeart, mdiFolder, mdiFile } from '@mdi/js';

export default {
    name:"ReportListNew",
    data() {
        return {
            sections: [
                {
                    class: "favs",
                    title: "Favorites",
                    icon: mdiHeart,
                    height: 100,
                },
                {
                    class: "folders",
                    title: "Folders",
                    icon: mdiFolder,
                    height: 100,
                },
                {
                    class: "reports",
                    title: "Reports",
                    icon: mdiFile,
                    height: 400,
                },
            ],
        };
    },
    components: {
        ReportFileContainer,
    },
}
</script>

<style scoped>
.favs {
    min-height: 100px;
}

.folders {
    min-height: 100px;
}

.reports {
    min-height: 400px;
}

</style>
