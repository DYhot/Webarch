<template>
  <section class="error-body no-top " id="login-container">
    <div class="container">
      <div class="row login-container column-seperation">
        <div class="col-md-5 col-md-offset-1">
          <h2>
            登录进入 webarch
          </h2>
          <p>
            使用Facebook、Twitter或你的电子邮件登录。
            <br>
            <a href="#">现在注册!</a> 对于webarch来说，它是免费的，而且永远是免费的。
          </p>
          <br>
          <button class="btn btn-block btn-info col-md-8" type="button"><span class="pull-left icon-facebook" style="font-style: italic"></span> <span class="bold">Login with Facebook</span></button>
          <button class="btn btn-block btn-success col-md-8" type="button"><span class="pull-left icon-twitter" style="font-style: italic"></span>
            <span class="bold">Login with Twitter</span></button>
        </div>
        <div class="col-md-5">
          <br>
          <form action="#" class="login-form validate" id="login-form" method="post" name="login-form">
            <div class="row">
              <div class="form-group col-md-10">
                <label class="form-label">用户名</label>
                <input class="form-control" v-model="adminname" id="txtusername" name="txtusername" type="email" required>
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-10">
                <label class="form-label">密码</label> <span class="help"></span>
                <input class="form-control" v-model="adminpassword" id="txtpassword" name="txtpassword" type="password" required>
              </div>
            </div>
            <div class="row">
              <div class="control-group col-md-10">
                <div class="checkbox checkbox check-success">
                  <a href="#">忘记密码?</a>&nbsp;&nbsp;
                  <input id="checkbox1" type="checkbox" value="1">
                  <label for="checkbox1">记住我</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-10">
                <button class="btn btn-primary btn-cons pull-right" type="button" @click="login()">登录</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios';
import cookieUtil from '../middleware/cookieUtil';
export default {
  data(){
    return {
      adminname:"",
      adminpassword:""
    }
  },
  methods:{
    async login(){
      let that=this;
      if(that.adminname!=""&&that.adminpassword!="") {
        let result = await  axios.post('/api/adminlogin.do', {"name": that.adminname, "password": that.adminpassword})
        console.log(result.data)
        cookieUtil.set("user",result.data.token)
        if (result.data.message==true) {
          that.$router.push({path: '/home/homepage'}) // 跳转
        } else {
          that.$router.push({path: '/'}) // 跳转
          this.openerror()
        }
      }
    },
    openerror() {
      this.$notify.error({
        title: '错误',
        message: '该账号已被禁止使用，请联系管理员！\n'
      });
    }
  }
}
</script>

<style scoped>
  @import '../assets/css/webarch.css';
  @import '../assets/css/reset.css';
</style>
