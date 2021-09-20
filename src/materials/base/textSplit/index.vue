<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/c01fb6c15144c8fb40e70346fee5e5ea.png"
            >
            <div class="fz-14 txt">
                文本分割线组件
            </div>
        </div>
        <div
            v-else
            class="x-text-split_wrap"
        >
            <div
                class="x-text-split"
                :style="{
                    backgroundColor,
                    height: height + 'px'
                }"
            />
            <div class="x-txt">
                {{ text }}
            </div>
            <div
                class="x-text-split"
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
            },
            text: {
                type: String,
                default: '提示文本最多提示文本最多提15字'
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
.x-text-split_wrap {
    width: 100%;
    height: 100%;
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .x-text-split {
        flex: 1;
    }
    .x-txt {
        color: #909399;
        line-height: 18px;
        margin: 0 12px;
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
