<template>
    <component
        :is="app"
        :isTpl="false"
        v-bind="comProps"
        @click.native="showDrawer"
    />
</template>

<script>
    import { mapMutations } from 'vuex';
    import schema from '@/materials/schema';

    export default {
        props: {
            app: {
                type: Function,
                default: () => {}
            },
            comName: {
                type: String,
                default: ''
            },
            comProps: {
                type: Object,
                default: () => ({})
            },
            uniqueKey: {
                type: String,
                default: ''
            }
        },
        methods: {
            ...mapMutations({
                setShowDrawer: 'editor/SET_SHOW_DRAWER',
                setUniquekey: 'editor/SET_UNIQUEKEY',
                setForm: 'editor/SET_FORM',
                setEditorData: 'editor/SET_EDITOR_DATA'
            }),
            showDrawer() {
                this.setUniquekey(this.uniqueKey);
                this.setShowDrawer(true);
                const comSchema = schema[this.comName];
                this.setEditorData(comSchema.editorData);
                this.setForm(this.comProps);
            }
        }
    };
</script>

<style lang="scss">
</style>