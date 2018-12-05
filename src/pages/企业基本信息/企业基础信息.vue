<template>
    <ui-main>
        <van-cell-group class="mb10">
            <van-cell title="企业名称" value="贵州燃气(集团)有限责任公司" />
            <van-cell title="统一社会信用代码" />
            <van-cell title="工商登记机关" />
            <van-cell title="登记日期"></van-cell>
            <van-cell title="成立日期"></van-cell>
        </van-cell-group>

        <van-cell-group class="mb10">
            <van-cell title="法定代言人" />
            <van-cell title="移动电话"  />
            <van-cell title="办公室电话"  />
        </van-cell-group>

        <van-cell-group class="mb10">
            <van-cell title="联系人" />
            <van-cell title="联系电话" />
            <van-cell title="电子邮箱" />
            <van-cell title="邮政编码" />
        </van-cell-group>

        <van-cell-group class="mb10">
            <van-cell title="经济类型" />
            <van-cell title="行政区域" />
            <van-cell title="行政隶属" />
            <van-cell title="企业状态" />
            <van-cell title="企业安全信息管理展示 X"  value="1°2′3″"/>
            <van-cell title="Y"  value="4°5′6″"/>
            <van-cell title="注册地址"/>
            <van-cell title="经营范围" label="xxx"/>
            <van-cell title="备注" label="xxx"/>
        </van-cell-group>

    </ui-main>
</template>
<script>
    export default {
        data() {
            return {
                form: {
                },
            }
        },
    }

</script>
