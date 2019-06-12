<template>
    <div class="bg">
        <el-form>
            <div class="login">
                <dl :span='20'>
                    <dt>用户登录</dt>
                    <dd><el-input v-model="userName" placeholder="输入用户名"></el-input></dd>
                    <dd><el-input v-model="passWord" placeholder="输入密码" type="password"></el-input></dd>
                    <dd>
                        <el-col :span='24'>
                            <el-button :span='24' type="primary" @click='onSubmit()'>登录</el-button>
                        </el-col>
                    </dd>
                </dl>
            </div>
        </el-form>
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
        background-color: #2d3a4b;
        background-size: cover;
    }
    .login{
        width: 80%;
        margin: 0 auto;
    }
    .bg dd:nth-child(3){
        margin:20px 0; 
    }
    .bg dt{
        font-size: 26px;
        color: #eee;
        margin: 0px auto 40px auto;
        text-align: center;
        font-weight: bold;
    }
    .bg form{
        position: relative;
        width: 520px;
        max-width: 100%;
        padding: 160px 35px 0;
        margin: 0 auto;
        overflow: hidden;
    }
    .bg input.el-input__inner{
        background-color: #283443;
        border: 1px solid #3E4956;
        color: #fff;
    }
    .bg button{
        width: 100%;
    }
    @media (max-width: 991.98px) { 
        .bg form{
            width: auto;
        }
    }
</style>

