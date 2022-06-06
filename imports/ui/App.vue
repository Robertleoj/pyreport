<template>
    <div>
        <nav-bar @make-tab-active="makeTabActive"/>
        <h1>PyReport</h1>
        <report-list v-if="isActiveTab('Reports')"></report-list>
        <terminal-page v-if="isActiveTab('Terminal')"></terminal-page>
    </div>
</template>

<script>
import ReportList from './components/Reports/ReportList.vue'
import NavBar from './components/NavBar/NavBar.vue'
import TerminalPage from './components/Terminal/TerminalPage.vue'

export default {
  data() {
    return {
      activeTab: 'Reports'
    }
  },
  methods: {
      makeTabActive: function(val) {
          console.log(this.activeTab, '->', val);
          this.activeTab = val;
      },
      isActiveTab: function(val) {
          return this.activeTab === val;
      }
  },
  components: {
    ReportList,
    NavBar,
    TerminalPage
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
  }
</style>
