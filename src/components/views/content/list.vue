<template>
    <div class="list">
        <el-row>
            <el-col :span="8">
                <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择">
                    <el-option label="日期" value="1"></el-option>
                    <el-option label="姓名" value="2"></el-option>
                    <el-option label="地址" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" ></el-button>
                </el-input>
            </el-col>
        </el-row>
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" v-loading="loading">
            <el-table-column
                prop="date"
                label="日期"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
                width="180">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址">
            </el-table-column>
            <el-table-column>
              <template slot-scope="scope">
                <el-button type="primary" @click="getRandom()">修改</el-button>
                <el-button type="danger" @click="onDelete(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 40]" 
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"><!--数据的个数    参考文章地址：https://www.cnblogs.com/zhoulifeng/p/9395295.html-->
        </el-pagination>
    </div>
</template>
<script>
 import Mock from 'mockjs'
 import mock from '../../../../src/api/mock'
 //import {Loading,options} from 'element-ui';

  export default {
    data() {
      return {
        currentPage:1, //初始页
        pagesize:10,    //    每页的数据
        input: '',
        select: '',
        tableData: [],
        loading: true,
        mockData:[]
      }
    },

    methods:{
        getRandom(){
            // this.mockData = Mock.mock({
            //     "data|1-10": "★",
            //     "boolean|1": true,
            //     "cparagraph|1-2":"@cparagraph(1)",
            //     'canme': '@cname()', //模拟中文姓名
            // })
            // this.tableData.data="this.mockData.data";
            console.log(this.mockData.cparagraph);
            console.log(this.mockData.canme); //姓名
            console.log(this.tableData);
            //console.log(this.tableData.pop());
            console.log(this.tableData[0].date);
            // for(let i=0;i<this.tableData.length;i++){
            //   this.tableData[i].name=this.mockData.canme;
            // }
        },
        onDelete(index){
          //Loading.service(options);
          this.tableData.splice(index,1);

        },
         // 初始页currentPage、初始每页数据数pagesize和数据data
        handleSizeChange: function (size) {
                this.pagesize = size;
                console.log(this.pagesize)  //每页下拉显示数据
                this.loading=true;
        },
        handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
                console.log(this.currentPage)  //点击第几页
                this.loading=true;
        },
        handleUserList() {
             this.$http({
              method:"get",
              url:'/listMock',
            }).then(res=>{
              this.tableData = res.data.list;
            })
        }
    },
    mounted:function(){
      //mock数据
      this.$http({
            method:"get",
            url:'/listMock',
      }).then(res=>{
            this.tableData = res.data.list;
      })
      
    },
    updated:function(){
      setTimeout(() => {
        this.loading = false;
        console.log('1111');
      }, 500);
      console.log(this.loading);
     
      // setTimeout(() => {
      //   this.loading = false;
      // }, 4000);
    },
    // beforeUpdate:function(){
    //   //this.tableData[0].name=this.mockData.cparagraph;
    //   for(let i=0;i<this.tableData.length;i++){
    //     this.tableData[i].name=this.mockData.cparagraph;
    //   }
    //   console.log(this.tableData[0].name);
    // },

    // updated:function(){
    //   //this.tableData[0].name=this.mockData.cparagraph;
    //   this.tableData=null;
    //   alert('1111');
    // }
  }
</script>
<style>
.list{
  padding: 1.2%;
}
.el-input__inner:first-child{
  width: 80px;
}
.el-input__inner:nth-child(2){
  min-width: 120px;
}
</style>
