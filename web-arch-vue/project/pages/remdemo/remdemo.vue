<template>
  <div>
    <!--<webhead></webhead>-->
    <!--<siderbar></siderbar>-->
    <header>
      <nav>
        <ul class="leftnav">
          <li class="dropdown">
            <span class="glyphicon glyphicon-align-justify smallnav"></span>
            <div class="dropdown-menu-nav">
              <ul class="dropdown-menu-list ">
                <li><a href="#">多媒体呼叫中心</a></li>
                <li><a href="#">保险行业</a></li>
                <li><a href="#">制造行业</a></li>
                <li><a href="#">政府部门</a></li>
                <li><a href="#">教育行业</a></li>
                <li><a href="#">酒店/旅游</a></li>
                <li><a href="#">电子商务</a></li>
                <li><a href="#">社区服务</a></li>
                <li><a href="#">铁路/客运</a></li>
                <li><a href="#">医疗卫生</a></li>
              </ul>
            </div>
          </li>
          <li><img src="" alt=""></li>
        </ul>
        <ul class="rightnav">
          <li>首页</li>
          <li>产品</li>
          <li>链克</li>
          <li>服务</li>
          <li>社区</li>
        </ul>
      </nav>
    </header>
    <section class="banner">
      <div class="banner-box">
        <img src="../../assets/images/remdemo/banner-img-13.png" alt="">
        <img src="../../assets/images/remdemo/banner-img-12.png" alt="">
        <img src="../../assets/images/remdemo/banner-img-5.png" alt="">
      </div>
      <div class="pre"><img src="../../assets/images/remdemo/pre.png" alt=""></div>
      <div class="next"><img src="../../assets/images/remdemo/next.png" alt=""></div>
    </section>
  </div>

</template>

<script>
import '../../assets/css/remdemo.css';
import siderbar from '../../components/Siderbar.vue';
import webhead from '../../components/Webhead.vue';

export default {
  components: {
//    webhead:webhead,
//    siderbar:siderbar
  },
}
</script>

<style>

</style>
