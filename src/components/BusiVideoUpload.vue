<template>
    <!-- 图片上传的组件 -->
    <div class="image-upload">
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
                type: String,
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

                if (size > 500000) {
                    this.errTip = '附件不能大于500M';
                    this.clearValue();
                    return false;
                }

                // 限制上传的文件格式
                const { name } = files;
                const fileName = name.substring(name.lastIndexOf('.') + 1).toLowerCase();
                if (this.type == 'mp4'
                    && fileName != 'mp4'
                    && fileName != '3gp'
                    && fileName != 'webm') {
                    this.errTip = '请选择图片格式文件上传(mp4,3gp,webm等)！';
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
            },
            handlerInputChange() {
                this.$emit('update:value', this.input);
                this.$emit('change', { src: this.input, poster: '' });
            },
            uploadSucess() {
                // 上传视频成功(取视频的第一帧)
                const suffix = this.input.indexOf('?') > -1 ? '&' : '?';
                const compressSuffix = '&imageView2/2/w/500/format/jpg/interlace/1/q/100|imageslim';
                const imgUrl = `${this.input}${suffix}vframe/jpg/offset/1${compressSuffix}`;
                return imgUrl;
            }
        }
    };
</script>

<style lang="scss" scoped>
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
