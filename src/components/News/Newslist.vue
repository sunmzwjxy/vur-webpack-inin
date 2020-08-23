<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="news in newslist" :key="news.ID">
                <router-link :to="'/home/newsinfor/' + news.ID">
                    <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg" />
                    <div class="mui-media-body">
                        <h1>{{news.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>Time:{{news.time}}</span>
                            <span>Click: </span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import Toast from 'mint-ui'
export default {
    name: "Newslist",
    data() {
        return {
            newslist: []
        };
    },
    methods: {
        async loadData() {
            const res = await this.$axios.get("/home/newslist");
            if (res.status === 200) {
                this.newslist = res.data
            } else {
                Toast('load news list failed!')
            }
        }
    },
    created() {
        this.loadData()
    }
};
</script>

<style lang="less" scoped>
.mui-table-view {
    li {
        h1{
            font-size: 14px;
        }
        .mui-ellipsis{
            font-size: 12px;
            color: #226aff;
            display: flex;
            justify-content: space-between;
        }
    }
}
</style>