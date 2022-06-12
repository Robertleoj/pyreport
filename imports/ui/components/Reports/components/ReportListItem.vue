<template>
    
    <!--use v-hover here-->
    <v-card
        color="card"
        style="{width:getWidth()}"
        class="report-card my-2 mx-1"
    >

        <v-btn
            fab
            small
            absolute
            right
            to="/editor"
            :retain-focus-on-click="true"
            :icon="true"
            :dark="true"
            :style="{right: '0px', top:'0px'}"
            class="pr-0 mr-0"
        >
            <v-icon color="primary">{{icons.edit}}</v-icon>
        </v-btn>
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
import { mdiPencilCircle } from '@mdi/js';



export default {
    name: "ReportListItem",
    props: ['reportid'],

    data(){
        return {
            shown: false,
            html: null,
            icons: {
                edit: mdiPencilCircle
            }
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

.report-card {
    flex: 1 16%;
    max-width: 130px;
}


</style>
