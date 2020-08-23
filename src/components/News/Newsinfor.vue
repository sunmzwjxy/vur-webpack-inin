<template>
    <div class="newsinfor-container">
        <h3 class="title">{{newsitem.title}}</h3>
        <P class="subtitle">
            <span>Time:{{newsitem.time}}</span>
            <span>Click: 0</span>
        </P>
        <hr />
        <div class="content">{{newsitem.text}}</div>

        <sub-comment :id="id"></sub-comment>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import comment from "../subcomponents/comment.vue";

export default {
    name: "newsinfor",
    data() {
        return {
            id: this.$route.params.ID,
            newsitem: {}
        };
    },
    methods: {
        async loadNewsInfor() {
            const newsData = await this.$axios.get(
                "/home/newsinfor/" + this.id
            );
            if (newsData.status === 200) {
                this.newsitem = newsData.data;
            } else {
                Toast("Load news failed!");
            }
        }
    },
    created() {
        this.loadNewsInfor();
    },
    components: {
        "sub-comment": comment
    }
};
</script>

<style lang="less" scoped>
// scoped可以拿掉，因为图片无法被样式作用到
.newsinfor-container {
    padding: 0 4px;
    .title {
        font-size: 16px;
        text-align: center;
        margin: 15px 0;
        color: red;
    }
    .subtitle {
        font-size: 13px;
        color: blue;
        display: flex;
        justify-content: space-between;
    }
    .content {
        img {
            width: 100%;
        }
    }
}
</style>