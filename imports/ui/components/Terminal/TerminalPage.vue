<template>
    <div>
        <div class="codeEditor">
            <textarea
                ref='input'
                id="editor"
            />
        </div>
        <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
        </div>
    </div>
</template>



<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/keymap/vim';
import 'codemirror/mode/python/python';



export default {
    props: ['code'],
    data() {
        return {
            inputEditor: null,
            currentCode: this.code,
        };
    },
    mounted(){
        console.log('refs:', this.$refs.input);
        this.inputEditor = CodeMirror.fromTextArea(this.$refs.input, {
            lineNumbers: true,
            theme: 'darcula',
            keyMap: 'vim',
            mode: 'python',
        });
        this.inputEditor.setValue(this.code);
    },
    methods: {
        send_report_code(){
            var title = "Bla";
            var description = "Bla report";
            Meteor.call(
                'add_report',
                this.inputEditor.getValue(),
                title,
                description,
                (error, result) => {
                    console.log("send_report_error:", error)
                    console.log("send_report_result:", result)
                    this.inputEditor.setValue("");
            })
        }
    }
}
</script>