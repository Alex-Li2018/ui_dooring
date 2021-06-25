<template>
    <div
        class="header_wrap flex_layout"
    >
        <div class="left_box">
            UI Dooring
        </div>
        <div class="center_box flex_layout">
            <span
                class="iconfont iconbaocun icon"
                title="保存"
                @click="save"
            />
            <!-- <span
                class="iconfont iconyulan icon"
                title="预览"
            /> -->
            <!-- <span
                class="iconfont iconshangyibu icon"
                title="上一步"
                @click="previous"
            />
            <span
                class="iconfont iconxiayibu icon"
                title="下一步"
                @click="next"
            /> -->
            <span
                class="iconfont iconqingkongshanchu icon"
                title="清空"
                @click="clear"
            />
        </div>
        <div
            class="right_box flex_layout"
        >
            <span
                class="fz-16 tml-btn border"
                @click="openPageSetting"
            >
                页面设置
            </span>
            <template v-if="userInfo.id">
                <el-dropdown @command="handleCommand">
                    <div class="user_wrap flex_layout">
                        <span class="avatar_wrap mar-right-6">{{ userInfo.name }}</span>
                        <span class="el-icon-arrow-down fz-10 fb-bold" />
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="me">
                            我的
                        </el-dropdown-item>
                        <el-dropdown-item command="logout">
                            退出
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </template>
            <span
                v-else
                class="fz-16 tml-btn border"
                @click="handlerGoLogin"
            >
                会员登录
            </span>
        </div>
        <BusiPageSetting :visible.sync="visible" />
    </div>
</template>

<script>
    import busiApi from '@/api/busi';
    import cache from '@/util/cache';
    import BusiPageSetting from './BusiPageSetting.vue';

    export default {
        components: {
            BusiPageSetting
        },
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
            async save() {
                let res = {};
                const pageData = this.$store.state.editor.pageData;
                if (this.$route.query.id) {
                    // 组装存入数据的格式
                    res = await busiApi.updatePage(
                        this.$route.query.id, 
                        { 
                            name: pageData.setting.page_name,
                            content: pageData  
                        });
                } else {
                    res = await busiApi.createPage({ 
                        name: pageData.setting.page_name,
                        content: pageData 
                    });
                }
                
                res.code === 200 && this.$notify({
                    title: '成功',
                    message: '保存成功!',
                    type: 'success'
                });
            },
            previous() {
                this.$bus.emit('operate-Layout', 'previous');
            },
            next() {
                this.$bus.emit('operate-Layout', 'next');
            },
            clear() {
                this.$bus.emit('operate-Layout', 'clear');
            },
            handleCommand(command) {
                switch(command) {
                case 'me':
                    this.$router.push({
                        path: '/me'
                    });
                    break;
                case 'logout':
                    this.$store.dispatch('setting/logout').then(() => {
                        this.$router.replace({
                            path: '/login'
                        });
                    }).catch(err => {
                        console.error(err);
                    });
                    break;
                default:
                    break;
                }          
            },
            handlerGoLogin() {
                this.$router.replace({
                    path: '/login'
                });
            }
        }
    };
</script>

<style lang="scss">
.el-notification {
    z-index: 2200 !important;
}
</style>

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
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,.1);
    .left_box {
        width: 300px;
        height: 100%;
        font-size: 30px;
        font-weight: bold;
        line-height: 1.5;
        text-align: center;
    }
    .center_box {
        flex: 1;
        .icon {
            padding: 4px 6px;
            height: 32px;
            line-height: 32px;
            margin-right: 20px;
            color: #1478FF;
            cursor: pointer;
            font-size: 20px;
        }
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
        .avatar_wrap {
            display: inline-block;
            width: 40px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            white-space: nowrap;
            overflow: hidden;
            font-size: 12px;
            color: #fff;
            vertical-align: middle;
            border-radius: 50%;
            background-color: #2f54eb;
        }
    }
}
</style>