<template>
    <div class="home_wrap">
        <div class="banner-container">
            <div class="pic" />
            <div
                class="text"
                @click="jumpUrl"
            >
                <p>UI Dooring</p>
                <br>
                <p>Less Code Less Bug Do More</p>
                <br>
                <div
                    class="btn"
                >
                    Try Now
                </div>
            </div>
        </div>
        <div
            class="bottom_wrap"
            @click="jumplink"
        >
            © Copyright - Ui Dooring 蜀ICP备2021006935号-3
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            jumpUrl() {
                this.$router.push({
                    path: '/editor'
                });
            },
            jumplink() {
                window.open('https://beian.miit.gov.cn');
            }
        }
    };
</script>

<style scoped lang="scss">
    .banner-container {
        width: 100%;
        height: 100vh;
    }
    .pic{
        height: 100%;
        width: 100%;
        position: absolute;
        background: url('../../assets/img/banner2.jpg') no-repeat;
        background-size: cover;
        // forwards当动画完成后，保持最后一帧的状态
        animation: fade-away 4.5s linear forwards;
    }
    .text{
        position: absolute;
        line-height: 55px;
        color: #fff;
        font-size: 36px;
        text-align: center;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        opacity: 0;
        animation: show 4s cubic-bezier(.74,-0.1,.86,.83) forwards;
        cursor: pointer;
    }

    @keyframes fade-away {    //背景图的明暗度动画
        30%{
            filter: brightness(1);
        }
        100%{
            filter: brightness(0);
        }
    }
    @keyframes show{         //文字的透明度动画
        20%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
</style>

<style lang="scss">
    .top-wrap {
        position: relative;
        .position-style {
            position: absolute;
        }
        .f-screen {
            width: 100%;
            height: 680px;
            top: -650px;
            background: linear-gradient(90deg, #2196F3, #1976D2);
            transform: skewY(-8.5deg) translateY(76%);
        }
        .s-screen {
            width: 100%;
            height: 600px;
            background: linear-gradient(100deg, #1976D2, #2196F3);
            transform: skewY(-8.5deg) translateY(76%);
            top: -650px;
        }
        .t-screen {
            width: 100%;
            height: 365px;
            background: linear-gradient(20deg, #1E88E5, #1976D2);
            transform: skewY(-8.5deg) translateY(76%);
            top: -650px;
        }
        .content_wrap {
            padding: 120px 20px 100px 20px;
            max-width: 1040px;
            height: 650px;
            color: #fff;
            margin: 0 auto;
            box-sizing: border-box;
            position: relative;
            z-index: 3;
            display: flex;
            justify-content: space-between;
            .title {
                line-height: 1.25;
                padding-bottom: 30px;
                letter-spacing: 0.8px;
                font-weight: 500;
                font-size: 44px;
            }
            .desc {
                line-height: 1.35;
                padding-bottom: 50px;
                font-size: 24px;
                font-weight: 300;
                width: 360px;
            }
            .btn {
                background: #ffab40;
                padding: 10px 30px;
                border-radius: 5px;
                box-shadow: 0 4px 6px rgba(50,50,50,10%), 0 1px 3px rgba(255,255,255,10%);;
                color: #fff;
                font-size: 20px;
                width: 205px;
                height: 52px;
                box-sizing: border-box;
                text-align: center;
                line-height: 32px;
                cursor: pointer;
            }
            .right {
                overflow: hidden;
                transform: scale(0.9) translateX(-25px) translateY(-30px) perspective(3090px) rotateY(-29deg) rotateX(2deg) rotate(1deg);
                box-shadow: 1px 1px 5px 0 rgba(26,26,67,5%), 39px 62.5px 125px -25px rgba(50,50,93, 50%), 23.4px 37.5px 75px -37.5px rgba(0,0,0,60%);
            }
        }
    }
    .bottom_wrap {
        background-color: #fff;
        height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
    }
</style>
