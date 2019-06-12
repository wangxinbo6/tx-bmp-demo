<template>
    <div class="list">
        <el-row>
            <el-col :span="8">
                <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                <el-select v-model="select" slot="prepend" placeholder="请选择" class="select">
                    <el-option label="日期" value="1"></el-option>
                    <el-option label="姓名" value="2"></el-option>
                    <el-option label="地址" value="3"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" ></el-button>
                </el-input>
            </el-col>
            <el-col :span="4">
              <el-button type="success" plain @click="addList()">添加</el-button>
            </el-col>
        </el-row>
        <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe style="width: 100%" v-loading="loading">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
                prop="date"
                sortable
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
            <el-table-column fixed="right" label="操作">
              <template slot-scope="scope">
                <el-button type="primary" @click="getRandom(scope.$index)">修改</el-button><!--🐳-->
                <el-button type="danger" @click="onDelete(scope.$index)">删除</el-button>
              </template>
            </el-table-column>
        </el-table>
        <el-pagination
          class="fy"
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 30]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"><!--🐳数据的个数    参考文章地址：https://www.cnblogs.com/zhoulifeng/p/9395295.html-->
        </el-pagination>
        <revise ref="child" @showbox="changed()" @showboxx="adds()"></revise>
    </div>
</template>
<script>
 import Mock from 'mockjs'
 import mock from '../../../../src/api/mock'
 import revise from '../../views/list-revise'
 import store from '../../comment/switch'
 import {mapActions} from "vuex"
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
        mockData:[],
        dialogVisible:false,
        listIndex:'',
      }
    },
    methods:{
        getRandom(index){
          //alert('修改功能待添加');
          //父组件修改子组件中的data
          //store.commit('increment') 
          store.commit('change');
          console.log(this.$store.state.count2);
          this.$refs.child.dialogVisible = true;
          this.$refs.child.title = "确定修改吗";
          this.$refs.child.formDatas.input = this.tableData[index].date;
          this.$refs.child.formDatas.input2 = this.tableData[index].name;
          this.$refs.child.formDatas.address = this.tableData[index].address;
          //console.log(this.tableData[index].date)
          //存下一个数组下标。 更改的时候用到
          this.listIndex=index;
        },
        onDelete(index){
          //Loading.service(options);
          this.tableData.splice(index,1);
          this.loading=true;
          // 正常项目的话需要重新请求一次数据
          // this.$http({
          //     method:"get",
          //     url:'/listMock',
          // }).then(res=>{
          //     this.tableData = res.data.list;
          // })
        },
        addList(){
          this.$refs.child.dialogVisible = true;
          this.$refs.child.title = "请添加新用户";
          this.$refs.child.buttonTrue = "增 加";
          this.$refs.child.clearInput();
          store.commit('add');
          console.log(this.$store.state.count2);
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
        //模拟mock数据
        handleUserList() {
            this.$http({
              method:"get",
              url:'/listMock',
            }).then(res=>{
              this.tableData = res.data.list;
            })
        },
        changed(index){
          //下面注释的三行是第一版方法  太low了  下面这行是后续改用的   利用splice对数组对象进行替换  this.listIndex是下标 从哪开始  1是替换一组；
          this.tableData.splice(this.listIndex,1,{"date":this.$refs.child.formDatas.input,"name":this.$refs.child.formDatas.input2,"address":this.$refs.child.formDatas.address});
          // this.tableData[this.listIndex].date = this.$refs.child.input;
          // this.tableData[this.listIndex].name = this.$refs.child.input2; 
          // this.tableData[this.listIndex].address = this.$refs.child.address;
        },
        adds(){
          //console.log('增加成功')
          this.tableData.splice(this.listIndex,0,{"date":this.$refs.child.formDatas.input,"name":this.$refs.child.formDatas.input2,"address":this.$refs.child.formDatas.address});
        },
        ...mapActions([
            "change",
            "add"
        ])
    },
    mounted:function(){
      //mock数据 赋给tableData
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
    },
    components:{  //局部注册
        revise, 
    }
  }
</script>
<style scoped>
.list{
  padding: 1.2%;
}
.fy{
  margin-top: 30px;
}
.select {
  width: 90px;
}
.el-input__inner:nth-child(2){
  min-width: 120px;
}
@media (max-width: 991.98px) { 
  .el-button + .el-button{
    margin-left: 0;
    margin-top: 6px;
  }
}

</style>
