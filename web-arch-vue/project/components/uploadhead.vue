<template>
  <div>
    <div>
      <input type="file" id="uploadImg">
      <!--<h1>图片节点</h1>-->
      <img src="" alt="" id="imgnode" style="display:none">
    </div>
    <div id="imageBox">
      <canvas width="200" height="200" id="myCanvas"></canvas>
      <div id="cutBox"></div>
    </div>
    <div id="imgShow">
      <h5>头像预览</h5>
      <canvas id="newCanvas" width="100" height="100"></canvas>
      <el-button onclick="saveimage()" type="primary" >保存头像</el-button>
    </div>
  </div>
</template>
<script>
  setTimeout(function () {
    if(process.EROWSER_BUILD){
      console.log(1111111)

      //  1.获取到Canvas上下文 -》画笔
      var ctx = $("#myCanvas")[0].getContext("2d");
      $("#uploadImg").change(function(){
        console.log($("#uploadImg")[0].value)
//      $("#imgnode").attr("src",$("#uploadImg")[0].value)  //浏览器不允许访问本地资源
        var reader = new FileReader()
        reader.readAsDataURL($("#uploadImg")[0].files[0]);
        reader.onload=function(){
          console.log(this);
          $("#imgnode")[0].src=this.result;
          $("#imgnode")[0].onload=function(){
            ctx.drawImage($("#imgnode")[0],0,0,500,500);
          }
        }
      })
      $("#cutBox").mousedown(function(e){
        var clickE = e;
        var positionleft = $("#cutBox").position().left
        var positiontop = $("#cutBox").position().top
        console.log(clickE.offsetY);
        console.log()
        $(this).mousemove(function(e){
          var currentE = e;
          console.log(currentE.clientY);
          $(this).css({
            left:currentE.clientX - clickE.clientX + positionleft + "px",
            top:currentE.clientY - clickE.clientY + positiontop + "px"
          })
        })
      })
//    if (document) {
      $(document).mouseup(function () {
        $("#cutBox").off("mousemove");
        var newpositionleft = $("#cutBox").position().left;
        var newpositiontop = $("#cutBox").position().top;
//      获取红框框里面的像素数据
        var imagedata = ctx.getImageData(newpositionleft, newpositiontop, 200, 200);
        console.log(imagedata)
        var newctx = $("#newCanvas")[0].getContext("2d");
        newctx.putImageData(imagedata, 0, 0);
      })
//    }
    }
  },1000)



  import uploadhead from './uploadhead.vue'
  import '../assets/css/reset.css';

  export default {
    name: "uploadhead",
    components: {
      uploadhead: uploadhead
    },
    methods:{
      saveimage(){
        var imageDataUrl = $("#newCanvas")[0].toDataURL();
        console.log(imageDataUrl);
        $.ajax({
          type:"POST",
          url:"uploadCanvas.do",
          data:{
            imagedata: imageDataUrl
          },
          success:function(data){
            console.log(data)
          }
        })
      }
    }
  }

</script>
<style>

</style>
