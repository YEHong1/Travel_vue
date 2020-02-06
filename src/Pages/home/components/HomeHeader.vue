<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont iconarrow-lift">

            </span>
        </div>
        <div class="header-input">
            <span class="iconfont iconsearch">

            </span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">城市
            <span class="iconfont iconarrow-sortdown-smal"> </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style scoped>
    /*scoped 限制以下文件只对自己的文件有效，不添加则全局有效*/
    div{font-size: 0.36rem;}
    .header{
        display: flex;
        width: 10rem;
        height: 1.147rem;
        line-height: 1.147rem;
        color: #ffffff;
        background-color: #00bcd4;
    }

    .header-left{
        width: 0.853rem;
        float: left;
        text-align: center;
    }

    .header-input{
        flex: 1;
        box-sizing: border-box;
        padding-left: 0.15rem;
        height: 0.853rem;
        color: #cccccc;
        line-height: 0.853rem;
        background-color: #ffffff;
        margin-top: 0.16rem;
        margin-left: 0.267rem;
        border-radius: 0.133rem;

    }

    .header-right{
        overflow: hidden;
        width: 1.653rem;
        float: right;
        text-align: center;
    }

    .iconarrow-lift{
        font-size: 0.8rem;
    }

    .iconarrow-sortdown-smal{
        font-size: 0.36rem;
        margin-left: -0.15rem;
    }

</style>
