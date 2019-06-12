<template>
    <div class="dashboard">
        <div class="row" v-bind:style="{background:bgc2}">
            <ul class="clearfix">
                <li>1</li>
                <li>2</li>
                <li>{{this.$store.state.count}}</li>
                <li @click="increment">4</li>
            </ul>
        </div>
        <div></div>
        <el-switch
        v-model="value2"
        @change="bgc()"
        active-color="#13ce66"
        inactive-color="#ff4949">
        </el-switch>
    </div>
</template>
<script>
 import store from '../../comment/switch.js'
 import {mapActions} from "vuex"
 export default {
    data() {
      return {
        value1: true,
        value2: true,
        bgc2:'aqua',
      }
    },
    methods:{
        bgc(){
            //console.log(this.value2);
            store.commit('increment') //2.官方文档使用方法（但还无法实现存储，刷新后会消失，这是否是vuex的特性？待考察）
            if(this.value2){
                this.bgc2='aqua';
                return;
            }else{
                this.bgc2='blue';
            }
            console.log(this.$store.state.count);
            console.log(this);
            console.log(this.$store.state);
        },
        //1.不可缺 映射组件方法.
        ...mapActions([
             "increment",
        ])
    }
  };
</script>
<style scoped>
ul li{
    width: 25%;
    float: left;
}
div>div:nth-child(1){
    width: 100%;
    height: 33.333vh;
    /* background-color: aqua; */
}
</style>

