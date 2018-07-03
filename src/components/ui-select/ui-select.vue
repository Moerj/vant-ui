<template>
    <!-- 单元格 -->
    <van-field
        v-model="fullText"
        :label="label"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        readonly
        @focus="open()"
    >

        <ui-page ref="popup" style="z-index:100">
            <!-- 操作选中后,显示确定/返回按钮 -->
            <van-nav-bar slot="header" :title="pageTitle" :left-text="isChanged?'确定':''" left-arrow @click-left="backAndConfirm()" />

            <!-- 搜索框 -->
            <van-search v-if="searchable" slot="header" show-action v-model="searchVal" :disabled="isSearching">
                <a v-if="searchVal!=''" slot="action" @click="search(searchVal)" class="f-color-blue ml10 mr10" >搜索</a>
                <a v-else slot="action" class="m7"></a>
            </van-search>

            <!-- 插槽 -->
            <div slot="header" v-if="!searchVal">
                <!-- 可以插入例如tab -->
                <slot></slot>
            </div>

            <!-- 文本提示区 -->
            <div class="f14 f-color-grey text-center">

                <p v-show="!isSearching && loaded && optionsAll.length===0" :data="options">暂无数据</p>

                <p v-show="isSearching || !loaded" class="flex col-center row-center">
                    <van-loading type="spinner" size="16px"/>
                    <span class="ml5">正在搜索数据...</span>
                </p>
            </div>

            <!-- 操作列表区 -->
            <div v-if="optionsAll.length>0">
                <!-- 多选 -->
                <van-checkbox-group v-if="multiple" v-model="selected" :max="max">
                    <van-cell-group>
                        <van-cell v-for="item in optionsAll" :title="item[valueKey]" :key="item.id" @click.native="toggleCheckbox('checkbox'+item.id)">
                            <van-checkbox :name="item.id" :ref="'checkbox'+item.id" shape="square"/>
                        </van-cell>
                    </van-cell-group>
                </van-checkbox-group>
                <!-- 单选 -->
                <van-radio-group v-else v-model="selected">
                    <van-cell-group>
                        <van-cell v-for="item in optionsAll" :key="item.id" :title="item[valueKey]" clickable @click="selected=item.id">
                            <van-radio :name="item.id" />
                        </van-cell>
                    </van-cell-group>
                </van-radio-group>
            </div>
        </ui-page>

    </van-field>
