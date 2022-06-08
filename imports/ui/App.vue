<template>
  <theme-provider>
    <div class="bodyDiv">
      <b-tabs>
        <b-tab title="Reports">
          <report-list v-if="isActiveTab('Reports')"></report-list>
        </b-tab>
        <b-tab title="Terminal">
          <terminal-page></terminal-page>
        </b-tab>
      </b-tabs>
    </div>
  </theme-provider>
</template>

<script>
import ReportList from './components/Reports/ReportList.vue'
import TerminalPage from './components/Terminal/TerminalPage.vue'
import ThemeProvider from './components/Providers/ThemeProvider.vue'

export default {
  inject: {
    theme: {
      default: {},
    },
  },
  data() {
    return {
      colorTheme: this.theme,
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
    TerminalPage,
    ThemeProvider
  },
}
</script>

<style>
  body {
    font-family: sans-serif;
    padding: 10px;
    height: 100%;
    background-color: #30343F;
  }

  html {
    height: 100%
  }

  .bodyDiv {
    display: flex;
    flex-direction: column;
    height: 100%;
  }


</style>
