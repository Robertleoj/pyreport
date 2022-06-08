<template>
    <div v-bind:class="{active: shown}" class="report-display" :style="{backgroundColor: theme.white, color:theme.black}">
        <div class="report-title-container">
            <div class="report-title-container-top">
                <h3 class="report-title"> {{rep.title}} </h3>
                <v-icon
                    v-if="this.html!==null"
                    @click.prevent="toggle_show_report"
                    scale="2"
                    name='angle-left'
                />
            </div>
            <p class="report-description"> {{rep.description}}</p>
        </div>
        <div><b-spinner v-if="this.html===null && this.shown"/></div>
        <b-button
            v-if="this.html===null"
            class="run-report-button"
            @click.prevent="toggle_show_report"
        >
            Run Report
        </b-button>
        <b-button
            v-if="this.html===null"
            class="run-report-button"
            @click.prevent="$emit('edit-code-click')"
        >
            Edit Code
        </b-button>
        
        <iframe class="report-container" v-if="this.html!==null" :srcdoc="this.html">
        </iframe>
    </div>
</template>

<script>
import Reports from '../../../api/collections/Reports';
import 'vue-awesome/icons/angle-left';
import Icon from 'vue-awesome/components/Icon';

export default {
    props: ['reportId'],
    components: {
        'v-icon': Icon,
    },
    inject: {
        theme: {
            default: {},
        },
    },
    data(){
        return {
            shown: false,
            html: null
        }
    },

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
    },

    methods: {
        toggle_show_report(){
            if (!this.shown){
                this.get_report_html();
            } else {
                this.html=null;
            }

            this.shown ^= true;
        },

        get_report_html() {
            console.log(this.reportId);
            Meteor.call('run_report', this.rep.report_code, (error, result) => {
                console.log("DONE");
                this.html = result.html;
            });
            }
        },
    }


</script>

<style scoped>
.report-display {
    /* display: flex; */
    display: 'relative';
    flex-direction: column;
    justify-content: space-between;
    border-style: groove;
    height: 100px;
    width: 140px; 
    padding: 10px;
    margin: 20px;
}

.active {
    overflow-y: 'hidden';
    position: absolute;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    animation-duration: 1s;
    animation-name: slidein;
}

@keyframes slidein {
    from {
        left:140px;
        height: 100px;
        width: 140px; 
    }

    50% {
        left:0px;
        width: 100%
    }
  
    to {
        height: 100%;
    }
}
.report-title {
    margin: 0;
}

.report-description {
    margin: 0;
}

.run-report-button {
    color: v-bind('theme.white');
    padding: 5px;
    border-radius: 5px;
    border: none;
}

.run-report-button:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}

.report-container {
    width: 100%;
    height: 100%;
    min-width: 70%;
    min-height: 400px;
}

.report-title-container-top {
    display: flex;
    justify-content: space-between;
}


</style>
