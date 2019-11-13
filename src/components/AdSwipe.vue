<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(img,index) in imgs" :key="index">
            <img :src="img" width="375" height="200">
        </van-swipe-item>

    </van-swipe>
</template>

<script>
    export default {
        name: "AdSwipe",
        data(){
            return{
                imgs:[
                    'http://image1.ccb.com/cn/mobilev3/privilege_country/upload/20191009_1570603676/20191111103251793141.jpg',
                    'http://imageadv.ccb.com/dolphinfile/2019/09/17964_1_1569823375.jpg',
                    'http://imageadv.ccb.com/dolphinfile/2019/08/17489_3_1566376365.jpg',
                    'http://imageadv.ccb.com/dolphinfile/2019/06/16713_3_1561531429.jpg'
                ]


            }
        }
    }
</script>

<style scoped>

</style>