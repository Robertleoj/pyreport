<template>
    <div id="nav-bar">
        <a href="#" class="tab" @click="click('Reports')">Reports</a>
        <a href="#" class="tab" @click="click('Terminal')">Terminal</a>
    </div>
</template>

<script>

export default {
    data(){
    },
    methods: {
        click(tabName) {
            console.log("click");
            this.$emit('make-tab-active', tabName);
        }
    }
}

</script>