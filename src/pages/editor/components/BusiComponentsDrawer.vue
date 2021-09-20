<template>
    <div class="components-drawer_wrap">
        <div class="tab_outer">
            <el-tabs
                tab-position="left"
                style="height: 100%"
            >
                <el-tab-pane label="base">
                    <div
                        slot="label"
                        class="tab-label"
                    >
                        <div class="iconfont iconjichugongneng" />
                        <div class="fz-14 mar-top-10">
                            基础
                        </div>
                    </div>
                    <!-- tab内容 -->
                    <BusiTabContent comType="base" />
                </el-tab-pane>
                <el-tab-pane label="fixed">
                    <div
                        slot="label"
                        class="tab-label"
                    >
                        <div class="iconfont iconguding-tianchong" />
                        <div class="fz-14 mar-top-10">
                            固定
                        </div>
                    </div>
                    <!-- tab内容 -->
                    <BusiTabContent comType="fixed" />
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    import BusiTabContent from './BusiTabContent.vue';

    export default {
        components: {
            BusiTabContent
        }
    };
</script>

<style lang="scss" scoped>
.components-drawer_wrap {
    height: 100%;
    .tab_outer {
        height: 100%;
        /deep/ .el-tabs {
            overflow: unset;
            .el-tabs__item {
                height: unset;
                line-height: unset;
                text-align: center !important;
                margin-top: 40px;
            }
            .el-tabs__active-bar {
                background-color: transparent;
            }
            .el-tabs__content {
                width: 236px;
                height: 100%;
                padding-right: 10px;
                overflow-y: auto;
                overflow-x: hidden;
                box-sizing: content-box;
                &::-webkit-scrollbar {
                    width: 6px;
                    background-color: #fff;
                }

                &::-webkit-scrollbar-thumb {
                    background-color: #909399;
                    border-radius: 10px;
                }
            }
        }
    }
    .tab-label {
        height: 43px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
}
</style>
