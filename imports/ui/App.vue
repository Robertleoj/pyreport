<template>
  <theme-provider>
    <div class="bodyDiv">
      <b-tabs>
        <b-tab 
          :active='isActivePage(pages.REPORTS)'
          :title='pages.REPORTS'
          @click='makeTabActive(pages.REPORTS)'
        >
          <report-list @edit-code-click='handleEditCodeClick'></report-list>
        </b-tab>
        <b-tab
          :active='isActivePage(pages.TERMINAL)'
          :title="pages.TERMINAL"
          @click='makeTabActive(pages.TERMINAL)'
        >
          <terminal-page :code="(currentReport!==null) ? currentReport.report_code : defaultCode"></terminal-page>
        </b-tab>
      </b-tabs>
    </div>
  </theme-provider>
</template>

<script>
import ReportList from './components/Reports/ReportList.vue'
import TerminalPage from './components/Terminal/TerminalPage.vue'
import ThemeProvider from './components/Providers/ThemeProvider.vue'
import { PAGES } from '../constants';

const DefaultCode = 'def isEven(num):\n\treturn num % 2 == 0';

export default {
  inject: {
    theme: {
      default: {},
    },
  },
  data() {
    return {
      pages: PAGES,
      activePage: PAGES.REPORTS,
      currentReport: null,
      defaultCode: DefaultCode,
    }
  },
  methods: {
      makeTabActive: function(val) {
          console.log(this.activePage, '->', val);
          this.activePage = val;
      },
      isActivePage: function(val) {
          return this.activePage === val;
      },
      handleEditCodeClick: function(report) {
        console.log('handleEditCodeClick called');
        this.currentReport = report;
        makeTabActive(pages.TERMINAL);
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
