<template>
    <div class="report-display">
        <h3> {{rep.title}} </h3>
        <h4> {{rep.description}}</h4>
    </div>
</template>

<script>
import Reports from '../../api/collections/Reports';


export default {

    props: ['reportId'],

    meteor: {
        // $subscribe: {
        //     'Reports': []
        // },

        rep() {
            // return Reports.findById(this.reportId);
            return Reports.findOne({
                _id: this.reportId
            });
        }
    }

}
</script>

<style>
.report-display {
    background-color: beige;
    border-style: groove;
}
</style>