</template>
<script>
    export default {
        name:'ui-select',
        props:{
            label:'',//当前页标题
            modelLabel:{},//回显名称
            value:{},//回显值
            multiple:{
                type:Boolean,
                default:false
            },
            max:{
                type:Number
            },
            options:{
                type:Array,
                default:function(){
                    return []
                }
            },
            searchable:{
                type:Boolean,
            },
            required:Boolean,
            disabled:{
                type:Boolean,
                default:false
            },
            placeholder:String,
            valueKey:{
                type:String,
                default:'text'
            }
        },
        data(){
            return {
                //数据源
                optionsAll: this.options.length?this.options : [],
                searchVal: '',
                selected: this.multiple ? [] : '', //当前可见列表选中项,它不包括被搜索过滤掉的列表选中项
                isSearching: false,//true搜索请求中, false搜索完毕
                searchTimeOut:null,
                loaded:false,//数据源已加载过
                fullText:'',
                fullId:'',
                oldSelected:'',//上次保存的值
            }
        },
        computed:{
            pageTitle(){
                if (this.multiple) {
                    let num = this.selected.length>0 ? `(${this.selected.length})` : ''
                    return this.label + num
                }
                // 单选标题不加选中个数
                return this.label
            },
            isChanged(){
                let newVal,oldVal
                if (this.selected.constructor === Array) {
                    newVal = this.selected.sort() + ''
                }else{
                    newVal = this.selected + ''
                }
                if (this.oldSelected.constructor === Array) {
                    oldVal = this.oldSelected.sort() + ''
                }else{
                    oldVal = this.oldSelected + ''
                }
                return newVal !== oldVal
            },
        },
        watch:{
            selected(v){//选中后带回参数到父页面
                if (this.multiple) {
                    this.fullText = ''
                    this.fullId = ''
                    this.optionsAll.forEach((item)=>{
                        this.selected.forEach((currSelected)=>{
                            if (item.id === currSelected) {
                                this.fullText += item[this.valueKey] + ','
                                this.fullId += item.id + ','
                            }
                        })
                    })
                    this.fullId = this.fullId.replace(/,$/,'')
                    this.fullText = this.fullText.replace(/,$/,'')
                    this.$emit('input',this.fullId)
                }else{
                    this.$emit('input',v)
                    this.optionsAll.forEach((item)=>{
                        if (item.id === v) {
                            this.fullText = item[this.valueKey]
                        }
                    })
                }
            },
            options(v){//外层数据源变动
                clearTimeout(this.searchTimeOut)
                let selectedArr = this.getSelectedArray()
                // 构建新数据源, 剔除历史已选项
                let newOption = [...v]
                selectedArr.forEach((sitem)=>{
                    newOption.forEach((item,i)=>{
                        if (sitem.id === item.id) {
                            newOption.splice(i,1)
                        }
                    })
                })
                // 生成新数据源
                this.optionsAll = Array.from(new Set([...selectedArr,...newOption]))
                this.loaded = true
                this.isSearching = false
            },
            value(v){//根据v-model选中
                if (this.options.length && v && this.$refs.popup.active===false) {
                    if (this.multiple) {
                        this.selected = v.split(',')
                    }else{
                        this.selected = v
                    }
                }
            },
            searchVal(v){//搜索框清空时触发重置搜索列表
                if (v==='') {
                    this.search('')
                }
            }
        },
        methods:{
            getSelectedArray(){// 构建历史已选项
                let selectedArr = []

                // 构建回显默认选中的
                if (this.value) {
                    if (this.multiple) {
                        this.selected = this.value.split(',')
                    }else{
                        this.selected = this.value
                    }
                }

                // 构建之前选过的
                const currentOpt = this.optionsAll.length===0 && this.value ? this.options : this.optionsAll
                currentOpt.forEach((item)=>{
                    if (this.multiple) {
                        this.selected.forEach((sv)=>{
                            if (item.id === sv) {
                                selectedArr.push(item)
                            }
                        })
                    }else{
                        // 单选
                        if (item.id === this.selected) {
                            selectedArr.push(item)
                        }
                    }
                })
                return selectedArr
            },
            open(){//开启当前组件
                if (this.disabled) return;
                this.oldSelected = this.selected //记录当前选值
                this.$refs.popup.open()
            },
            close(){//关闭当前组件
                this.$refs.popup.close()
            },
            search(v=''){
                this.searchVal = v
                clearTimeout(this.searchTimeOut)
                this.isSearching = Boolean(this.isSearching)

                // 返回检索关键字和tab
                this.$emit('search',this.searchVal)

                this.isSearching = true
                this.searchTimeOut = setTimeout(() => {
                    this.isSearching=false
                }, 10000);
            },
            reset(){
                this.fullText = ''
                this.selected = this.multiple ? [] : ''//清空已选项
                this.optionsAll.length=0
                this.loaded = false
            },
            backAndConfirm(){
                let selectedArr = this.getSelectedArray()

                this.close()

                // 新/老选值不同时触发change回调
                if (this.isChanged) {
                    this.$emit('change', selectedArr)
                }
                
            },
            toggleCheckbox(ref){//多选单元格点击时触发多选框勾选
                const checkbox = this.$refs[ref][0].$el
                checkbox.querySelector('i').click()
                if (this.selected.length === this.max) 
                    this.$toast('最多选择' + this.max + '项')
            }
        },
        mounted(){
            // 初始已有选项,关闭初始loading
            if (this.options.length>0) {
                this.loaded = true
            }
        },
    }
</script>