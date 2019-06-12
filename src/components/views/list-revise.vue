<template>
    <el-form id="revise" :model="formDatas" ref="formDatas">
        <div class="revise">
            <el-dialog
            v-bind:title='title'
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <div class="date">
                <el-row>
                    <el-col :span="4">日期：</el-col>
                    <el-col :span="18">
                        <el-input
                        :span='12'
                        type='date'
                        placeholder="请输入内容"
                        v-model="formDatas.input"
                        clearable>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="name">
                <el-row>
                    <el-col :span="4">姓名：</el-col>
                    <el-col :span="18">
                        <el-input
                        :span='12'
                        placeholder="请输入内容"
                        v-model="formDatas.input2"
                        clearable>
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <div class="address">
                <el-row>
                    <el-col :span="4">地址：</el-col>
                    <el-col :span="18">
                        <el-input
                        type="textarea"
                        :span='12'
                        :rows="2"
                        placeholder="请输入内容"
                        v-model="formDatas.address">
                        </el-input>
                    </el-col>
                </el-row>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false||clearInput()">取 消</el-button>
                <!-- <el-button @click="clearInput()">重置</el-button> -->
                <el-button type="primary" @click="dialogVisible = false||change()">{{buttonTrue}}</el-button>
            </span>
            </el-dialog>
        </div>
    </el-form>
</template>

<script>
  import {mapActions} from "vuex"
import store from '../comment/switch'
  export default {
    data() {
      return {
        dialogVisible: false,
        buttonTrue:'修 改',
        title:'确定修改吗',
        formDatas:{
            address:'',
            input:'',
            input2:'',
        }
      };
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            this.clearInput();//调用清除方法
            done();
          })
          .catch(_ => {});
      },
      change(){
          console.log(this.input+'  '+this.input2+'   '+this.address)
          //根据vuex状态值来判断执行哪个方法
          if(this.$store.state.count2=='change'){
              this.$emit('showbox',true);
          }else{
              this.$emit('showboxx',true);
          }
          
      },
      clearInput(){
        for(var name in this.formDatas){
            this.formDatas[name]=''
        }
      }
    },
  };
</script>
<style>
    .revise .name,.revise .date,.revise .address{
        margin-bottom: 20px;
    }
    .revise .name .el-row,.revise .date .el-row{
        height: 40px;
        line-height: 40px;
    }
</style>
