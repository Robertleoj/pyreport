<template>
    <div class="mx-5">
        <template v-for="section in sections">
            <div class="my-5">
                <div class="my-3">
                    <v-icon color='primary'>{{ section.icon }}</v-icon>
                    <strong>{{ section.title }}</strong>
                </div>

                <report-file-container
                    :class="section.class"
                />
            </div>
        </template>  
        <!-- </v-row> -->
    </div>
</template>

<script lang="js">
import ReportFileContainer from './components/ReportFileContainer.vue';
import { mdiHeart, mdiFolder, mdiFile } from '@mdi/js';

export default {
    name:"ReportList",
    data() {
        return {
            sections: [
                {
                    class: "favs",
                    title: "Favorites",
                    icon: mdiHeart,
                },
                {
                    class: "folders",
                    title: "Folders",
                    icon: mdiFolder,
                },
                {
                    class: "reports",
                    title: "Reports",
                    icon: mdiFile,
                },
            ],
        };
    },
    components: {
        ReportFileContainer,
    },
}
</script>

<style scoped>
.favs {
    min-height: 100px;
}

.folders {
    min-height: 100px;
}

.reports {
    min-height: 400px;
}

</style>
