<template>
    <div
        class="header_wrap flex_layout_b"
    >
        <div class="left_box">
            UI Dooring
        </div>
        <div
            class="right_box flex_layout"
        >
            <template v-if="userInfo.id">
                <div class="user_wrap flex_layout">
                    <span class="name_wrap mar-right-16">Hi, {{ userInfo.name }}</span>
                    <span class="logout_wrap">退出</span>
                </div>
            </template>
            <span
                v-else
                class="fz-16 tml-btn border"
                @click="handlerGoLogin"
            >
                会员登录
            </span>
        </div>
    </div>
</template>

<script>
    import cache from '@/util/cache';

    export default {
        data() {
            return {
                visible: false
            };
        },
        computed: {
            // 箭头函数可使代码更简练
            userInfo() {
                if (this.$store.state.setting.userInfo.id) {
                    return this.$store.state.setting.userInfo;
                } else {
                    return cache.get('userInfo');
                }
            }
        },
        methods: {
            openPageSetting() {
                this.visible = true;
            },
            handlerGoLogin() {
                this.$router.replace({
                    path: '/login'
                });
            }
        }
    };
</script>

<style lang="scss" scoped>
.header_wrap {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2001;
    padding: 10px 30px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 76px;
    background: #001529;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    .left_box {
        width: 300px;
        height: 100%;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
        color: #2f54eb;
    }
    .right_box {
        width: 250px;
        height: 100%;
    }
    .tml-btn {
        color: #fff;
        background: #1478FF;
        padding: 4px 15px;
        cursor: pointer;
        margin-right: 20px;
        line-height: 20px;
        &.border {
            color: #1478FF;
            background-color: #fff;
            border: 1px solid #1478FF;
        }
    }
    .user_wrap {
        margin: 0 20px;
        .name_wrap {
            font-size: 16px;
            color: #fff;
        }
        .logout_wrap {
            color: #2f54eb;
            font-size: 16px;
        }
    }
}
</style>