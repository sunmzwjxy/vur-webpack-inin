<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in imagelist" :key="item.img">
                <img :src="item.img" alt />
            </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/news.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/iconfontzhizuobiaozhun023130.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/show_goumai.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/liuyanban.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/shipin.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <a href="#">
                    <img src="../../images/lianxiwomen.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
    name: "Home",
    data() {
        return {
            imagelist: []
        };
    },
    methods: {
        async getHomeData() {
            const res = await this.$axios.get("/home/menus");
            if (res.status === 200) {
                this.imagelist = res.data;
            } else {
                Toast("加载轮播图数失败!");
            }
        }
    },
    created() {
        this.getHomeData();
    }
};
</script>

<style lang="less" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        background-color: #dc143c;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
.mui-grid-view.mui-grid-9 {
    background-color: white;
    img {
        width: 60px;
        height: 60px;
    }
    .mui-table-view-cell {
        border: none;

        .mui-media-body {
            font-size: 13px;
        }
    }
}
</style>>
