<template>
    
    <!--use v-hover here-->
    <v-card
        color="card"
    >
        <v-card-title>
            <span 
                class="report-title"
                @click="()=>console.log('hello')"
            >
            {{this.reportObj.title}}
            </span>
             
        </v-card-title> 
        <v-card-text>{{this.reportObj.description}}</v-card-text>
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
.report-title:hover {
    text-decoration: underline;
}


</style>
