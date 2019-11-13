<template>
    <div class="top">
        <div id="logo">
            <img src="../assets/img/logo.png">
            <van-icon name="bars" color="white" size="32px" class="menu" tag="div" @click="showPopup"/>
            <van-popup v-model="show" position="right"  class="personal"></van-popup>
            <div class="kf"></div>
        </div>
        <van-tabs>
            <van-tab v-for="index in 8" :title="index">
             
            </van-tab>
        </van-tabs>
    </div>

</template>

<script>
    export default {
        name:'top',
        data() {
            return {
                show: false
            }
        },
        methods: {
            showPopup() {
                this.show = true;
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
</style>