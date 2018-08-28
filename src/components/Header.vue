<template>
    <div v-reveal-on-scroll-up class="header"></div>    
</template>
<script>
    import revealOnScrollUp from '../common/directives/show-menu-scroll-up.js'

    export default {
        name: 'Header',

        directives: {
            revealOnScrollUp
        },
    }
</script>
<style lang="scss" scoped>
    .header {
        background-color: rgba(0, 0, 0, .4);
        height: 90px;
        width: 100%;

        overflow: auto;
        transition: top 0.2s ease-in-out;
        position: fixed;
        z-index: 5;
    }
</style>
