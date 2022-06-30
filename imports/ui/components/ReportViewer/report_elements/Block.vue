<template>
    <div>
        <component
            :is="comp()"
            :inp="data()"
        ></component>
    </div>
</template>


<script lang="js">
import TableBlock from './TableBlock.vue';

export default {
    props: [
        'block_element'
    ],
    created(){
        console.log(this.block_element);
    },
    methods:{
        comp(){
            return TableBlock;
        },
        data(){
            return this.block_element;
        }
    },
    components: {
        TableBlock
    }
}
</script>