//创建人：576950395@qq.com
const adminModule = require('../dao/adminDao');
const crypto = require('crypto');
const uploadadmin=require("../config/uploadadminconfig");
const fs=require("fs");
const adminController = {
    getAlladmin(req,res){
        let everyPageCount=Number(req.query.everyPageCount);
        let currentPage=Number(req.query.currentPage);
        let begin=(currentPage-1)*everyPageCount;
        let arr=[];
        arr.push(begin)
        arr.push(everyPageCount)
        var sql = 'SELECT * FROM t_admin order by createtime desc limit ?,?';
        adminModule.adminDao(arr,sql).then(data=>{
            // console.log(data)
            res.send(data);
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    getadminCount(req,res){
        let arr=[];
        var sql = 'SELECT count(*) as count FROM t_admin';
        adminModule.getCountDao(arr,sql).then(data=>{
            console.log(data[0])
            res.send(data[0]);
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    swithadmin(req,res){
        let arr=[];
        arr.push(req.body.state)
        arr.push(req.body.id)
        var sql = 'update t_admin set state=? where a_id=?';
        adminModule.swithadminDao(arr,sql).then(data=>{
                res.send(data);
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    adminSearch(req,resp){
        let everyPageCount=Number(req.body.everyPageCount);
        let currentPage=Number(req.body.currentPage);
        let begin=(currentPage-1)*everyPageCount;
        let name=req.body.name;
        let email=req.body.email;
        let tel=req.body.tel;
        console.log(name)
        console.log(email)
        console.log(tel)
        let arr=[];
        let sql="select *from t_admin where 1=1 ";
        let str="order by createtime desc limit ?,?"
        if(name!=""){
            sql+="and a_name like ? ";
            arr.push("%"+name+"%");
        }
        if(email!=""){
            sql+="and a_yx like ? ";
            arr.push("%"+email+"%");
        }
        if(tel!=""){
            sql+="and a_tel like ? ";
            arr.push("%"+tel+"%");
        }
        sql+=str;
        arr.push(begin)
        arr.push(everyPageCount)
        console.log(sql)
        console.log(arr)
        adminModule.adminSearchDao(arr,sql).
        then((data)=>{
                console.log("我是查询出来的数据",data)
                resp.send(data)
            }
        ).catch((err)=>{
            console.log(err.message)
        })
    },
    addadminInfo(req,res){
        let arr=[];
        let state=1;
        let permission=1;
        let uid=req.session.user.uid;
        let filename=Date.parse(new Date());
        let imgname=req.body.addform.imgName;
        console.log("xxxxxxxxxxxxx",imgname)
        let path="./public/uploads/adminavatar/"+uid+"/"+filename+"/"+imgname
        arr.push(req.session.user.uid);
        arr.push(req.body.addform.name);
        arr.push(req.body.addform.password);
        arr.push(path);
        arr.push(req.body.addform.tel);
        arr.push(req.body.addform.email);
        arr.push(String(Date.parse(new Date())));
        arr.push(String(Date.parse(new Date())));
        arr.push(permission);
        arr.push(state);
        var sql = 'insert into t_admin values (null,?,?,?,?,?,?,?,?,?,?)';
        adminModule.addadminInfoDao(arr,sql).then(data=>{
            if(data){
                console.log("id:",data)
                res.send(data);
            }
        }).catch((err)=>{
            console.log(err.message)
        })
    },
    uploadavatar(req,resp,next){
        // let filename=req.body.addform.imgdata[0].uid;
        let filename=Date.parse(new Date());
        // let file_content=req.body.addform.imgdata[0].raw;
        let uid=req.session.user.uid;
        console.log("拿到req.file:",req.body.data)
        let upload_Promise=new Promise((resolve,reject)=>{
            fs.mkdir("./public/uploads/adminavatar/"+uid,function(err){
                if(err){
                    console.log("创建文件夹错误1",err.message)
                }else{
                    // uploadadmin.changedestorage(uid)
                    // console.log(uploaddesigner.storage)
                    resolve(resolve)
                    // next()
                }
            })
        }).then((resolve)=>{
            fs.mkdir("./public/uploads/adminavatar/"+uid+"/"+filename,function(err){
                if(err){
                    console.log("创建文件夹错误2",err.message);
                }else{
                    uploadadmin.changedestorage(uid,filename);
                    // console.log(uploaddesigner.storage)
                    next();
                }
            })
        })

    },
    modifyImgPath(req,res){
        console.log("我是修改路径的参数：",req.body.addform)
        let uid=req.session.user.uid;
        let filename=Date.parse(new Date());
        let imgname=req.body.addform.imgName;
        let path="./public/uploads/adminavatar/"+uid+"/"+filename+imgname
        let arr=[];
        arr.push(path)
        arr.push(uid)
        var sql = 'update t_admin set a_headimg=? where a_id=?';
        adminModule.modifyImgPathDao(arr,sql).then(data=>{
            console.log(data);
            res.send(data);
        }).catch((err)=>{
            console.log(err.message)
        })
    },

};
module.exports=adminController;
