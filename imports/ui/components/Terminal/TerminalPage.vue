<template>
    <div>

        <!-- @change="log_code" -->
        <div class="codeEditor">
            <textarea
                ref='input'
                id="editor"
            />
        </div>
        <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
            <button @click="log_code">Log Code</button>
        </div>

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

            inputEditor: null
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
        this.inputEditor.setValue(DefaultCode);
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
        },
        update_code(){
            this.content = this.editor.getValue();
        }
    }
}
</script>