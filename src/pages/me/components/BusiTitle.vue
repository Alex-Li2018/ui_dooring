<template>
    <div class="title_wrap">
        <div class="txt fz-20 fb-bold">
            {{ title }}
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ''
            }
        },
        data() {
            return {

            };
        },
    };
</script>

<style lang="scss" scoped>
.title_wrap {
    line-height: 40px;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid rgb(243, 241, 241);
    padding-top: 20px;
}
</style>
