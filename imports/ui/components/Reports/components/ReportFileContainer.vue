<template>

    <div
        class="report-folder-container d-flex align-content-start flex-wrap px-1"
    >
        <ReportListItem 
            v-for="rep in reports"
            :reportid="rep._id"
        />
    </div>
 
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
