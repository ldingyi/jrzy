<template>
    <div class="main1">
        这里是main1的内容
        <van-grid :column-num="4">
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
            <van-grid-item icon="photo-o" text="文字" />
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "main1"
    }
</script>

<style scoped>
    .main1{
        width: 100%;
        height: 30em;
    }
</style>