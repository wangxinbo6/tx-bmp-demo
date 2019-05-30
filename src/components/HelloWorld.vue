<template>
    <div class="hello">
        <div>
            <el-row>
                <el-col :span='24'>
                    <headers></headers>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span='3'>
                    <sidebar></sidebar>
                </el-col>
                <el-col :span='21'>
                     <router-view></router-view>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import headers from "./views/Headers.vue"
import sidebar from "./views/Sidebar.vue"
import dash from "./views/content/Dashboard.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'hellow xin bo 信息安全双重保障'
    }
  },
  components:{  //局部注册组件 
    headers,
    sidebar,
    dash
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
