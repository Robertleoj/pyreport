<template>
    <!-- Border around --> 
   
    <!-- <v-alert 
        class="ma-0 pa-0"
        outlined color='primary'
    > -->
    <v-card
        outlined
        rounded='lg'
        class="report-folder-container"
    >
        <v-container
            fluid
        >
            <v-row 
                v-for="rep in reports"
                cols="12"
            >
                <v-col>
                    <ReportListItem 
                        :reportid="rep._id"
                    />
                    <!-- <h1>{{report._id}}</h1> -->
                </v-col>
            </v-row>
        </v-container>
    </v-card>
 
    <!-- </v-alert> -->
</template>

<script lang="js">
import Reports from '../../../../api/collections/Reports';
import ReportListItem from './ReportListItem.vue';

export default {
    name:"ReportFileContainer",

    meteor : {
        $subscribe: {
            'reports': []
        },

        reports(){
            return Reports.find({});
        }
    },
    components: {
        ReportListItem
    }

}
</script>

<style scoped>
.report-folder-container {
    border: 1px solid var(--v-primary-base);
    background-color: var(--v-black-base)
}
</style>
