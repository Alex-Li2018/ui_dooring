<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/324757abd3f2e640bd7297a819ab0d92.png"
            >
            <div class="fz-14 txt">
                双列图片组件
            </div>
        </div>
        <div
            v-else
            class="x-img_wrap"
        >
            <img
                class="x-img"
                :src="srcLeft"
            >
            <img
                class="x-img mar-left-12"
                :src="srcRight"
            >
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            isTpl: {
                type: Boolean,
                default: false
            },
            srcLeft: {
                type: String,
                default: 'https://imgcdn.huanjutang.com/image/2021/05/13/3ee1277da10dc513b19730349fd7cb89.png'
            },
            schemaUrlLeft: {
                type: String,
                default: ''
            },
            srcRight: {
                type: String,
                default: 'https://imgcdn.huanjutang.com/image/2021/05/12/3fb92167b17eede336ebe415ea772ea0.png'
            },
            schemaUrlRight: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
            };
        },
        methods: {
        }
    };
</script>

<style lang="scss" scoped>
.x-img_wrap {
    width: 100%;
    height: 100%;
    padding: 12px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    .x-img {
        flex: 1;
        height: 167px;
        width: 167px;
        object-fit: cover;
    }
}
</style>

<style lang="scss">
.x-wrap {
    width: 100%;
    height: 100%;
}
.tpl_wrap {
    width: 100px;
    height: 130px;
    box-sizing: border-box;
    .img {
        width: 100%;
        height: 100px;
    }
    .txt {
        color: rgb(118, 118, 118);
        text-align: center;
        background-color: rgb(245, 245, 245);
        color: rgb(118, 118, 118);
        line-height: 29px;
        height: 29px;
    }
}
</style>