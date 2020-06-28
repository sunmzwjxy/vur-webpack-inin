<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {};
    },
    methods: {
        async getHomeData() {
            console.log('getHomeData')
            const res = await this.$axios.get('/menus')
        }
    },
    created() {
        this.getHomeData()
    }
};
</script>

<style lang="less" scoped>
.mint-swipe {
    height: 200px;

    .mint-swipe-item {
        background-color: #DC143C;
    }
}
</style>>
