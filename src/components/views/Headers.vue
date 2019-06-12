<template>
    <div class="headers">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1" @click="goto('/shop')">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1" @click="sotre()">store状态</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="3" disabled>消息中心</el-menu-item>
            <el-menu-item index="4"><a href="http://www.ccsix.cn" target="_blank">订单管理</a></el-menu-item>
            <el-submenu index="5" v-if="this.scc.count==true" style="float:right;">
                <template slot="title"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557552993278&di=f6ec6da63b43ac810d546f8f7ba4a3e6&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F0830450561b24f4573bed70d7f74bd43f39302e11bee-s2tj6i_fw658" height="80%" alt="">用户：王薪博</template>
                <el-menu-item index="5-1">详情</el-menu-item>
                <el-menu-item index="5-2" @click="quit()">退出</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
import Vue from 'vue'
import vueRouter from '../../router'
import store from '../comment/switch.js'
export default {
    name:'headers',
    data() {
        return {
            //问题1：为何 msg 一直为flase 无法获取到count的最新状态， 而scc.count则能？
            msg:this.$store.state.count, 
            scc:this.$store.state,
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        sotre(){
            console.log(this.msg);
            console.log(this.scc);
            console.log(this);
        },
        quit(){
            store.commit('increment') //执行开关方法  自动变false 
            alert(this.scc.count);
            this.$router.push({
                path:'/login',
            });
        }
    },
}
</script>
<style scoped>
  .headers{
    background-image: linear-gradient(180deg,#151618 10%,#224abe 100%);
  }
  .el-submenu__title img{
    margin: 0 10px;
    border-radius: 50%;
  }
  .el-menu-demo{
    background: #202D3D;
  }
  .el-menu--horizontal > .el-menu-item.is-active{
    color:#a8a8a8;
  }
  .el-menu--horizontal > .el-menu-item.is-active:hover{
    color:#303133;
  }
  /* .el-menu--horizontal > .el-menu-item,.el-menu--horizontal > .el-submenu .el-submenu__title{
    color: #fff!important;
  } */

</style>