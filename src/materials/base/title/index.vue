<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/de3f350d7ea6aa78056c1e7e2d6f8bd7.png"
            >
            <div class="fz-14 txt">
                标题组件
            </div>
        </div>
        <div
            v-else
            class="x-text_wrap"
        >
            <div
                class="x-text"
                :style="{
                    fontSize: fontSize + 'px',
                    lineHeight: lineHeight + 'px',
                    backgroundColor,
                    color,
                    fontWeight,
                    textAlign
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
                default: 22
            },
            lineHeight: {
                type: [Number, String],
                default: 30
            },
            backgroundColor: {
                type: String,
                default: '#fff'
            },
            color: {
                type: String,
                default: '#303133'
            },
            fontWeight: {
                type: [Number, String],
                default: 500
            },
            text: {
                type: String,
                default: '2020成都公办高中录取线排名前都公办高中录取线排名前'
            },
            textAlign: {
                type: String,
                default: 'center'
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
.x-text_wrap {
    width: 100%;
    height: 100%;
    padding: 10px 16px;
    box-sizing: border-box;
    .x-text {
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
