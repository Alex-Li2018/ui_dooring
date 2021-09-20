<template>
    <div class="rich-editor_wrap">
        <quill-editor
            ref="myTextEditor"
            v-model="content"
            :options="quillOption"
            class="ql-editor"
            @change="onEditorChange"
        />
    </div>
</template>

<script>
    import quillOption from './quillConfig';

    export default {
        props: {
            value: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                content: '',
                quillOption
            };
        },
        watch: {
            value: {
                immediate: true,
                handler(newVal) {
                    this.content = newVal;
                }
            }
        },
        methods: {
            onEditorChange() {
                this.$emit('update:value', this.content);
                this.$emit('change', this.content);
            }
        }
    };
</script>

<style lang="scss">
.rich-editor_wrap {
    width: 100%;
    .ql-editor {
        padding: 10px;
        margin-right: -10px;
    }
}
</style>
