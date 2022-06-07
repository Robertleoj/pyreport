<template>
    <div class="report-display">
        <h3> {{rep.title}} </h3>
        <h4> {{rep.description}}</h4>
        <button @click="toggle_show_report">Run Report</button>
        <iframe class="report-container" v-if="this.html!==null" :srcdoc="this.html">
        </iframe>
    </div>
</template>

<script>
import Reports from '../../../api/collections/Reports';


export default {

    props: ['reportId'],

    data(){
        return {
            shown: false,
            html: null
        }
    },

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
        toggle_show_report(){
            if (!this.shown){
                this.get_report_html();
            } else {
                this.html=null;
            }

            this.shown ^= true;
        },

        get_report_html(){
            console.log(this.reportId);
            Meteor.call('run_report', this.rep.report_code, (error, result) => {
                this.html = result.html;
            });
        },
    }

}
</script>

<style>
.report-display {
    background-color: beige;
    border-style: groove;
}

.report-container {
    min-width: 70%;
    min-height: 400px;
}
</style>
