<template>
    <div class="top">
        <div id="logo">
            <img src="../assets/img/logo.png">
            <van-icon name="bars" color="white" size="32px" class="menu" tag="div" @click="showPopup"/>
            <van-popup v-model="show" position="right"  class="personal">

            </van-popup>
            <div class="kf"></div>
        </div>
        <div class="tabs">
            <van-tabs v-model="active" background="dodgerblue"  line-width="0" :border=false >
                <van-tab v-for="item in taps" >
                    <div slot="title">
                        <img :src="item.src">
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <van-search placeholder="请输入搜索关键词" v-model="searchValue" background="dodgerblue"/>
    </div>

</template>

<script>
    export default {
        name:'top',
        data() {
            return {
                show: false,//右侧划出栏的控制,
                active:2,
                searchValue:"",
                taps:[
                    {
                        id:1,
                        title:'网上银行',
                        src:require('../assets/img/kf.png')
                    },
                    {
                        id:1,
                        title:'网上银行',
                        src:require('../assets/img/kf.png')
                    },
                    {
                        id:1,
                        title:'网上银行',
                        src:require('../assets/img/kf.png')
                    },
                    {
                        id:1,
                        title:'网上银行',
                        src:require('../assets/img/kf.png')
                    },
                    {
                        id:1,
                        title:'网上银行',
                        src:require('../assets/img/kf.png')
                    },
                    {
                        id:1,
                        title:'网上银行',
                        src:require('../assets/img/kf.png')
                    },
                ]//tab的内容

            }
        },
        methods: {
            showPopup() {
                this.show = true;//右侧划出栏的控制
            }
        }


    }
</script>

<style scoped>
    .top{
        background:dodgerblue;
    }
    #logo{
        background:dodgerblue;
        margin: 0;
    }
    .kf{
        margin: 5px;
        float: right;
        background: url("../assets/img/kf.png");
        height: 32px;
        width: 32px;
    }
    .menu{
        margin: 5px;
        float: right;
    }
    .personal{
        height: 100%;
        width: 65%;
    }
    .tabs{
        margin-top: 1em;
    }

</style>