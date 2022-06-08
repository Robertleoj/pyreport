<template>
    <div class="reportList" :style='{backgroundColor: theme.darkBlue}'>
        <ReportListItem
            v-for="report in reports"
            :key="report._id.str"
            :reportId="report._id"
        />
    </div>
</template>

<script>
import Reports from '../../../api/collections/Reports';
import ReportListItem from './ReportListItem.vue'

export default {
    inject: {
        theme: {
            default: {},
        },
    },
    data(){
        return {}
    },

    components: {
        ReportListItem,
    },

    meteor: {
        $subscribe: {
            'reports': [],
        },
        reports() {
            console.log("getting reports");
            console.log(Reports.find({}).fetch());
            return Reports.find({});
        }
    },

}

</script>

<style scoped>
    .reportList {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-content: flex-start;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
    }

</style>