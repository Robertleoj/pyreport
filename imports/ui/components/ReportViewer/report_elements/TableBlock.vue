<template>
    <div>
        <div v-html="src()">
        </div>
    </div>
</template>


<script lang="js">

export default {
    inject: ['attachments'],
    props: ['inp'],
    created(){
        console.log(this.inp);
        console.log(this.attachments);
    },

    methods:{
        src(){
            let src = this.inp.getAttribute('src');
            console.log(src);
            let splitted = src.split('//');
            let idx = parseInt(splitted[splitted.length - 1]);
            console.log(idx);
            let data = atob(this.attachments[idx].file);
            return data;
        }
    }
}

</script>