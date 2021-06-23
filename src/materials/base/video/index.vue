<template>
    <div class="x-wrap">
        <div
            v-if="isTpl"
            class="tpl_wrap"
        >
            <img
                class="img"
                src="https://imgcdn.huanjutang.com/image/2021/05/12/bdebd63a29d7e2d0060236ffdb51929f.png"
            >
            <div class="fz-14 txt">
                视频组件
            </div>
        </div>
        <div
            v-else
            class="x-video_wrap"
        >
            <video
                ref="x-video"
                class="x-video"
                :src="src"
                :control="iscontrol"
                preload
                :width="width"
                :height="height"
                :poster="poster"
                :style="{
                    width: width + 'px',
                    height: height + 'px'
                }"
            />
            <img
                v-show="ispaused"
                class="control-btn"
                src="https://imgcdn.huanjutang.com/image/2021/05/12/698301c8173beaeda6507ada7380873a.png"
                @click="handlerControl"
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
                default: 'http://imgcdnstatic.top/image_1624456710477'
            },
            poster: {
                type: String,
                default: 'http://imgcdnstatic.top/image_1624456628188'
            },
            width: {
                type: [Number, String],
                default: 345
            },
            height: {
                type: [Number, String],
                default: 200
            },
        },
        data() {
            return {
                ispaused: true,
                iscontrol: false
            };
        },
        methods: {
            handlerControl() {
                const video = this.$refs['x-video'];
                if (video.paused) {
                    video.play(); 
                    this.ispaused = false;
                    this.iscontrol = true;
                } else {
                    video.pause();
                    this.ispaused = true;
                    this.iscontrol = false;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
.x-video_wrap {
    width: 100%;
    height: 100%;
    padding: 12px 15px;
    box-sizing: border-box;
    position: relative;
    .x-video {
        width: 100%;
    }
    .control-btn {
        width: 60px;
        height: 60px;
        object-fit: contain;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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