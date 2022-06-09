<template>
        <!-- Border around --> 
        <v-alert 
          class="ma-0 pa-0"
          outlined color='primary'
        >
          <v-card
            color='black'
            :height="height"
            rounded='lg'
          >
          </v-card>
        </v-alert>
</template>

<script lang="js">
export default {
    name:"ReportFileContainer",
    props: {
        height: {
            type: Number,
            default: 150
        }
    }
}
</script>
