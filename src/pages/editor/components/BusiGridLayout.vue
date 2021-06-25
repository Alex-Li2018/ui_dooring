<template>
    <div
        v-clickoutside="handleClickOutside"
        class="grid-layout_wrap"
        :style="{
            backgroundColor,
            backgroundImage: backgroundImage ? 'url(' + backgroundImage + ')' : 'none',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
        }"
    >
        <grid-layout
            :layout.sync="uiLayout"
            :col-num="12"
            :row-height="1"
            :is-draggable="true"
            :is-resizable="true"
            :vertical-compact="verticalCompact"
            :margin="[0, 0]"
            :use-css-transforms="false"
            @layout-updated="layoutUpdatedEvent"
        >
            <grid-item
                v-for="(item, index) in uiLayout"
                :key="index"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                class="hoverStyle"
            >
                <div
                    class="com-layout-outer"
                    @keyup.delete="handlerDelete"
                    @contextmenu.prevent.stop="rightClickHandler(item, $event)"
                >
                    <BusiComLayout 
                        :key="item.i"
                        :uniqueKey="item.i"
                        :app="item.app"
                        :comProps="item.comProps"
                        :comName="item.name"
                    />
                </div>
            </grid-item>
        </grid-layout>
        <!-- 固定类组件 -->
        <div
            v-show="fixLayout.length"
            class="fixed_layout hoverStyle"
        >
            <div
                v-for="item in fixLayout"
                :key="item.i"
                class="fixed_wrap"
                :style="{
                    bottom: item.y,
                    left: item.x
                }"
                @keyup.delete="handlerDelete"
                @contextmenu.prevent.stop="rightClickHandler(item, $event)"
            >
                <BusiComLayout 
                    :key="item.i"
                    :uniqueKey="item.i"
                    :app="item.app"
                    :comProps="item.comProps"
                    :comName="item.name"
                />
            </div>
        </div>
        <!-- 右键鼠标菜单 -->
        <BusiMouseRight
            :ishow.sync="ishowMouse"
            :uniqueKey="uniqueKey"
            :left="left"
            :top="top"
            @on-delete="handlerDelete"
            @on-copy="handlerCopy"
        />
    </div>
</template>

