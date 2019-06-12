<template>
    <div class="shop">
        <div class="shop-page">
            <ul>
                <li v-for="item in prs" :key='item.id'>
                    商品价格<i>{{item.num}}</i>
                    <el-button type="primary" @click="goPay()">购买</el-button>
                    <el-button type="primary">取消</el-button>
                </li>
            </ul>
        </div>
        <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>
<script>
import Mock from 'mockjs'
import mock from '../../../../src/api/mock'
export default {
    data(){
        return{
            list_num:[],
            prs: [
                {id:'1', num: '1' },
                {id:'2', num: '2' },
                {id:'3', num: '3' },
                {id:'4', num: '4' },
                {id:'5', num: '5' },
                {id:'6', num: '6' },
                {id:'7', num: '7' }
            ]
        }
    },
    mounted(){
        this.$http({
            method:"get",
            url:'/productlist',
        }).then(res=>{
            this.list_num = res.data.number;
        })
    },
    methods:{
        goPay(){
            for(let i=0; i<this.prs.length;i++){
                console.log(this.prs[i].id);
            }
            console.log('mock到的数据'+this.list_num);
        },
    },
}
</script>
<style>
    .shop{
        width: 100%;
    }
    .shop li{
        width: 25%;
        padding: 100px 0;
        border-bottom: 1px solid #ccc;
        box-shadow: 0px 3px 3px #ededed;
        float: left;
    }
    .shop-page{
        width: 100%;
    }
</style>
