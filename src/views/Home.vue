<template>
   <div>
      <top></top>
      <AdSwipe></AdSwipe>
      <van-notice-bar left-icon="volume-o" :scrollable="false" background="white" class="notice">
         {{noticeMessage}}
      </van-notice-bar>
      <van-tabs v-model="active" >
         <van-tab title="标签 1">内容 1</van-tab>
         <van-tab title="标签 2">内容 2</van-tab>
         <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
   </div>
</template>

<script>
    import top from '@/components/top';
    import AdSwipe from "@/components/AdSwipe";
    export default {
        name:'home',
        components:{
           AdSwipe,
            top
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