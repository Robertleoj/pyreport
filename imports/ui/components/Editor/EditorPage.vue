<template>
    <div>
        <div
            class="report-header"
        >
            <div
            >
                <h2>{{getReportName()}}</h2>
                <v-btn
                    absolute
                    x-small
                    right
                >

                </v-btn>
            </div>
            <div
                class="d-flex-align-content-start flex-wrap px-1 my-4"
            >
                <v-btn
                    class="hdritem"
                >Save</v-btn>

            </div>
            
        </div>
       
        <editor 
            ref="editor" 
            :initial_content="initCode"
        />
        <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
            <button @click="log_code">Log Code</button>
        </div>
    </div>
</template>



<script lang="js">
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/keymap/vim';
import 'codemirror/mode/python/python';

import Editor from './Editor.vue';
import Reports from '../../../api/collections/Reports';

const DefaultCode = 'def isEven(num):\n\treturn num % 2 == 0';


export default {
    name: "EditorPage",
    components: {
        Editor
    },
    data() {
        return {
            reportTitle: '',
            editor: null,
            newReport: true,
            editingHeader: false
        };
    },
    created(){
        console.log(this.$route.params);
        var reportId = this.$route.params.reportId;
        console.log(`reportId: ${reportId}`);
        if(typeof reportId !== 'undefined'){
            // Editing existing report
            this.initCode = this.reportObj.report_code;
            this.newReport = false;
            this.reportTitle = this.reportObj.title;
        } else {
            // Creating new report
            this.initCode = DefaultCode;
        }
    },
    mounted(){
        console.log('refs:', this.$refs.editor);
    },
    methods: {
        send_report_code(){
            var title = "Bla";
            var description = "Bla report";
            console.log(this.$refs.editor.content);
        },
        update_code(){
            this.content = this.$refs.editor.getValue();
        },
        log_code(){
            console.log(this.$refs.editor.getValue());
        },
        getReportName(){
            if(!this.newReport){
                return this.reportTitle;
            } else {
                return '(New Report)';
            }
        }
        // getReport(){
        //     console.log(this.reportObj);
        //     return this.reportObj.report_code;
        // }
    },

    meteor: {
        $subscribe: {
            'reports': []
        },

        reportObj(){
            console.log(Reports.find().fetch());
            var report =  Reports.findOne(
                new Meteor.Collection.ObjectID(this.$route.params.reportId)
            );
            console.log(report);
            return report;
        }
    }
}
</script>