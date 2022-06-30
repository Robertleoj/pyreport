<template>
    <div>
        <div v-for="p in pages()">
            <Page
                :page_element="p"
            >

            </Page>
        </div>
    </div>
</template>

<script lang="js">
import Page from './report_elements/Page.vue';

export default {
    data() {
        return {
            report_res: this.result,
            attachments: this.result.attachments,
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
        let parser = new DOMParser();
        let xml_doc = parser.parseFromString(this.report_res.report_doc, 'text/xml');
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