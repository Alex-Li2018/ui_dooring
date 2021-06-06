<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/0ff4ad7542f115e52ddeb37d60c1194a.png"
            >
            <div class="fz-14 txt">
                分割线组件
            </div>
        </div>
        <div
            v-else
            class="x-split_wrap"
        >
            <div
                class="x-split"
                :style="{
                    backgroundColor,
                    height: height + 'px'
                }"
            />
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
            backgroundColor: {
                type: String,
                default: '#BFC2CC'
            },
            height: {
                type: [Number, String],
                default: 1
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
.x-split_wrap {
    width: 100%;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
    .x-split {
        width: 100%;
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