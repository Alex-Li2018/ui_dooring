<template>
    <div
        class="dynamic-engine_wrap"
        :class="{
            active: isActive,
            move: isCursor
        }"
        @mouseover="handlerMouseOver"
        @mouseleave="handlerMouseLeave"
        @click="handlerComponentTap"
    >
        <component
            :is="app"
            :isTpl="true"
        />
    </div>
</template>

<script>
    export default {
        props: {
            app: {
                type: Function,
                default: () => {}
            },
            comDetail: {
                type: Object,
                default: () => ({})
            }
        },
        data() {
            return {
                isActive: false,
                isCursor: false
            };
        },
        methods: {
            handlerMouseOver() {
                this.isActive = true;
                this.isCursor = true;
            },
            handlerMouseLeave() {
                this.isActive = false;
                this.isCursor = false;
            },
            handlerComponentTap() {
                // 新增布局的广播
                const eventName = this.comDetail.category !== 'fixed' ? 'add-layout' : 'fixed-layout';
                this.$bus.emit(eventName, this.comDetail);
            }
        }
    };
</script>

<style lang="scss">
.dynamic-engine_wrap {
    border: 2px solid hsla(0,0%,62%,.24);
    margin-left: 10px;
    margin-top: 10px;
    &.active {
        border-color: #1478FF !important;
    }
    &.move {
        cursor: pointer;
    }
}
</style>
