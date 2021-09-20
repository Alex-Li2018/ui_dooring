<template>
    <div class="swiper-upload_wrap">
        <vuedraggable
            v-model="swipers"
            class="wrapper"
        >
            <transition-group>
                <div
                    v-for="(item, index) in swipers"
                    :key="item.id"
                    class="item"
                >
                    <div class="label">
                        第{{ index + 1 }}张轮播图
                    </div>
                    <BusiImgUpload :value.sync="item.src" />
                    <div class="label">
                        交互
                    </div>
                    <el-input
                        v-model="item.schemaUrl"
                    />
                    <el-button
                        type="danger"
                        class="mar-top-10"
                        @click="handlerDelete(item.id)"
                    >
                        删除
                    </el-button>
                </div>
            </transition-group>
        </vuedraggable>
        <el-button
            type="primary"
            @click="handlerAddSwiper"
        >
            添加轮播图
        </el-button>
    </div>
</template>

<script>
    import vuedraggable from 'vuedraggable';
    import { cloneForce } from '@/util/cloneDeep';
    import BusiImgUpload from './BusiImgUpload.vue';

    export default {
        components: {
            vuedraggable,
            BusiImgUpload
        },
        props: {
            value: {
                type: Array,
                default: () => []
            }
        },
        data() {
            return {
                swipers: []
            };
        },
        watch: {
            value: {
                immediate: true,
                handler(newVal) {
                    this.swipers = cloneForce(newVal);
                }
            },
            swipers: {
                deep: true,
                handler(newVal) {
                    this.$emit('update:value', newVal);
                    this.$emit('change', newVal);
                }
            }
        },
        methods: {
            handlerAddSwiper() {
                this.swipers.push({
                    id: this.swipers.length + 2,
                    src: '',
                    schemaUrl: ''
                });
            },
            handlerDelete(key) {
                const index = this.swipers.findIndex(item => item.id === key);
                this.swipers.splice(index, 1);
            }
        }
    };
</script>

<style lang="scss" scoped>
.swiper-upload_wrap {
    padding-left: 10px;
    .item {
        padding: 10px;
        margin-bottom: 20px;
        border: 1px dashed #1478FF;
        cursor: move;
    }
    .label {
        font-size: 14px;
        color: #606266;
        line-height: 40px;
    }
}
</style>
