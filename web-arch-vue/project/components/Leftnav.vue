<template>
  <div>
    <section class="leftnav">
      <div class="leftnavhead">
        <!--<img src="image/avatar.png" alt="">-->
        <div class="text">
          <p>Admin</p>
          <p><span></span>在线</p>
        </div>
      </div>
      <input type="search" placeholder="搜索菜单">
      <ul>
        <li>控制台</li>
        <li>常规管理</li>
        <li>插件管理</li>
        <li>文档管理</li>
        <li>日历管理</li>
        <li>博客管理</li>
        <li>CMS管理</li>
        <li>权限管理</li>
        <li>分类管理</li>
        <li>微信管理</li>
        <li>版本管理</li>
        <li>示例管理</li>
        <li>文件管理</li>
      </ul>
    </section>
  </div>
</template>
<script>
//  import siderbar from './Siderbar.vue'
  export default {
    name: "left-nav",
//    components: {
//      siderbar: siderbar
//    }
  }
</script>
<style scoped>
  @import '../assets/css/webarch.css';
</style>
