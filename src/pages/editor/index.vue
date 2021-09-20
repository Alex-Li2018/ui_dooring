<template>
    <div class="editor-page_wrap">
        <!-- 顶部 -->
        <BusiHeader />
        <div class="content-box flex_layout">
            <!-- 组件库 -->
            <div class="editor_content">
                <BusiComponentsDrawer />
            </div>
            <!-- 画布区 -->
            <div class="canvas_wrap">
                <BusiCanvasScreen />
            </div>
            <!-- 自定义表单 -->
            <div class="custom-form_wrap">
                <BusiRightDrawer />
            </div>
        </div>
    </div>
</template>

<script>
    import BusiHeader from './components/BusiHeader.vue';
    import BusiComponentsDrawer from './components/BusiComponentsDrawer.vue';
    import BusiCanvasScreen from './components/BusiCanvasScreen.vue';
    import BusiRightDrawer from './components/BusiRightDrawer.vue';

    export default {
        components: {
            BusiHeader,
            BusiComponentsDrawer,
            BusiCanvasScreen,
            BusiRightDrawer
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
.editor-page_wrap {
    width: 100%;
    height: 100vh;

    .content-box {
        height: 100vh;
        width: 100%;
        align-items: flex-start;
        padding-top: 76px;
        box-sizing: border-box;
        .editor_content {
            height: 100%;
        }
        .canvas_wrap {
            flex: 1;
            height: calc(100vh - 76px);
            background-color: #f6f6f6;
        }
    }
}
</style>
