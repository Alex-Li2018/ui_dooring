<template>
    <div>
        <router-view />
    </div>
</template>

<script>
    export default {

    };
</script>

<style lang="scss">
@import './assets/css/common.scss';
@import './assets/css/normalize.css';
.el-notification, .el-message {
    z-index: 2000 !important;
}
</style>