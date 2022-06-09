<template>
    <v-col cols="12" sm="6" md="3">
      <v-autocomplete
          :items='items'
          outlined
          background-color='black'
          label="Search"
          solo
        >
      </v-autocomplete>
    </v-col>
</template>


<script lang="js">
import { mdiSearch } from '@mdi/js';

export default {
    name: "SearchBar",
    data() {
        return {
            searchSvg: mdiSearch,
            items: ['Bongus', 'Drongus', "Pingus"],
        };
    },
}
</script>