<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in slideList" :key="index">
                <div :class="item.className"></div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
<!--            <div class="swiper-button-prev" slot="button-prev"></div>-->
<!--            <div class="swiper-button-next" slot="button-next"></div>-->
<!--            <div class="swiper-scrollbar"   slot="scrollbar"></div>-->
        </swiper>
    </div>
</template>

<script>
    export default {
        name: "HomeSwiper",
        data() {
            return {
                swiperOption: {
                    // 参数选项,显示小点
                    pagination:'.swiper-pagination',
                    //循环
                    loop: true,
                    //每张播放时长3秒，自动播放
                    autoplay: 2000,
                    //滑动速度
                    speed: 1000,
                    // delay: 1000
                },

                slideList: [
                    {className: 'swiper-div1'},
                    {className: 'swiper-div2'},
                    {className: 'swiper-div3'},
                ],
            }
        },
    }
</script>

<style scoped>
    /* 样式穿透 >>> , 不受scoped的限制*/
    /*被选中轮播图对应的点下存在class swiper-pagination-bullet-active， 修改其背景颜色*/
    .wrapper >>> .swiper-pagination-bullet-active{
        background-color: white;
    }

    .swiper-div1, .swiper-div2, .swiper-div3{
        width: 10rem;
        height: 3rem;
    }

    .swiper-div1{background-color: cornflowerblue}
    .swiper-div2{background-color: gainsboro}
    .swiper-div3{background-color: peachpuff}
</style>
