<template>
    <textarea
        ref="editorEl"
    />
</template>

<script>
import * as CodeMirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'codemirror/keymap/vim';
import 'codemirror/mode/python/python';


export default {
    name: "Editor",
    props: [
        'initial_content'
    ],

    data() {
        return {
            content: this.initial_content
        }
    },
    mounted(){
        console.log(this.initial_content);
        this.editor = CodeMirror.fromTextArea(this.$refs.editorEl, {
            lineNumbers: true,
            theme: 'darcula',
            keyMap: 'vim',
            mode: 'python'
        });
        this.editor.setValue(this.content);
        this.editor.on('change', this.updateCode);
    },
    methods: {
        updateCode(){
            this.content = this.editor.getValue();
        },
        logCode(){
            console.log(this.content);
        },
        getValue(){
            return this.content;
        }
    },

}


</script>

<style scoped>

</style>