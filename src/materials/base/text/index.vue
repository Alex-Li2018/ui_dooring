<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/e7d63dee92bfd06db1b18c35d6a26d77.png"
            >
            <div class="fz-14 txt">
                文本组件
            </div>
        </div>
        <div
            v-else
            class="x-text_wrap"
        >
            <!-- 注意避免xss攻击 -->
            <div
                class="x-text"
                v-html="content"
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
            content: {
                type: String,
                default: '我是富文本组件,请填写内容'
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

<style lang="scss">
.x-text_wrap {
    width: 100%;
    height: 100%;
    padding: 10px 16px;
    box-sizing: border-box;
    .x-text {
        width: 100%;
        img {
            width: 100%;
            object-fit: cover;
        }
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