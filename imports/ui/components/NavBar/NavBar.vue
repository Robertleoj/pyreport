<template>
    <v-app-bar app flat color="background" height="0">
      <template v-slot:extension>
          <v-container fluid style="width: 100%;">
                <v-breadcrumbs :items="breadcrumbItems">
                  <template v-slot:extension>
                    <v-icon>mdi-forward</v-icon>
                  </template>
                </v-breadcrumbs>
          </v-container>
        <v-tabs class='mr-10' right>
          <v-tab>Reports</v-tab>
          <v-tab>Editor</v-tab>
          <v-tab>Options</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
</template>

<script lang="js">
export default {
    name:"NavBar",
    data: () => ({
        breadcrumbItems: [
            {
                text: 'Placeholder 1',
                disabled: false,
                href: '#'
            },
            {
                text: 'Placeholder 2',
                disabled: false,
                href: '#'
            },
            {
                text: 'Placeholder 3',
                disabled: true,
                href: '#'
            },
        ],
    }),
}
</script>
