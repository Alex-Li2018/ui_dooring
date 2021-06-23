<template>
    <!-- 图片上传的组件 -->
    <div class="image-upload">
        <div
            v-show="input"
            class="preview_wrap"
        >
            <img
                :src="input"
                class="preview-img_wrap"
            >
        </div>
        <el-input
            v-model="input"
            placeholder="请输入内容"
            :class="{
                'border': errTip 
            }"
            @change="handlerInputChange"
        >
            <el-button
                slot="append"
                icon="el-icon-upload el-icon--right"
                @click="handleClick"
            />
        </el-input>
        <div
            v-if="errTip"
            class="err-tip"
        >
            {{ errTip }}
        </div>
        <input
            ref="input"
            type="file"
            class="el-upload__input"
            @change="handleChange"
        >
    </div>
</template>

<script>
    import { uploadQiniu } from '@/util/qiniuUpload';

    export default {
        name: 'ImageUpload',
        props: {
            value: {
                type: [String, Number],
                default: ''
            }
        },
        data() {
            return {
                input: '',
                errTip: ''
            };
        },
        watch: {
            value: {
                immediate: true,
                handler(newVal) {
                    this.input = newVal;
                }
            }
        },
        methods: {
            clearValue() {
                this.$refs.input.select();
                this.$refs.input.value = '';
            },
            handleClick() {
                // 打开上传文件
                this.$refs.input.click();
            },
            handleChange(ev) {
                // 获取到文件
                const files = ev.target.files[0];
                if (!files) return;
                // 上传
                const before = this.beforeUpload(files);
                if (!before) return;
                this.xhrUpload(files);
            },
            // 上传之前的类型校验
            beforeUpload(files) {
                // 限制上传的代码格式与大小
                const fileSize = files.size;
                const size = fileSize / 1024;

                if (size > 200) {
                    this.errTip = '附件不能大于200kb';
                    this.clearValue();
                    return false;
                }

                // 限制上传的文件格式
                const { name } = files;
                const fileName = name.substring(name.lastIndexOf('.') + 1).toLowerCase();
                if (fileName != 'jpg'
                    && fileName != 'jpeg'
                    && fileName != 'pdf'
                    && fileName != 'png'
                    && fileName != 'dwg'
                    && fileName != 'webp'
                    && fileName != 'gif') {
                    this.errTip = '请选择图片格式文件上传(jpg,png,gif,dwg,pdf,gif等)！';
                    this.clearValue();
                    return false;
                }
                return true;
            },
            // 上传服务器
            async xhrUpload(files) {
                const key = `image_${new Date().getTime()}`
                const res = await uploadQiniu(files, key);
                // 将数据添加到输入框
                this.input = `http://imgcdnstatic.top/${res.key}`;
                this.$emit('update:value', this.input);
                this.$emit('change', this.input);
                // 清楚选中框里的值
                this.clearValue();
            },
            handlerInputChange() {
                this.$emit('update:value', this.input);
                this.$emit('change', this.input);
            }
        }
    };
</script>

<style lang="scss" scoped>
.preview_wrap {
    width: 104px;
    height: 104px;
    padding: 4px;
    border: 1px solid #d9d9d9;
    box-sizing: content-box;
    margin-bottom: 20px;
    .preview-img_wrap {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.button-img-upload {
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    border: 1px solid #409EFF;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
}
.err-tip {
    color: #f56c6c;
    font-size: 12px;
    line-height: 1;
    padding-top: 4px;
}
.border {
    input {
        border-color: #f56c6c;
    }
}
</style>
