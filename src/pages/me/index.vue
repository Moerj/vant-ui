<style lang="scss" scoped>
    .con{
        background-color: #fff;
        position: relative;
    }
    .bg{
        width: 100%;
        height: 50vh;
    }
    .card{
        position: absolute;
        top: -160px;
        left: 10px;
        right: 10px;
        background-color: #fff;
        border-radius: 10px;
        height: 200px;
        box-shadow: 0 0 5px rgba(#26a2ff,.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .avatar{
            width: 94px;
            height: 94px;
            border-radius: 100%;
            background-color: #00A2D9;
            color:#fff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate3d(-50%,-50%,0);
        }
    }
</style>
<template>
    <ui-main>
        <div class="flex-column h-100">
            <img src="../login/login-bg.jpg" class="bg flex-1" style="filter:blur(2px)">
            <div class="con flex-1">
                <div class="card">
                    <div class="avatar">
                        <van-icon name="contact" size="40px"></van-icon>
                    </div>
                    <p class="f18 f-bold text-center">博益科技</p>
                    <div class="f16 opacity-05 text-center">1808888888</div>
                </div>

                <van-cell-group class="mt50">
                    <van-cell title="个人档案" is-link @click="$refs.userInfo.open()">
                        <template v-slot:icon>
                            <van-icon name="description" size="22px" class="mr5 c-blue"></van-icon>
                        </template>
                    </van-cell>
                    <van-cell title="设置" is-link @click="$refs.setting.open()">
                        <template v-slot:icon>
                            <van-icon name="setting" size="22px" class="mr5 c-blue"></van-icon>
                        </template>
                    </van-cell>
                </van-cell-group>
            </div>
        </div>


        <ui-page title="个人档案" ref="userInfo">
            <van-cell-group>
                <van-cell title="单位" value="贵州博益科技"></van-cell>
                <van-cell title="职务" value="程序猿"></van-cell>
                <van-cell title="类别" value="技术"></van-cell>
            </van-cell-group>
        </ui-page>

        <ui-page title="设置" ref="setting" class="bg-white">
            <img src="https://img.yzcdn.cn/public_files/2017/12/18/fd78cf6bb5d12e2a119d0576bedfd230.png" width="100" class="mt100 auto-center">
            <div class="abs-left-bottom w-100 ui-content text-center">
                <p class="f18 f-bold">xxx科技有限公司</p>
                <div class="c-grey">版本号: {{appVersion}}</div>
                <van-button type="danger" plain size="large" class="mt50 mb50" @click="logout">退出登录</van-button>
            </div>
        </ui-page>
    </ui-main>
</template>
<script>
    export default {
        data() {
            return {
                appVersion:process.env.APP_VERSION,
            };
        },
        methods: {
            logout() {
                this.$dialog.confirm({
                    title: '提示',
                    message: '确认退出吗?'
                }).then(() => {
                    // on confirm
                    sessionStorage.clear()
                    localStorage.clear()
                    this.$router.push('/login')
                }).catch(() => {
                    // on cancel
                });
            }
        },
    }

</script>
