<template>
  <div>

  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>

  <router-link to="/" tag="button">返回主页</router-link>
  </div>

</template>

<script>

  export default {
//    asyncData () {
//      return axios.get(`https://api.douban.com/v2/book/1220562`)
//        .then((res) => {
//        alert(res.data.title)
//          return { title: res.data }
//        })
//    },
    asyncData (){
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
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
</style>
