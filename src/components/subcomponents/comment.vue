<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr />
        <textarea class="cmt-text" placeholder="请输入评论，最多输入120个字" maxlength="120"></textarea>
        <mt-button type="primary" size="large" @click.native="commentClick">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2020-07-07 12:12:12</div>
                <div class="cmt-body">松下问童子，言师采药去，只在此山中，去深不知处</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2020-07-07 12:12:12</div>
                <div class="cmt-body">松下问童子，言师采药去，只在此山中，去深不知处</div>
            </div>
        </div>
        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2020-07-07 12:12:12</div>
                <div class="cmt-body">松下问童子，言师采药去，只在此山中，去深不知处</div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click.native="loadClick">加载更多</mt-button>

        {{id}}
    </div>
</template>

<script>
export default {
    name: "comment",
    data() {
        return {};
    },
    methods: {
        commentClick() {
            console.log("handleClick");
        },
        loadClick() {
            console.log("loadClick");
        }
    },
    props: ['id']
};
</script>

<style lang="less" scoped>
.cmt-container {
    h3 {
        font-size: 18px;
    }
    .cmt-text {
        font-size: 14px;
        height: 85px;
        margin: 0px;
    }
    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}
</style>