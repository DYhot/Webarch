//创建人：576950395@qq.com
const loginModule = require('../dao/loginDao');
const crypto = require('crypto');
const loginController = {
    adminvalidation(req,res,next){
        let arr=[];
        arr.push(req.body.name)
        arr.push(req.body.password)
        // console.log(arr)
        var sql = 'SELECT a_name,a_headimg,a_pwd,a_id FROM t_admin WHERE 1=1 and state=1';
        if(arr.length>0){
            sql += ' AND a_name=?'
        }
        loginModule.adminDao(arr,sql).then(data=>{
            if(data.length>0){
                // 设置session信息
                let user={
                    uid:data[0].a_id,
                    name:data[0].a_name,
                    headimg:data[0].a_headimg
                }
                req.session.user=user;
                next();
            }
        })
    },
    lockvalidation(req,res,next){
        let arr=[];
        if(req.session.user.name){
            arr.push(req.session.user.name)
            arr.push(req.body.lockpassword)
            console.log("token中的用户名",req.session.user.name)
            var sql = 'SELECT a_pwd FROM t_admin WHERE 1=1 and state=1';
            if(arr.length>0){
                sql += ' AND a_name=?'
            }
            loginModule.adminDao(arr,sql).then(data=>{
                console.log("控制层的data",data)
                // res.send("11111111");
                // console.log("woshires",res)
                if(data.length>0){
                    res.send({
                        success:true,
                        message:"账号验证成功"
                    })
                }else {
                    res.send({
                        success:false,
                        message:"账号密码错误"
                    })
                }
            })
        }else{
            res.send({
                success:false,
                message:"session已经过期了"
            })
        }

    },
    login(req,res){
        res.render('login');
    },
    getUser(req,res){
        let username = req.body.username;
        var hasher=crypto.createHash("md5");
        var arr = [];
        req.session.username = username;
        if(req.body.password){
            hasher.update(req.body.password);
            var hashmsg=hasher.digest('hex');
            // console.log(hashmsg);
            arr.push(username);
            arr.push(hashmsg);
        }else{
            arr.push(username);
        }
        loginModule.userDao(arr).then(data=>{
            if(data.length>0){
                req.session.userid = data[0].a_id;
                req.session.username = data[0].a_name;
                req.session.userimg = data[0].a_headimg;
                if(req.body.checkbox){
                    res.cookie("user",{"user":req.body.username,"pwd":req.body.password,"id":data[0].a_id},{maxAge:1000*60*60});
                }
                res.send({flag:1,message:"成功"});
            }else{
                res.send({flag:-1,message:"错误"});
            }
        });
    }
};
module.exports=loginController;
