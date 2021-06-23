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
                图片组件
            </div>
        </div>
        <div
            v-else
            class="x-img_wrap"
        >
            <img
                class="x-img"
                :src="src"
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
            src: {
                type: String,
                default: 'http://imgcdnstatic.top/image_1624454703071'
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
.x-img_wrap {
    width: 100%;
    height: 100%;
    padding: 12px 15px;
    box-sizing: border-box;
    .x-img {
        width: 100%;
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