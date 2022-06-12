<template>

    <v-container
        class="report-folder-container"
        fluid
    >
        <v-row>
            <v-col 
                v-for="rep in reports"
                cols="2"
            >
                <ReportListItem 
                    :reportid="rep._id"
                />
            </v-col>
        </v-row>

    </v-container>
 
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
    background-color: var(--v-black-base);
    border-radius: 10px;
}
</style>
