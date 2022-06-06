<template>
    <div>
        <h1>PyReport</h1>
        <report-list/>
    </div>
</template>

<script>
import ReportList from './components/ReportList.vue'

export default {
  components: {
    ReportList,
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
