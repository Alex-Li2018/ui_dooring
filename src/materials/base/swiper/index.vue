<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/13/9e13a8a3e29996e272a834b1d1e9dfc9.png"
            >
            <div class="fz-14 txt">
                轮播图组件
            </div>
        </div>
        <div
            v-else
            class="x-swiper_wrap"
        >
            <div class="x-swiper">
                <el-carousel height="200px">
                    <el-carousel-item
                        v-for="item in items"
                        :key="item.id"
                    >
                        <img
                            class="carousel_wrap"
                            :src="item.src"
                        >
                    </el-carousel-item>
                </el-carousel>
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
            items: {
                type: Array,
                default: () => []
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
.x-swiper_wrap {
    width: 100%;
    height: 100%;
    padding: 12px 15px;
    box-sizing: border-box;
    .x-swiper {
        width: 100%;
        height: 100%;
        .carousel_wrap {
            width: 100%;
            height: 100%;
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