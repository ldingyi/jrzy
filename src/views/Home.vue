<template>
   <div>
      <top></top>
      <AdSwipe></AdSwipe>
      <van-notice-bar left-icon="volume-o" :scrollable="false" background="white" class="notice">
         {{noticeMessage}}
      </van-notice-bar>
      <van-tabs>
         <van-tab title="标签 1" to="/">内容 1</van-tab>
         <van-tab title="标签 2" to="/main2">内容 2</van-tab>
         <van-tab title="标签 3" to="/main3">内容 3</van-tab>
      </van-tabs>
      <router-view></router-view>
      <Footer></Footer>
   </div>
</template>

<script>
   import top from '@/components/top';
   import AdSwipe from "@/components/AdSwipe";
   import main1 from "../components/main1";
   import main2 from "../components/main2";
   import main3 from "../components/main3";
   import Footer from "../components/Footer";


   export default {
        name:'home',
        components:{
           Footer,
           AdSwipe,
            top,
           main1,
           main2,
           main3
        },
       data(){
           return{
               noticeMessage:'我他妈才知道写一个几把网页是有多么的恶心，啥东西都要现查，vue-cli的逻辑还死差'
           }
       }
    }

</script>

<style scoped>
   .notice{
      margin: 0;
   }
   .mainTab{
      font-size: 2em;
   }
</style>