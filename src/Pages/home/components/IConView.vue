<template>
    <div class="iconView">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(pageItem, pageIndex) in pages" :key="pageIndex">
                <ul class="iconBox">
                    <li v-for="(item, index) in pageItem" :key="index">
                        <img :src="item.imgUrl" alt="">
                        <p>{{item.title}}</p>
                    </li>
                </ul>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

    </div>
</template>

<script>
    export default {
        name: "IConView",
        data() {
            return {
                iconList: [
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', title: '中国酒泉航空商业大酒店'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png', title: '机票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png', title: '火车票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png', title: '度假'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', title: '景点门票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/hotel.png', title: '酒店'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/flight.png', title: '机票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png', title: '火车票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png', title: '度假'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', title: '景点门票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/train.png', title: '火车票'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/package.png', title: '度假'},
                    {imgUrl: 'https://s.qunarzz.com/homenode/images/touchheader/piao.png', title: '景点门票'},
                ],
                swiperOption: {
                    pagination:'.swiper-pagination',
                }
            }
        },

        computed: {
            pages() {
                const pages = [];
                this.iconList.forEach((item, index)=>{
                    //属于第几页
                    let num = Math.floor(index/10);
                    if(!pages[num]){
                        pages[num] = []
                    }
                    pages[num].push(item);
                });

                return pages;
            },
        }
    }
</script>

<style scoped>
    .iconView{
        width: 10rem;
        height: 5.5rem;
        overflow: hidden;
        background-color: #cccccc;
    }

    .iconView >>> .swiper-container{
        width: 10rem;
        height: 5.5rem;
        overflow: hidden;
    }

    .iconBox{
        display: flex;
        flex-wrap: wrap;
    }

    .iconBox li{
        width: 20%;
        margin: 0.26rem 0;
        text-align: center;
    }
    .iconBox img{
        width: 1.413rem;
    }
    .iconBox p{
        box-sizing: border-box;
        padding: 0 0.2rem;
        font-size: 0.347rem;
        margin-top: 0.133rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
