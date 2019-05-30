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
import store from '../comment/switch.js'
import vueRouter from '../../router'
import {mapActions} from "vuex"
export default {
    data(){
        return{
            userName:'admin',
            passWord:'admin',
            loginForm:{
                userName:'admin',
                passWord:'admin'
            }
        }
    },
    methods:{
        alerts(a){
            console.log(a);
        },
        onSubmit(){
            if(this.userName==this.loginForm.userName&&this.passWord==this.loginForm.passWord){
                //console.log(this.userName+'和'+this.passWord);
                this.$options.methods.alerts('成功');
                this.$message({
                    showClose: true,
                    message: '登陆成功', 
                    type: 'success'
                });
                store.commit('increment') // 改变权限状态
                 this.$router.push({
                    path:'/',
                })
                return; 
            }else if(this.userName==''){
                this.$message({
                    showClose: true,
                    message: '请输入用户名',
                    type: 'warning'
                });
                console.log(this.$message); 
            }else if(this.passWord==''){
                this.$message({
                    showClose: true,
                    message: '请输入密码',
                    type: 'warning'
                });
            }else{
                this.$message({
                    showClose: true,
                    message: '账户名或密码错误',
                    type: 'error'
                });
            }
        },
        ...mapActions([
            "increment",
        ])
    }
}
</script>

<style>
    .bg{
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

