<template>
    <div>
        <ReportListItem
            v-for="report in reports"
            :key="report._id"
            :reportId="report._id"
        />
    </div>
</template>

<script>
import Reports from '../../api/collections/Reports';
import ReportListItem from './ReportListItem.vue'

export default {
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