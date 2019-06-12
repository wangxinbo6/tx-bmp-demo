<template>
    <div class="dashboardTwo">
        <div class="row">
            <ul class="clearfix">
                <li @click="cctv()">4点击</li>
                <li>3</li>
                <li v-if="this.msg==true">权限到了</li>
                <li>{{msg}}</li>
            </ul>
        </div>
        <div></div>
    </div>
</template>
<script>
 import store from '../../comment/switch.js'
export default {
    data(){
        return{
            msg:this.$store.state.count
        }
    },
    methods:{
        cctv(){
            console.log(this.msg);
            console.log(this.$store.state.count);
        }
    }
}
</script>
<style scoped>
ul{
    border:1px solid #ccc;
    height: 300px;
}
ul li{
    width: 25%;
    height: 300px;
    float: left;
    cursor: pointer;
}
div>div{
    width: 100%;
    height: 120vh;
    background-color: rgb(255, 249, 197);
}
</style>
