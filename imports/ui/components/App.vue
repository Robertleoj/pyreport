<template>
    <v-app id="app">
        <nav-bar></nav-bar>
        <div height="30px"></div>
        <v-main>
        <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script lang='js'>
import NavBar from './NavBar/NavBar.vue';

export default {
    name: "App",

    components: {
        NavBar,
    }
}
</script>

<style scoped>
#app {
  background-color: var(--v-background-base);
}
</style>
