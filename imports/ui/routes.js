import VueRouter from 'vue-router';


import EditorPage from '../ui/components/Editor/EditorPage';
import ReportsMain from '../ui/components/ReportMenu/ReportsMain';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: ReportsMain
    },
    {
        path: '/editor/:reportId?',
        name: "Editor",
        component: EditorPage
    }
];

const router = new VueRouter({routes});

export default router;