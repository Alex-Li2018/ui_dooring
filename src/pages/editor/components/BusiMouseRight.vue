<template>
    <!-- 鼠标右键的样式 -->
    <div
        v-show="ishow"
        class="react-contexify"
        :style="{ left, top }"
    >
        <div
            class="react-contexify-item"
            @click="handlerDelete"
        >
            删除
        </div>
        <div 
            @click="Handlercopy" 
            class="react-contexify-item"
        >
            复制
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            left: {
                type: [Number, String],
                default: 0
            },
            top: {
                type: [Number, String],
                default: 0
            },
            ishow: {
                type: Boolean,
                default: false
            },
            uniqueKey: {
                type: String,
                default: ''
            }
        },
        created() {

        },
        methods: {
            handlerDelete() {
                this.$emit('update:ishow', false);
                this.$emit('on-delete', this.uniqueKey);
            },
            Handlercopy() {
                this.$emit('update:ishow', false);
                this.$emit('on-copy', this.uniqueKey);
            }
        }
    };
</script>

<style lang="scss">
.react-contexify {
    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 10px 20px rgba(0,0,0,.3), 0 0 0 1px #eee;
    padding: 5px 0;
    min-width: 180px;
    z-index: 1000;
    .react-contexify-item {
        font-size: 14px;
        padding: 6px 12px;
        display: flex;
        text-align: left;
        white-space: nowrap;
        color: #333;
        position: relative;
        line-height: 1.5;
        cursor: pointer;
        &:hover {
            background-color: #1478FF;
            color: #fff;
        }
    }
}
</style>