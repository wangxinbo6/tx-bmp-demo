<template>
    <el-row class="tac">
        <el-col :span="24">
            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
                </template>
                <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1" @click="goto('/dash')">
                  <i class="el-icon-caret-right"></i>
                  <span>go</span>
                </el-menu-item>
                <el-menu-item index="1-2" @click="goto('/dashTwo')">
                  <i class="el-icon-caret-right"></i>
                  <span>fly</span>
                </el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">
                  <router-link to="/login">登录</router-link>
                </span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4" @click="goto('/dashTwo')">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      goto(http){
        this.$router.push(http);
      }
    }
  }
</script>
<style>
.el-submenu .el-menu-item{
  min-width: 30px;
}
</style>
