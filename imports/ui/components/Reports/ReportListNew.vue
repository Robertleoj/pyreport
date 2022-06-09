<template>
        <!-- Border around --> 
  <v-container>
    <v-row>
        <template v-for="(section, index) in sections">
        <v-col class="pb-0" cols="12" :key="`Title${index}`">
          <v-container class='pa-0 ma-0'>
            <v-icon color='primary'>{{ section.icon }}</v-icon>
            <strong>{{ section.title }}</strong>
          </v-container>
        </v-col> 
          <v-col cols="12" :key="`Card${index}`">           
            <report-file-container
            :height="section.height"
            />
          </v-col>
        </template>  
    </v-row>
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
                    title: "Favorites",
                    icon: mdiHeart,
                    height: 100,
                },
                {
                    title: "Folders",
                    icon: mdiFolder,
                    height: 100,
                },
                {
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
