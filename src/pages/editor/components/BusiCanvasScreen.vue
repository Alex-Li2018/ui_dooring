<template>
    <div
        v-drag
        class="canvas-screen_wrap"
        @mousewheel="handlerMouseWheel"
    >
        <div
            id="drag_target"
            class="drag_target_wrap"
            @mousedown="nullFN($event)"
        >
            <BusiGridLayout ref="gridLayout" />
        </div>
    </div>
</template>

<script>
    import BusiGridLayout from './BusiGridLayout.vue';

    export default {
        components: {
            BusiGridLayout
        },
        directives: {
            drag: {
                // inserted表示一个元素，插入到DOM中会执行inserted函数，只触发一次
                inserted (el) {
                    const target = document.getElementById('drag_target');

                    el.onmousedown = function (e) {
                        const startX = e.offsetX;
                        const startY = e.offsetY;
                        const { offsetLeft } = target;
                        const { offsetTop } = target;
                        // 改变鼠标样式
                        el.style.cursor = 'move';
                        el.onmousemove = function (e) {
                            const moveX = e.offsetX;
                            const moveY = e.offsetY;
                            target.style.left = `${moveX - startX + offsetLeft + 200}px`;
                            target.style.top = `${moveY - startY + offsetTop}px`;
                        };
                        el.addEventListener('mouseup', () => {
                            el.onmousemove = null;
                            el.style.cursor = 'default';
                        });
                    };
                }

            }
        },
        data() {
            return {
                offsetTop: 0,
            };
        },
        methods: {
            nullFN(event) {
                event.stopPropagation();
            },
            handlerMouseWheel(e) {
                // 滚动的时候把鼠标右键的弹出层关闭
                this.$refs.gridLayout.ishowMouse = false;
                // deltaY为正则滚轮向下，为负滚轮向上
                const direction = e.deltaY > 0 ? 'down' : 'up';
                const target = document.getElementById('drag_target');
                const { offsetTop } = target;

                if (direction === 'down') {
                    target.style.top = `${offsetTop - e.deltaY}px`;
                } else {
                    target.style.top = `${offsetTop + (-e.deltaY)}px`;
                }
            }
        }
    };
</script>

<style lang="scss">
.canvas-screen_wrap {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    .drag_target_wrap {
        width: 375px;
        min-height: 812px;
        background-color: #fff;
        box-shadow: 2px 0 10px rgba(0,0,0, .2);
        position: absolute;
        left: 50%;
        margin-left: -200px;
        top: 60px;
        transition: transform .3s ease-out;
    }
}
</style>
