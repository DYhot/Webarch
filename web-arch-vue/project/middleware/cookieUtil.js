//cookieUtil.js
module.exports = cookieUtil = {
         //读取"name"对应cookie的值
     get : function(name){
       // console.log("我是name",name)
             var cookieName = encodeURIComponent(name)+"=",                //对传入name参数URL编码
                 cookieStart = document.cookie.indexOf(cookieName),
               cookieValue = null;
              if(cookieStart > -1){
                     var cookieEnd = document.cookie.indexOf(";",cookieStart);
                   if(-1 == cookieEnd){
                        cookieEnd = document.cookie.length;            //cookie值为空
                       }
                     //对cookie保存的值URL解码
                     cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
              }
  　　　　　　　return cookieValue;
        },

    //创建或设置cookie        其中name将作为某一域内的唯一标示、不可更改
    set : function(name,value,expires,path,domain,secure){
          //对名称和值URL编码
           var cookieText = encodeURIComponent(name)+"="+encodeURIComponent(value);

          if(expires instanceof Date){
                cookieText += "; expires="+expires.toGMTString();
            }
         if(path){
                cookieText += "; path="+path;
            }
          if(domain){
                cookieText += "; domain="+domain;
            }
          if(secure){
                cookieText += "; secure";
             }

           //将根据name是否存在决定是否添加新的cookie字符串，需要注意：a、cookie长度（limit：4095B）；b、每个域允许的cookie个数（各浏览器决定）
           document.cookie = cookieText;
      },

     //删除cookie
     unset : function(name,path,domain,secure){
           this.set(name,"",new Date(0),path,domain,secure);
      }
}
