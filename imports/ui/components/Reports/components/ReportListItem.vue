<template>
    <v-card class="report">
        <v-card-title>{{this.reportObj.title}} </v-card-title> 
        <v-card-text>{{this.reportObj.description}}</v-card-text>
            <v-card-actions>
                <v-btn
                    v-if="this.html===null"
                    class="run-report-button"
                    @click.prevent="toggle_show_report"
                >
                Run Report
                </v-btn>
            </v-card-actions>

            <!-- <iframe class="report-container" v-if="this.html!==null" :srcdoc="this.html">
            </iframe>  -->
    </v-card>
</template>

<script lang="js">
import Reports from '../../../../api/collections/Reports';

export default {
    name: "ReportListItem",
    props: ['reportid'],

    data(){
        return {
            shown: false,
            html: null,
        };
    },

    mounted() {
        console.log(`reportid: ${this.reportid}`)
    },

    meteor: {
        $subscribe: {
            'reports': []
        },

        reportObj() {
            // return Reports.findById(this.reportId);
            return Reports.findOne({
                _id: this.reportid
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

        get_report_html() {
            setTimeout(() => {
            console.log(this.reportid);
            Meteor.call('run_report', this.reportObj.report_code, (error, result) => {
                console.log("DONE");
                this.html = result.html;
            });
            }, 1000);
        },
    }

}
</script>

<style scoped>


</style>
