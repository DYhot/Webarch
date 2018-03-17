<template>
  <div>
    <span>{{name}}</span>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
//    validate ({ params }) {
//      // Must be a number
////      console.log({params})
//      return /^\d+$/.test(params.id)
//    },
    async asyncData ({query}) {
      let { data } = await axios.get('/api/getOneProduct.do',{params:{"u_id":5,"dataid":query.id}})
      return { name: data[0].g_name}
    }
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

</style>
