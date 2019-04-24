<template>
    <div class="dashboard">
        <div class="row" v-bind:style="{background:bgc2}">
            <ul class="clearfix">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
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
            console.log(this.value2);
            console.log(store);
            if(this.value2){
                this.bgc2='aqua';
                return;
            }else{
                this.bgc2='blue';
            }
        }
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

