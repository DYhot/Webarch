//创建人：576950395@qq.com
const dbpool = require('../config/dbconfig');
const adminModule = {
    adminDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    if(data.length>0){
                        resolve(data);
                    }
                }
            })
        })
    },
    getCountDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    if(data.length>0){
                        resolve(data);
                    }else{
                        resolve(flag);
                    }
                }
            })
        })
    },
    swithadminDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    if(data!=""){
                        let flag=true;
                        resolve(flag);
                    }
                }
            })
        })
    },
    adminSearchDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                   resolve(data);
                }
            })
        })
    },
    addadminInfoDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    let arr=[]
                    arr.push(data.insertId)
                    resolve(arr);
                }
            })
        })
    },
    modifyImgPathDao(params,sql){
        return new Promise((resolve,reject)=>{
            dbpool.connect(sql,params,(err,data)=>{
                if(err){
                    reject(err);
                }else{
                    resolve(data);
                }
            })
        })
    }
};
module.exports=adminModule;
