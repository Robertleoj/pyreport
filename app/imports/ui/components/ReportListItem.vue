<template>
    <div class="report-display">
        <h3 @click="get_report_html"> {{rep.title}} </h3>
        <h4> {{rep.description}}</h4>
    </div>
</template>

<script>
import Reports from '../../api/collections/Reports';


export default {

    props: ['reportId'],

    meteor: {
        // $subscribe: {
        //     'Reports': []
        // },

        rep() {
            // return Reports.findById(this.reportId);
            return Reports.findOne({
                _id: this.reportId
            });
        }
    },

    methods: {
        get_report_html(){
            Meteor.call('get_report', this.reportId.toString(), (error, result) => {
                console.log(error);
                console.log(result);
            });
        }
    }

}
</script>

<style>
.report-display {
    background-color: beige;
    border-style: groove;
}
</style>
