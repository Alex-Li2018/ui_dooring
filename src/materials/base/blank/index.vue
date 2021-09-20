<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/12/f6e8d322a0072299824a13326beaca76.png"
            >
            <div class="fz-14 txt">
                占位组件
            </div>
        </div>
        <div
            v-else
            class="x-btn_wrap"
        >
            <div
                class="x-blank"
                :style="{
                    backgroundColor,
                    height: height + 'px',
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
                default: '#1478FF'
            },
            width: {
                type: [Number, String],
                default: 190
            },
            height: {
                type: [Number, String],
                default: 42
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
.x-blank_wrap {
    width: 100%;
    height: 100%;
    .x-blank {
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
