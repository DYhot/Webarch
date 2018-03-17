<template>
  <div class="movie_container">
    <!--{{productdata}}-->
  <!--<ceshi></ceshi>-->
    <nuxt-link :to="{path:'/product/productdetail',query:{id:item.sku_id}}" v-for="item in productdata" :key="item.sku_id">
    <div class="everybox">
      <!--<img :src="item.g_" alt="">-->
      <span>{{item.g_name}}</span>
      <!--<span>电影年份:{{item.year}}</span>-->
    </div>
      <!--&lt;!&ndash;{{moviedata.subjects}}&ndash;&gt;-->
    </nuxt-link>
  <nuxt-link to="/" tag="button" class="btn-prev">返回主页</nuxt-link>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    methods:{

    },
    asyncData () {
      return  axios.get('/api/getAlldata.do',{params:{"u_id":5,"currentPage":1,"everyPageCount":5}})
        .then((res) => {
          return { productdata: res.data }
        })
    },
    components:{
//      ceshi:ceshi
    },
    fetch () {
      // The fetch method is used to fill the store before rendering the page
    },
    head () {
      // Set Meta Tags for this Page
    },
    // and more functionality to discover

  }
</script>

<style>
button{
    height: 30px;
    background-color: #0991ff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 14px;
    margin: 4% 0 5% 2%;
    padding:2% 4% 2% 5%;
    cursor: pointer;
  }
  .movie_container{
    width: 100%;
  }
  .everybox{
    width: 18%;
    margin: 1% 1%;
    height: 380px;
    text-align: center;
    float: left;
  }
.everybox img{
  width: 100%;
  height: 90%;
}
  .everybox span{
    margin: 1%;
    font-size: 14px;
    display: block;
  }
</style>
