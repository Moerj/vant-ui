<template>
    <v-touch @swipeleft="$emit('swipeleft')" @swiperight="$emit('swiperight')"
        v-bind:swipe-options="{ direction:'horizontal' }" :id="id" class="mescroll">
        <!-- 必须多套一层,不然 MeScroll 生成的 mescroll-upwarp 会跑到列表前面 -->
        <div>
            <slot></slot>
        </div>
        <div v-show="!loading&&(!value||!value.length)">
            <slot name="empty"></slot>
        </div>
    </v-touch>
</template>
<script>
    import MeScroll from './mescroll.m'
    import './mescroll.min.css'
    export default {
        name: "ui-pull",
        props: {
            value: Array, //list数据源
            total: Number,
            disablePullUp: {
                type: Boolean,
                default: false
            },
            disablePullDown: {
                type: Boolean,
                default: false
            },
            num: Number,
            pageSize: {
                type: Number,
                default: 10
            },
            immediateCheck:{//是否在初始化时立即执行滚动位置检查
                type:Boolean,
                default: true
            },
            emptyText:{
                type: String,
                default: '暂无相关数据~'
            },
            emptyIcon:{
                type: String,
                default: null
            }
        },
        data() {
            return {
                uiPullInstance: null,
                id: 'ui-pull-' + this._uid,
                initNum: this.num,
                loading: true
            }
        },
        mounted() {
            const CONFIG = {
                down: {
                    use: !this.disablePullDown,
                    callback: this.pullDownCallback, //下拉刷新的回调
                    auto: false, //是否在初始化完毕之后自动执行一次下拉刷新的回调
                    autoShowLoading: true, //当设置auto=true时(在初始化完毕之后自动执行下拉刷新的回调)是否显示下拉刷新的进度
                },
                up: {
                    use: !this.disablePullUp,
                    callback: this.pullUpCallback, //上拉加载回调
                    auto: this.immediateCheck, //是否在初始化完毕之后自动执行一次上拉加载的回调
                    scrollbar: {
                        use: false
                    }, //是否开启自定义滚动条
                    empty: !this.$scopedSlots.empty && {
                        warpId: this.id,
                        icon: this.emptyIcon,
                        tip: this.emptyText,
                    },
                    page: {
                        size: this.pageSize
                    },
                }

            }

            this.uiPullInstance = new MeScroll(this.id, CONFIG);
        },
        methods: {
            pullDownCallback(instance) {
                this.$emit('update:num', this.initNum)
                this.$emit('load', instance)
                this.loading = true
            },
            pullUpCallback(dataSize, instance) {
                this.loading = true
                this.$emit('load', instance)
            },
            endSuccess() {
                this.$nextTick(() => {
                    /**加载完成
                     * @param {Number} 当前页总数据长度
                     * @param {Boolean} 是否还有下一页
                     */
                    const hasNext = this.value.length < this.total
                    // console.log('是否还有下一页:', hasNext);
                    this.uiPullInstance.endSuccess(this.value.length, hasNext)
                    this.loading = false
                })
            },
            // endErr() {
            //     this.uiPullInstance.endErr() //隐藏下拉刷新和上拉加载的状态
            // },
            reload() { //用于点击tab重新加载数据
                this.$emit('update:num', this.initNum)
                this.$emit('input', [])
                this.uiPullInstance.resetUpScroll() //重置列表为第一页 (常用于列表筛选条件变化或切换菜单时重新刷新列表数据)
                this.loading = false
            },
        },
    }
</script>