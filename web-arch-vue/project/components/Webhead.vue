<template>
  <div>
    <div class="header navbar navbar-inverse ">
      <!-- BEGIN TOP NAVIGATION BAR -->
      <div class="navbar-inner">
        <div class="header-seperation">
          <ul class="nav pull-left notifcation-center visible-xs visible-sm">
            <li class="dropdown">
              <a href="#main-menu" data-webarch="toggle-left-side">
                <i class="material-icons">menu</i>
              </a>
            </li>
          </ul>
          <!-- BEGIN LOGO -->
          <nuxt-link to="/home/homepage" tag="a">
            <img src="../assets/images/logo.png" class="logo" alt="" data-src="../assets/images/logo.png" data-src-retina="../assets/images/logo2x.png" width="106" height="21" />
          </nuxt-link>
          <!--<a href="index.html">-->
            <!--<img src="../assets/images/logo.png" class="logo" alt="" data-src="../assets/images/logo.png" data-src-retina="../assets/images/logo2x.png" width="106" height="21" />-->
          <!--</a>-->
          <!-- END LOGO -->
          <ul class="nav pull-right notifcation-center">
            <li class="dropdown hidden-xs hidden-sm">
              <nuxt-link to="/home/homepage" tag="a" class="dropdown-toggle active" data-toggle="">
                <i class="material-icons">home</i>
              </nuxt-link>
              <!--<a href="index.html" class="dropdown-toggle active" data-toggle="">-->
                <!--<i class="material-icons">home</i>-->
              <!--</a>-->
            </li>
            <li class="dropdown hidden-xs hidden-sm">
              <a href="email.html" class="dropdown-toggle">
                <i class="material-icons">email</i><span class="badge bubble-only"></span>
              </a>
            </li>
            <li class="dropdown visible-xs visible-sm">
              <a href="#" data-webarch="toggle-right-side">
                <i class="material-icons">chat</i>
              </a>
            </li>
          </ul>
        </div>
        <!-- END RESPONSIVE MENU TOGGLER -->
        <div class="header-quick-nav">
          <!-- BEGIN TOP NAVIGATION MENU -->
          <div class="pull-left">
            <ul class="nav quick-section">
              <li class="quicklinks">
                <a href="#" class="" id="layout-condensed-toggle">
                  <i class="material-icons">menu</i>
                </a>
              </li>
            </ul>
            <ul class="nav quick-section">
              <li class="quicklinks  m-r-10">
                <a href="#" class="">
                  <i class="material-icons">refresh</i>
                </a>
              </li>
              <li class="quicklinks">
                <a href="#" class="">
                  <i class="material-icons">apps</i>
                </a>
              </li>
              <li class="quicklinks"> <span class="h-seperate"></span></li>
              <li class="quicklinks">
                <a href="#" class="" id="my-task-list" data-placement="bottom" data-content='' data-toggle="dropdown" data-original-title="Notifications">
                  <i class="material-icons">notifications_none</i>
                  <span class="badge badge-important bubble-only"></span>
                </a>
              </li>
              <li class="m-r-10 input-prepend inside search-form no-boarder">
                <span class="add-on"> <i class="material-icons">search</i></span>
                <input name="" type="text" class="no-boarder " placeholder="搜索" style="width:250px;">
              </li>
            </ul>
          </div>
          <div id="notification-list" style="display:none">
            <div style="width:300px">
              <div class="notification-messages info">
                <div class="user-profile">
                  <img src="../assets/images/profiles/d.jpg" alt="" data-src="../assets/images/profiles/d.jpg" data-src-retina="../assets/images/profiles/d2x.jpg" width="35" height="35">
                </div>
                <div class="message-wrapper">
                  <div class="heading">
                    David Nester - Commented on your wall
                  </div>
                  <div class="description">
                    Meeting postponed to tomorrow
                  </div>
                  <div class="date pull-left">
                    A min ago
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="notification-messages danger">
                <div class="iconholder">
                  <i class="icon-warning-sign"></i>
                </div>
                <div class="message-wrapper">
                  <div class="heading">
                    Server load limited
                  </div>
                  <div class="description">
                    Database server has reached its daily capicity
                  </div>
                  <div class="date pull-left">
                    2 mins ago
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="notification-messages success">
                <div class="user-profile">
                  <img src="../assets/images/profiles/h.jpg" alt="" data-src="../assets/images/profiles/h.jpg" data-src-retina="../assets/images/profiles/h2x.jpg" width="35" height="35">
                </div>
                <div class="message-wrapper">
                  <div class="heading">
                    You haveve got 150 messages
                  </div>
                  <div class="description">
                    150 newly unread messages in your inbox
                  </div>
                  <div class="date pull-left">
                    An hour ago
                  </div>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <!-- END TOP NAVIGATION MENU -->
          <!-- BEGIN CHAT TOGGLER -->
          <div class="pull-right">
            <div class="chat-toggler sm">
              <div class="profile-pic">
                <img src="../assets/images/profiles/avatar_small.jpg" alt="" data-src="../assets/images/profiles/avatar_small.jpg" data-src-retina="../assets/images/profiles/avatar_small2x.jpg" width="35" height="35" />
                <div class="availability-bubble online"></div>
              </div>
            </div>
            <ul class="nav quick-section ">
              <li class="quicklinks">
                <a data-toggle="dropdown"  @click="toggle()" class="dropdown-toggle  pull-right " href="#" id="user-options">
                  <i class="material-icons">tune</i>
                </a>
                <ul class="dropdown-menu  pull-right" role="menu" aria-labelledby="user-options">
                  <li>
                    <a href="user-profile.html"> My Account</a>
                  </li>
                  <li>
                    <a href="calender.html">My Calendar</a>
                  </li>
                  <li>
                    <a href="email.html"> My Inbox&nbsp;&nbsp;
                      <span class="badge badge-important animated bounceIn">2</span>
                    </a>
                  </li>
                  <li class="divider"></li>
                  <li>
                    <nuxt-link to="/" tag="a">
                      <i class="material-icons">power_settings_new</i>&nbsp;&nbsp;Log Out
                    </nuxt-link>
                  </li>
                </ul>
              </li>
              <li class="quicklinks"> <span class="h-seperate"></span></li>
              <li class="quicklinks">
                <a href="#" class="chat-menu-toggle" data-webarch="toggle-right-side"><i class="material-icons">chat</i><span class="badge badge-important hide">1</span>
                </a>
                <div class="simple-chat-popup chat-menu-toggle hide">
                  <div class="simple-chat-popup-arrow"></div>
                  <div class="simple-chat-popup-inner">
                    <div style="width:100px">
                      <div class="semi-bold">David Nester</div>
                      <div class="message">Hey you there </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- END CHAT TOGGLER -->
        </div>
        <!-- END TOP NAVIGATION MENU -->
      </div>
      <!-- END TOP NAVIGATION BAR -->
    </div>
  </div>
</template>
<script>
//  import webhead from './Webhead.vue'
  export default {
    name: "webhead-top",
//    components: {
//      webhead: webhead
//    },
    methods:{
      toggle(){
          $("#user-options").attr("aria-expanded","true").parent().addClass("open")
      }
    }
  }

</script>
<style scoped>
  @import '../assets/css/webarch.css';
</style>
