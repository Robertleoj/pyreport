<template>
    <div>
        <div v-for="p in pages()">
            <Page
                :page_element="p"
            >

            </Page>
        </div>
        <span>{{JSON.stringify(report_res)}}</span>
        <span>{{pages()}}</span>
    </div>
</template>

<script lang="js">
import Page from './report_elements/Page.vue';

export default {
    data() {
        return {
            report_res: null,
            attachments: null,
            xml_doc: null
        }
    },
    props: [
        'result'
    ],

    components: {
        Page
    },

    provide(){
        return {attachments: this.attachments}
    },
    created(){
        this.report_res = this.result;
        this.report_doc = this.report_res.report_doc;
        this.attachments = this.report_res.attachments;

        let parser = new DOMParser();

        let xml_doc = parser.parseFromString(this.report_doc, 'text/xml');
        console.log(xml_doc);

        this.xml_doc = xml_doc;
    },
    methods: {
        pages(){
            let page_collection = this.xml_doc.getElementsByTagName('Page', 'text/xml');
            console.log(page_collection);
            //console.log(pages);
            let pages = []
            for(let i = 0; i < page_collection.length; i++){
                pages.push(page_collection.item(i))
            }
            return pages;
        }
    }
}
</script>