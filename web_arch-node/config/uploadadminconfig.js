/**
 * Created by Administrator on 2017/10/30.
 */
'use strict'
const multer=require("multer");
//文件上传位置的配置
const storage=multer.diskStorage({
    destination: function(request,file,cb){
        console.log(file);
        cb(null,"./public/uploads/adminavatar")
    },
    filename:function(request,file,cb){
        //var fileFormat = (file.originalname).split(".");
        // cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage
})
upload.changedestorage=function(id,filename) {
    console.log("修改上传路径");
    console.log("文件名",filename);
    let storage=multer.diskStorage({
        destination: function(request,file,cb){
            console.log("file:",file)
            cb(null,"./public/uploads/adminavatar/"+id+"/"+filename)
        },
        filename:function(request,file,cb){
            //var fileFormat = (file.originalname).split(".");
            // cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
            cb(null,file.originalname)
        }
    })
    this.storage=storage
}
module.exports=upload;