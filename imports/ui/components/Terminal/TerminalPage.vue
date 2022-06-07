<template>
  <codemirror
    v-model="code"
    placeholder="Code goes here..."
    :style="{ height: '400px' }"
    :autofocus="true"
    :indent-with-tab="true"
    :tabSize="2"
    :extensions="extensions"
    @ready="log('ready', $event)"
    @change="log('change', $event)"
    @focus="log('focus', $event)"
    @blur="log('blur', $event)"
  />
</template>



<script>
import {Codemirror} from 'vue-codemirror'
import {javascript} from '@codemirror/lang-javascript'
import { oneDark} from '@codemirror/theme-one-dark'

export default {
    components: {
        Codemirror
    },
    setup() {
        const code = ref(`console.log('Hello World!')`)
        const extensions = [javascript(), oneDark]
        return {
            code,
            extensions,
            log: console.log
        }
    },
}
</script>