<template>
    <div class="right-drawer_wrap">
        <el-drawer
            title="我是标题"
            :visible.sync="drawer"
            direction="rtl"
            size="100%"
            :modal="false"
            :with-header="false"
        >
            <div class="pad-right-20">
                <div class="fz-18 attr_wrap">
                    属性设置
                </div>
                <form-create
                    v-model="fApi"
                    :rule="rule"
                    :value="value"
                    :option="options"
                />
            </div>
        </el-drawer>
    </div>
</template>

<script>
    import formCreate from '@form-create/element-ui';
    import BusiImgUpload from '@/components/BusiImgUpload.vue';
    import BusiVideoUpload from '@/components/BusiVideoUpload.vue';
    import BusiSwiperUpload from '@/components/BusiSwiperUpload.vue';
    import BusiRichEditor from '@/components/BusiRichEditor.vue';

    // 自定义组件
    formCreate.component('VideoUpload', BusiVideoUpload);
    formCreate.component('ImgUpload', BusiImgUpload);
    formCreate.component('SwiperUpload', BusiSwiperUpload);
    formCreate.component('RichEditor', BusiRichEditor);

    export default {
        data() {
            return {
                drawer: false,
                // 实例对象
                fApi: {},
                // 表单数据
                value: {},
                // 表单生成规则
                rule: [],
                // 组件参数配置
                options: {
                    form: {
                        // 行内表单模式
                        inline: false,
                        // 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width
                        labelPosition: 'right',
                        // 表单域标签的后缀
                        labelSuffix: undefined,
                        // 是否显示必填字段的标签旁边的红色星号
                        hideRequiredAsterisk: false,
                        // 表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。
                        labelWidth: '80px',
                        // 是否显示校验错误信息
                        showMessage: true,
                        // 是否以行内形式展示校验信息
                        inlineMessage: false,
                        // 是否在输入框中显示校验结果反馈图标
                        statusIcon: false,
                        // 是否在 rules 属性改变后立即触发一次验证
                        validateOnRuleChange: true,
                        // 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效
                        disabled: false,
                        // 用于控制该表单内组件的尺寸 medium / small / mini
                        size: undefined,
                    },
                    // 不展示提交按钮
                    submitBtn: false
                },
                uniqueKey: null
            };
        },
        watch: {
            // 监听事件
            '$store.state.editor.ishowDrawer': function(newVal) {
                this.drawer = newVal;
                if (this.drawer) {
                    this.$nextTick(() => {
                        this.initEvent();
                    });
                }
            },
            '$store.state.editor.form': {
                immediate: true,
                handler(newVal) {
                    this.value = newVal;
                }
            },
            '$store.state.editor.editorData': {
                immediate: true,
                handler(newVal) {
                    this.rule = newVal;
                }
            },
            // 唯一key值
            '$store.state.editor.uniqueKey': function(newVal) {
                this.uniqueKey = newVal;
            }
        },
        methods: {
            initEvent() {
                // 背景色
                this.fApi.on('bg-change', this.backgroundChange);
                this.fApi.on('bg-left-change', this.backgroundLeftChange);
                this.fApi.on('bg-right-change', this.backgroundRightChange);

                this.fApi.on('width-change', this.wdithChange);
                this.fApi.on('height-change', this.heightChange);
                this.fApi.on('line-height-change', this.lineHeightChange);
                // 字体颜色
                this.fApi.on('fc-change', this.fcChange);
                this.fApi.on('fc-left-change', this.fcLeftChange);
                this.fApi.on('fc-right-change', this.fcRightChange);
                // 字体大小
                this.fApi.on('fs-change', this.fsChange);
                this.fApi.on('fs-left-change', this.fsLeftChange);
                this.fApi.on('fs-left-change', this.fsRightChange);
                // 字体粗细
                this.fApi.on('fw-change', this.fwChange);
                this.fApi.on('fw-left-change', this.fwLeftChange);
                this.fApi.on('fw-right-change', this.fwRightChange);
                // 文本
                this.fApi.on('text-change', this.textChange);
                this.fApi.on('text-left-change', this.textLeftChange);
                this.fApi.on('text-right-change', this.textRightChange);
                // 字体对齐
                this.fApi.on('text-align-change', this.textAlignChange);
                // 交互
                this.fApi.on('schema-url-change', this.schemaUrlChange);
                this.fApi.on('schema-url-left-change', this.schemaUrlLeftChange);
                this.fApi.on('schema-url-right-change', this.schemaUrlRightChange);
                // 图片路径
                this.fApi.on('src-change', this.srcChange);
                this.fApi.on('src-left-change', this.srcLeftChange);
                this.fApi.on('src-right-change', this.srcRightChange);
                // 视频封面
                this.fApi.on('video-src-change', this.videoSrcChange);
                this.fApi.on('poster-change', this.posterChange);

                this.fApi.on('swiper-change', this.swiperChange);
                this.fApi.on('rich-editor-change', this.richEditorChange);
            },
            backgroundChange() {
                this.value.backgroundColor = this.fApi.getValue('backgroundColor');
                this.emitUpdateLayout();
            },
            backgroundLeftChange() {
                this.value.backgroundColorLeft = this.fApi.getValue('backgroundColorLeft');
                this.emitUpdateLayout();
            },
            backgroundRightChange() {
                this.value.backgroundColorRight = this.fApi.getValue('backgroundColorRight');
                this.emitUpdateLayout();
            },
            fcChange() {
                this.value.color = this.fApi.getValue('color');
                this.emitUpdateLayout();
            },
            fcLeftChange() {
                this.value.colorLeft = this.fApi.getValue('colorLeft');
                this.emitUpdateLayout();
            },
            fcRightChange() {
                this.value.colorRight = this.fApi.getValue('colorRight');
                this.emitUpdateLayout();
            },
            wdithChange() {
                this.value.width = this.fApi.getValue('width');
                this.emitUpdateLayout();
            },
            heightChange() {
                this.value.height = this.fApi.getValue('height');
                this.emitUpdateLayout();
            },
            lineHeightChange() {
                this.value.lineHeight = this.fApi.getValue('lineHeight');
                this.emitUpdateLayout();
            },
            fsChange() {
                this.value.fontSize = this.fApi.getValue('fontSize');
                this.emitUpdateLayout();
            },
            fsLeftChange() {
                this.value.fontSizeLeft = this.fApi.getValue('fontSizeLeft');
                this.emitUpdateLayout();
            },
            fsRightChange() {
                this.value.fontSizeRight = this.fApi.getValue('fontSizeRight');
                this.emitUpdateLayout();
            },
            fwChange() {
                this.value.fontWeight = this.fApi.getValue('fontWeight');
                this.emitUpdateLayout();
            },
            fwLeftChange() {
                this.value.fontWeightLeft = this.fApi.getValue('fontWeightLeft');
                this.emitUpdateLayout();
            },
            fwRightChange() {
                this.value.fontWeightRight = this.fApi.getValue('fontWeightRight');
                this.emitUpdateLayout();
            },
            textChange() {
                this.value.text = this.fApi.getValue('text');
                this.emitUpdateLayout();
            },
            textLeftChange() {
                this.value.textLeft = this.fApi.getValue('textLeft');
                this.emitUpdateLayout();
            },
            textRightChange() {
                this.value.textRight = this.fApi.getValue('textRight');
                this.emitUpdateLayout();
            },
            textAlignChange() {
                this.value.textAlign = this.fApi.getValue('textAlign');
                this.emitUpdateLayout();
            },
            schemaUrlChange() {
                this.value.schemaUrl = this.fApi.getValue('schemaUrl');
                this.emitUpdateLayout();
            },
            schemaUrlLeftChange() {
                this.value.schemaUrlLeft = this.fApi.getValue('schemaUrlLeft');
                this.emitUpdateLayout();
            },
            schemaUrlRightChange() {
                this.value.schemaUrlRight = this.fApi.getValue('schemaUrlRight');
                this.emitUpdateLayout();
            },
            srcChange(src) {
                this.value.src = src;
                this.emitUpdateLayout();
            },
            srcLeftChange(src) {
                this.value.srcLeft = src;
                this.emitUpdateLayout();
            },
            srcRightChange(src) {
                this.value.srcRight = src;
                this.emitUpdateLayout();
            },
            videoSrcChange({ src, poster }) {
                this.value.poster = poster;
                this.value.src = src;
                this.emitUpdateLayout();
            },
            posterChange(src) {
                this.value.poster = src;
                this.emitUpdateLayout();
            },
            swiperChange(swipers) {
                this.value.items = swipers;
                this.emitUpdateLayout();
            },
            richEditorChange(content) {
                this.value.content = content;
                const regErr = /<img\b/gi;
                this.value.content = content.replace(regErr, '<img  style="width: 100%"');
                this.emitUpdateLayout();
            },
            emitUpdateLayout() {
                this.$bus.emit('update-layout', { key: this.uniqueKey, comProps: this.value });
            }
        }
    };
</script>

<style lang="scss" scoped>
.right-drawer_wrap {
    /deep/ .el-drawer__wrapper{
        height: calc(100vh - 76px);
        width: 360px;
        position: fixed;
        top: 76px;
        right: 0;
        bottom: unset;
        left: unset;
        overflow: hidden;
        margin: 0;
        box-shadow: -2px 0 4px 0 rgba(0,0,0,.1);
        z-index: 1998;
        .el-drawer__body {
            height: 100%;
            overflow-x: hidden;
            overflow-y: scroll;
        }
    }
    .attr_wrap {
        margin: 20px;
    }
}
</style>
