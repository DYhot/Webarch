<template>
  <div class="movie_container">
    <ceshi></ceshi>
    <nuxt-link :to="{path:'/movie/moviedetail',query:{id:item.id}}" v-for="(item) in moviedata.subjects" :key="item.id">
    <div class="everybox">
      <img :src="item.images.medium" alt="">
      <span>{{item.title}}</span>
      <span>电影年份:{{item.year}}</span>
    </div>
      <!--{{moviedata.subjects}}-->
    </nuxt-link>
    <!--<div v-if="data">{{data}}</div>-->
    <button @click="getData"></button>
  <nuxt-link to="/" tag="button" class="btn-prev">返回主页</nuxt-link>
  </div>
</template>
<script>
  import axios from 'axios';
  import ceshi from '../../components/Webhead.vue'
  export default {
    methods:{
      getData(){
        console.log(1111111)
          return  axios.get(`/douban/movie/subject/1764796`)
            .then((res) => {
          console.log(res.data)
              return { data: res.data }
            })
        }
    },
    asyncData () {
      return  axios.get(`/douban/movie/in_theaters`)
        .then((res) => {
        console.log(res.data)
          return { moviedata: res.data }
        })
    },
    components:{
      ceshi:ceshi
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
  @media screen and (min-width: 1680px) and (max-width: 2048px){
  .everybox{
    width: 14%;
    margin: 1% 1%;
    height: 380px;
    text-align: center;
    float: left;
  }
  }
</style>
