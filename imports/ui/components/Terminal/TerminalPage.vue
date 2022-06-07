<template>
    <div>
        <div class="codeEditor">
            <textarea v-model="content" id="editor"></textarea>
        </div>
        <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
        </div>
        <iframe class="report-container" v-if="this.fetchedHtml!==null" :srcdoc="this.html">
        </iframe>
    </div>
</template>



<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/keymap/vim';
import 'codemirror/mode/python/python';

const DefaultCode = 'def isEven(num):\n\treturn num % 2 == 0';

export default {
    data() {
        return {
            fetchedHtml: null,
            content: DefaultCode,
        };
    },
    mounted(){
        CodeMirror.fromTextArea(document.getElementById('editor'), {
            lineNumbers: true,
            theme: 'darcula',
            keyMap: 'vim',
            mode: 'python',
        })
    },
    methods: {
        send_report_code(){
            console.log(this.content);
            var title = "Bla";
            var description = "Bla report";
            Meteor.call(
                'add_report',
                this.content, 
                title,
                description,
                (error, result) => {
                    console.log("send_report_error:", error)
                    console.log("send_report_result:", result)
                    this.content = DefaultCode;
                    this.fetchedHtml = result.html;
            })
        }
    }
}
</script>