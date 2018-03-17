<template>
  <div id="lockscreen-container">
    <div class="container" >
      <div class="lockscreen-wrapper animated  flipInX">
        <div class="row ">
          <div class="col-md-8 col-md-offset-4 col-sm-6 col-sm-offset-4 col-xs-offset-2">
            <div class="profile-wrapper">
              <img width="69" height="69" data-src-retina="../../assets/images//profiles/avatar2x.jpg" data-src="../../assets/images//profiles/avatar.jpg" src="../../assets/images//profiles/avatar.jpg" alt="">
            </div>
            <form class="user-form" action="index.html" method="post">
              <h2 class="user">John <span class="semi-bold">Smith</span></h2>
              <input type="password" placeholder="Password" v-model="lockpassword" data-toggle="tooltip"
                       data-placement="bottom" title="" id="promptinfo" data-delay="delay:
                       { show: 2500, hide: 100 }" data-trigger="manual">
              <button type="button" class="btn btn-primary " @click="lockscreen"><i class="fa fa-unlock"></i></button>
            </form>
          </div>
        </div>
      </div>
      <div id="push"></div>
    </div>
  </div>
</template>

<script>
//import '../../assets/css/webarch.css';
//import '../../assets/css/reset.css';
import cookieUtil from '../../middleware/cookieUtil';
import axios from 'axios';
export default {
  data(){
    return{
      lockpassword:"",
      inputshow:false
    }
  },
  methods:{
    openerror() {
      this.$notify.error({
        title: '错误',
        message: '账号信息已过期，即将跳转至登录页\n'
      })
    },
    async lockscreen(){
      let that=this;
      if(that.lockpassword!="") {
        let token=cookieUtil.get("user");
        let result = await  axios.post('/api/lockscreen.do', {"lockpassword": that.lockpassword,"token":token})
        console.log(result.data)
        if (result.data.success==true) {
          that.$router.push({path: '/home/homepage'}) // 跳转
        }
        if(result.data.success==false&&result.data.message!=false){
          that.lockpassword="";
          $('#promptinfo').attr('title',"密码错误，请重新输入！").tooltip('fixTitle').tooltip('show');
          setTimeout(function () {
            $('#promptinfo').tooltip('hide');
          },1500)
        }
        if(result.data.success==false&&result.data.message==false){
          that.openerror();
          setTimeout(function () {
            that.$router.push({path: '/'}) // 跳转
          },3500)
        }
      }else if(that.lockpassword==""){
        $('#promptinfo').attr('title',"密码不能为空，请重新输入！").tooltip('fixTitle').tooltip('show');
        setTimeout(function () {
          $('#promptinfo').tooltip('hide');
        },2000)
      }
    }
  }
}
</script>

<style scoped>
  @import '../../assets/css/webarch.css';
  @import '../../assets/css/reset.css';
</style>
