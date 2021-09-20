<template>
    <!-- 组件 -->
    <div class="tab-content_wrap">
        <DynamicEngine
            v-for="item in components"
            :key="item.id"
            :app="item.app"
            :comDetail="item"
        />
    </div>
</template>

<script>
    import DynamicEngine from '@/core/DynamicEngine.vue';

    export default {
        components: {
            DynamicEngine
        },
        props: {
            comType: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                componentsBase: [
                    {
                        id: 1,
                        app: () => import('@/materials/base/swiper'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 230,
                        name: 'swiper',
                        name_ch: '轮播图组件',
                        category: 'base'
                    },
                    {
                        id: 2,
                        app: () => import('@/materials/base/singleImage'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 230,
                        name: 'singleImage',
                        name_ch: '单列图片组件',
                        category: 'base'
                    },
                    {
                        id: 3,
                        app: () => import('@/materials/base/doubleImage'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 191,
                        name: 'doubleImage',
                        name_ch: '双列图片组件',
                        category: 'base'
                    },
                    {
                        id: 4,
                        app: () => import('@/materials/base/video'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 230,
                        name: 'video',
                        name_ch: '视频组件',
                        category: 'base'
                    },
                    {
                        id: 5,
                        app: () => import('@/materials/base/title'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 80,
                        name: 'title',
                        name_ch: '标题组件',
                        category: 'base'
                    },
                    {
                        id: 6,
                        app: () => import('@/materials/base/split'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 26,
                        name: 'split',
                        name_ch: '分割线组件',
                        category: 'base'
                    },
                    {
                        id: 7,
                        app: () => import('@/materials/base/textSplit'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 42,
                        name: 'textSplit',
                        name_ch: '文本分割线组件',
                        category: 'base'
                    },
                    {
                        id: 8,
                        app: () => import('@/materials/base/text'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 62,
                        name: 'text',
                        name_ch: '文本组件',
                        category: 'base'
                    },
                    {
                        id: 9,
                        app: () => import('@/materials/base/blank'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 40,
                        name: 'blank',
                        name_ch: '占位组件',
                        category: 'base'
                    }
                ],
                componentsFixed: [
                    {
                        id: 1,
                        app: () => import('@/materials/fixed/button'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 62,
                        name: 'button',
                        name_ch: '按钮组件',
                        category: 'fixed'
                    },
                    {
                        id: 2,
                        app: () => import('@/materials/fixed/doubleButton'),
                        i: '',
                        x: 0,
                        y: 0,
                        w: 12,
                        h: 62,
                        name: 'doubleButton',
                        name_ch: '两个按钮组件',
                        category: 'fixed'
                    },
                ]
            };
        },
        computed: {
            components() {
                return {
                    base: this.componentsBase,
                    fixed: this.componentsFixed
                }[this.comType];
            }
        }
    };
</script>

<style lang="scss" scoped>
.tab-content_wrap {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>