<script>
    import busiApi from '@/api/busi';
    import { mapMutations } from 'vuex';
    import schema from '@/materials/schema';
    import VueGridLayout from 'vue-grid-layout';
    import { cloneForce } from '@/util/cloneDeep';
    import Clickoutside from 'element-ui/src/utils/clickoutside';
    import BusiComLayout from './BusiComLayout.vue';
    import BusiMouseRight from './BusiMouseRight.vue';

    export default {
        components: {
            GridLayout: VueGridLayout.GridLayout,
            GridItem: VueGridLayout.GridItem,
            BusiComLayout,
            BusiMouseRight
        },
        directives: { 
            Clickoutside 
        },
        data(){
            return {
                verticalCompact: true,
                uiLayout: [],
                left: 0,
                top: 0,
                ishowMouse: false,
                uniqueKey: null,
                id: null,
                backgroundColor: '#fff',
                backgroundImage: '',
                fixLayout: []
            };
        },
        computed: {
            pageSetting() {
                return this.$store.state.editor.pageData.setting;
            }
        },
        watch: {
            pageSetting(newVal) {
                this.backgroundColor = newVal.page_backgroundColor;
                this.backgroundImage = newVal.page_backgroundImage;
            }
        },
        created() {
            this.id = this.$route.query.id;
            this.id && this.loadData();
        },
        mounted() {
            // 固定的layout
            this.$bus.on('fixed-layout', (res) => {
                if (this.fixLayout.length > 0) {
                    return this.$message({
                        message: '只能添加一个按钮组件',
                        type: 'warning'
                    });
                }
                    
                const comSchema = cloneForce(schema[res.name]);
                // i 为唯一表示符
                res.i = `fixed_${res.name}-${this.uiLayout.length + 1}`;
                this.fixLayout.push({
                    i: res.i,
                    x: res.x,
                    y: res.y,
                    w: res.w,
                    h: res.h,
                    name: res.name,
                    name_ch: res.name_ch,
                    app: res.app,
                    comProps: cloneForce(comSchema.config)
                });
                this.setRightDrwerData(comSchema, res);
                this.setFixedLayout(this.fixLayout);
            });
            // 新增layout
            this.$bus.on('add-layout', (res) => {
                this.handlerCreate(res);
            });
            // 按个layout数据更新
            this.$bus.on('update-layout', (res) => {
                if (!res.key.includes('fixed')) {
                    this.uiLayout.forEach(item => {
                        if (item.i === res.key) {
                            item.comProps = cloneForce(res.comProps);
                        }
                    });

                    this.setUILayout(this.uiLayout);
                } else {
                    // 更新固定定位的组件
                    this.fixLayout.forEach(item => {
                        if (item.i === res.key) {
                            item.comProps = cloneForce(res.comProps);
                        }
                    });
                    this.setFixedLayout(this.fixLayout);
                }
            });
            // 操作layout
            this.$bus.on('operate-Layout', (res) => {
                switch(res) {
                case 'previous':
                    break;
                case 'next':
                    break;
                case 'clear':
                    this.uiLayout = [];
                    break;
                default:
                    break;
                }
                this.setUILayout(this.uiLayout);
            });
            // 颜色,背景改变
            this.$bus.on('page-setting', res => {
                this.backgroundColor = res.page_backgroundColor;
                this.backgroundImage = res.page_backgroundImage;
            });
        },
        methods: {
            ...mapMutations({
                setShowDrawer: 'editor/SET_SHOW_DRAWER',
                setUniquekey: 'editor/SET_UNIQUEKEY',
                setForm: 'editor/SET_FORM',
                setEditorData: 'editor/SET_EDITOR_DATA',
                setUILayout: 'editor/SET_UI_LAYOUT',
                setPageData: 'editor/SET_PAGE_DATA',
                setFixedLayout: 'editor/SET_FIXED_LAYOUT'
            }),
            async loadData() {
                const { data } = await busiApi.getPageDetail(this.id);

                const setting = data?.content?.setting || {
                    page_name: data?.name,
                    page_desc: '',
                    page_backgroundColor: '#fff',
                    page_backgroundImage: ''
                };
                this.setPageData(setting);
                // 组装数据
                const obj = {
                    'button': () => import('@/materials/fixed/button'),
                    'doubleButton': () => import('@/materials/fixed/doubleButton'),
                    
                    'swiper': () => import('@/materials/base/swiper'),
                    'singleImage': () => import('@/materials/base/singleImage'),
                    'doubleImage': () => import('@/materials/base/doubleImage'),
                    'video': () => import('@/materials/base/video'),
                    'title': () => import('@/materials/base/title'),
                    'split': () => import('@/materials/base/split'),
                    'textSplit': () => import('@/materials/base/textSplit'),
                    'text': () => import('@/materials/base/text')
                };
                const material = data?.content?.material || [];
                this.uiLayout = material.map((item, index) => ({
                    id: index, 
                    app: obj[item.name], 
                    i: item.i,
                    x: item.x,
                    y: item.y,
                    w: item.w,
                    h: item.h,
                    name: item.name,
                    name_ch: item.name_ch,
                    comProps: cloneForce(item.config)
                }));
                this.setUILayout(this.uiLayout);

                const fixedMaterial = data?.content?.fixed_material || [];
                this.fixLayout = fixedMaterial.map((item, index) => ({
                    id: index, 
                    app: obj[item.name], 
                    i: item.i,
                    x: item.x,
                    y: item.y,
                    w: item.w,
                    h: item.h,
                    name: item.name,
                    name_ch: item.name_ch,
                    comProps: cloneForce(item.config)
                }));
                this.setFixedLayout(this.fixLayout);
            },
            rightClickHandler(item, e) {
                this.uniqueKey = item.i;
                this.left = e.clientX + 'px';
                this.top = e.clientY + 'px';
                this.ishowMouse = true;
            },
            handleClickOutside() {
                this.ishowMouse = false;
            },
            handlerDelete(key) {
                if (!key.includes('fixed')) {
                    // 删除对应的元素
                    const index = this.uiLayout.findIndex(item => item.i === key);
                    this.uiLayout.splice(index, 1);
                } else {
                    const index = this.fixLayout.findIndex(item => item.i === key);
                    this.fixLayout.splice(index, 1);
                }  
                this.setShowDrawer(false);              
            },
            handlerCopy(index) {
                console.log(index);
                const arr = this.uiLayout.filter(item => item.i === index);
                console.log(arr);
                if (arr.length) {
                    this.handlerCreate(arr[0]);
                }
            },
            handlerCreate(res) {
                const comSchema = cloneForce(schema[res.name]);
                // i 为唯一表示符
                res.i = `${res.name}-${this.uiLayout.length + 1}`;
                
                const y = this.uiLayout.reduce(function(total, current) {
                    return total += current.h;
                }, 0);

                this.uiLayout.push({
                    i: res.i,
                    x: res.x,
                    y: y,
                    w: res.w,
                    h: res.h,
                    name: res.name,
                    name_ch: res.name_ch,
                    app: res.app,
                    comProps: cloneForce(comSchema.config)
                });
                // 处理右侧栏可编辑表单数据
                this.setRightDrwerData(comSchema, res);
                this.setUILayout(this.uiLayout);
            },
            layoutUpdatedEvent() {
                this.uiLayout.length && this.setUILayout(this.uiLayout);
            },
            setRightDrwerData(comSchema, res) {
                this.setForm(cloneForce(comSchema.config));
                this.setEditorData(cloneForce(comSchema.editorData));
                this.setUniquekey(res.i);
                this.setShowDrawer(true);
            }
        }
    };
</script>

<style lang="scss">
.grid-layout_wrap {
    min-height: 812px;
    position: relative;
    .fixed_layout {
        width: 100%;
        height: 80px;
        cursor: pointer;
        .fixed_wrap {
            width: 100%;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    }
}
.hoverStyle {
    &:hover {
        border: 1px solid #1478FF;
        box-sizing: border-box;
    }
}
.com-layout-outer {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>