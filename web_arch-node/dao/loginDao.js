//创建人：576950395@qq.com
const dbpool = require('../config/dbconfig');
const loginModule = {
    adminDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                console.log("dao层的data",data)
                if(data.length>0){
                    if(params[1]==data[0].a_pwd){
                        resolve(data);
                    }else{
                        let flag=false;
                        resolve(flag);
                    }
                }else{
                    resolve("账号已被禁用");
                }
            })
        })
    }
};
module.exports=loginModule;
