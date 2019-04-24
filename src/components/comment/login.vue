<template>
    <div class="bg">
        <div class="login">
            <dl :span='20'>
                <dt>用户登录</dt>
                <dd><el-input v-model="userName" placeholder="输入用户名"></el-input></dd>
                <dd><el-input v-model="passWord" placeholder="输入密码" type="password"></el-input></dd>
                <dd>
                    <el-button @click='onSubmit()'>登录</el-button>
                </dd>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            userName:'',
            passWord:'',
        }
    },
    methods:{
        alerts(a){
            console.log(a);
        },
        onSubmit(){
            if(this.userName!=''&&this.passWord!=''){
                console.log(this.userName+'和'+this.passWord);
                this.$options.methods.alerts('成功');
                return;
            }else{
                alert('请输入用户名密码！！！！');
                this.$options.methods.alerts('失败');
            }
        }
    }
}
</script>

<style>
    body{
        height: 100vh;
        background-color: #4e73df;
        background-image: -webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));
        background-image: linear-gradient(180deg,#4e73df 10%,#224abe 100%);
        background-size: cover;
    }
    .login{
        width: 80%;
        margin: 0 auto;
    }
</style>

