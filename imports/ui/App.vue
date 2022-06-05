<template>
    <div>
        <h1>PyReport</h1>
        <reports/>
    </div>
</template>

<script>
import Reports from './components/Reports.vue'

export default {
  components: {
    Reports,
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
