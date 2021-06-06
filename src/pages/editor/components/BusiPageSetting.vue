<template>
    <div class="page-setting_wrap">
        <el-dialog
            title="页面设置"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
            :modal-append-to-body="false"
        >
            <el-form
                ref="ruleForm"
                :model="form"
                label-width="100px"
            >
                <el-form-item
                    label="页面名称"
                    prop="page_name"
                >
                    <el-input v-model="form.page_name" />
                </el-form-item>
                <el-form-item
                    label="页面描述"
                    prop="page_desc"
                >
                    <el-input
                        v-model="form.page_desc"
                        type="textarea"
                    />
                </el-form-item>
                <el-form-item
                    label="背景色"
                    prop="page_backgroundColor"
                >
                    <el-color-picker v-model="form.page_backgroundColor" />
                </el-form-item>
                <el-form-item
                    label="背景图片"
                    prop="page_backgroundImage"
                >
                    <BusiImgUpload :value.sync="form.page_backgroundImage" />
                </el-form-item>
                <el-form-item>
                    <el-button @click="resetForm">
                        取消
                    </el-button>
                    <el-button
                        type="primary"
                        @click="submitForm"
                    >
                        保存
                    </el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import { cloneForce } from '@/util/cloneDeep';
    import { mapMutations } from 'vuex';
    import BusiImgUpload from '@/components/BusiImgUpload.vue';

    export default {
        components: {
            BusiImgUpload
        },
        props: {
            visible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                dialogVisible: false,
                form: {
                    page_name: '',
                    page_desc: '',
                    page_backgroundColor: '#fff',
                    page_backgroundImage: ''
                }
            };
        },
        computed: {
            pageSetting() {
                return this.$store.state.editor.pageData.setting;
            }
        },
        watch: {
            visible(newVal) {
                this.dialogVisible= newVal;
                if (newVal) {
                    this.form.page_name = this.pageSetting.page_name;
                    this.form.page_desc = this.pageSetting.page_desc;
                    this.form.page_backgroundColor = this.pageSetting.page_backgroundColor;
                    this.form.page_backgroundImage = this.pageSetting.page_backgroundImage;
                }
            },
        },
        methods: {
            ...mapMutations({
                setPageData: 'editor/SET_PAGE_DATA'
            }),
            handleClose() {
                this.resetForm();
            },
            submitForm() {
                // 修改vuex中的值
                this.setPageData(cloneForce(this.form));
                // 广播pageSetting时间
                this.$bus.emit('page-setting', this.form);
                this.resetForm();
            },
            resetForm() {
                this.dialogVisible = false;
                this.$emit('update:visible', false);
                this.$refs['ruleForm'].resetFields();
            }
        }
    };
</script>

<style lang="scss" scoped>
.el-color-picker__panel {
    z-index: 10000 !important;
    /deep/ .el-dialog__wrapper {
        z-index: 2100;
    }
}
</style>