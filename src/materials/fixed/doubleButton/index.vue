<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/9684f594609a8fa4879fcf8d8df252a1.png"
            >
            <div class="fz-14 txt">
                两个按钮组件
            </div>
        </div>
        <div
            v-else
            class="x-double-btn_wrap"
        >
            <div
                class="x-double-btn"
                :style="{
                    fontSize: fontSizeLeft + 'px',
                    backgroundColor: backgroundColorLeft,
                    color: colorLeft,
                    fontWeight: fontWeightLeft,
                    width: width + 'px',
                    height: height + 'px',
                    borderRadius: borderRadius + 'px',
                    lineHeight: lineHeight + 'px',
                }"
            >
                {{ textLeft }}
            </div>
            <div
                class="x-double-btn"
                :style="{
                    fontSize: fontSizeRight + 'px',
                    fontWeight: fontWeightRight,
                    backgroundColor: backgroundColorRight,
                    color: colorRight,
                    width: width + 'px',
                    height: height + 'px',
                    borderRadius: borderRadius + 'px',
                    lineHeight: lineHeight + 'px',
                }"
            >
                {{ textRight }}
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
            // 左边
            fontSizeLeft: {
                type: [Number, String],
                default: 16
            },
            backgroundColorLeft: {
                type: String,
                default: '#0AC599'
            },
            colorLeft: {
                type: String,
                default: '#fff'
            },
            fontWeightLeft: {
                type: [Number, String],
                default: 500
            },
            schemaUrlLeft: {
                type: String,
                default: ''
            },
            textLeft: {
                type: String,
                default: '左边按钮'
            },
            // 右边
            fontSizeRight: {
                type: [Number, String],
                default: 16
            },
            backgroundColorRight: {
                type: String,
                default: '#1478FF'
            },
            colorRight: {
                type: String,
                default: '#fff'
            },
            fontWeightRight: {
                type: [Number, String],
                default: 500
            },
            schemaUrlRight: {
                type: String,
                default: ''
            },
            textRight: {
                type: String,
                default: '右边按钮'
            },
            width: {
                type: [Number, String],
                default: 168
            },
            height: {
                type: [Number, String],
                default: 44
            },
            lineHeight: {
                type: [Number, String],
                default: 44
            },
            borderRadius: {
                type: [Number, String],
                default: 4
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
.x-double-btn_wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    box-sizing: border-box;
    .x-double-btn {
        width: 168px;
        height: 44px;
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
