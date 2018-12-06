<template>
    <div>
        <ui-img src="https://p9.pstatp.com/list/190x124/da76000168f782723b65" style="width:100%;height:35vh"></ui-img>

        <div class="ui-title">基本信息</div>
        <van-cell-group>
            <van-cell title="姓名" :value="data.name"></van-cell>
            <van-cell title="身份证号"></van-cell>
            <van-cell title="出生日期"></van-cell>
            <van-cell title="性别"></van-cell>
            <van-cell title="民族"></van-cell>
            <van-cell title="籍贯"></van-cell>
            <van-cell title="婚姻状况"></van-cell>
            <van-cell title="学历"></van-cell>
            <van-cell title="毕业学校"></van-cell>
            <van-cell title="所学专业"></van-cell>
            <van-cell title="政治面貌"></van-cell>
            <van-cell title="从业日期"></van-cell>
            <van-cell title="家庭联系人"></van-cell>
            <van-cell title="联系人电话"></van-cell>
            <van-cell title="手机号码"></van-cell>
            <van-cell title="电子邮箱"></van-cell>
            <van-cell title="家庭地址" label="因为字比较多,地址要用label来写,会显示在第二排"></van-cell>
        </van-cell-group>

        <div class="ui-title">工作信息</div>
        <van-cell-group>
            <van-cell title="入职日期"></van-cell>
            <van-cell title="工作部门"></van-cell>
            <van-cell title="人员分类"></van-cell>
            <van-cell title="岗位"></van-cell>
            <van-cell title="职务"></van-cell>
            <van-cell title="职业技能等级"></van-cell>
            <van-cell title="办公室电话"></van-cell>
            <van-cell title="健康状况"></van-cell>
        </van-cell-group>

        <div class="ui-title">资格证书</div>
        <div class="ui-content" v-for="item in 3">
            <div class="flex row-between col-center mb5">
                <span>
                    <b>军人证书</b>
                    <span class="f-color-grey f10">x523299187bf</span>
                </span>
                <van-tag plain>特种</van-tag>
            </div>
            <div class="f10 flex row-between col-center">
                <span>贵州贵阳发证机构</span>
                <span>2018-01-01 - 2020-01-01</span>
            </div>
        </div>

        <div class="ui-title">工作简历</div>
        <div>
            <!-- 这里应该是个富文本吧,请用 v-html -->
            <div class="ui-content">暂无</div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['data'],
    }
</script>