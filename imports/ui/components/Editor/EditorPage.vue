<template>
    <div>
        <editor 
            ref="editor" 
            :initial_content="init_code"
        />
        <div class="buttonRow">
            <button @click="send_report_code">Submit Code</button>
            <button @click="log_code">Log Code</button>
        </div>

    </div>
</template>



<script>
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/keymap/vim';
import 'codemirror/mode/python/python';

import Editor from './Editor.vue';

const DefaultCode = 'def isEven(num):\n\treturn num % 2 == 0';


export default {
    components: {
        Editor
    },
    data() {
        return {
            editor: null
        };
    },
    created(){
        this.init_code = DefaultCode;
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
        }
    }
}
</script>