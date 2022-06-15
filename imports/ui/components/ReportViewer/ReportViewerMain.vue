<template>
    <div>
        <!-- <h1>{{reportTitle}}</h1> -->
        <iframe 
            v-if="html !== null"
            :srcdoc="html"
            width="100%"
            height="1000px"
        >
        </iframe>

    </div>
</template>

<script lang="js">


export default {
    data() {
        return {
            html:null,
            reportTitle: ''
        }
    },

    created() {
        this.reportId = this.$route.params.reportId;
        Meteor.call('run_report', this.reportId, (error, result) => {
            console.log("Ran report");
            console.log(result);
            this.html = result.html;
        });
    }
}
</script>