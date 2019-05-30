<template>
    <ul>
        <li v-for="item in pr" :key='item.id'>
            
        </li>
        <p>总价:i{{}}</p>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            zong:'',
            dan:[]
        }
    }
}
</script>
