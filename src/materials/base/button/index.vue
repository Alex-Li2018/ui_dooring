<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/07/4ae6d7bcd229e741bc6c0f54fc7a5770.png"
            >
            <div class="fz-14 txt">
                按钮组件
            </div>
        </div>
        <div
            v-else
            class="x-btn_wrap"
        >
            <div
                class="x-btn"
                :style="{
                    fontSize: fontSize + 'px',
                    lineHeight: lineHeight + 'px',
                    backgroundColor,
                    color,
                    width: width + 'px',
                    height: height + 'px',
                    borderRadius: borderRadius + 'px',
                    fontWeight,
                }"
            >
                {{ text }}
            </div>
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
            fontSize: {
                type: [Number, String],
                default: 16
            },
            lineHeight: {
                type: [Number, String],
                default: 42
            },
            backgroundColor: {
                type: String,
                default: '#1478FF'
            },
            color: {
                type: String,
                default: '#fff'
            },
            width: {
                type: [Number, String],
                default: 190
            },
            height: {
                type: [Number, String],
                default: 42
            },
            fontWeight: {
                type: [Number, String],
                default: 500
            },
            text: {
                type: String,
                default: '按钮'
            },
            borderRadius: {
                type: [Number, String],
                default: 4
            },
            schemaUrl: {
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
.x-btn_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .x-btn {
        width: 100%;
        text-align: center;
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