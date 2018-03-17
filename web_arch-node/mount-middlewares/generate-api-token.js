/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */
const crypto=require("crypto");
const jwt=require("jwt-simple");
// 检查用户会话
module.exports =exports={
    self:this,
    createToken:function(req,res,timeout){
        let user=req.body.name;
        console.log(parseInt(timeout)||0);
         let token={
            data:user,//payload
            created:parseInt(Date.now()/1000),//token生成的时间的，单位秒
            exp:parseInt(timeout)||300//token有效期
        };
        //payload信息
        var base64Str=Buffer.from(JSON.stringify(token),"utf8").toString("base64");
        //添加签名，防篡改
        var secret="hel.h-five.com";
        var hash=crypto.createHmac('sha256',secret);
        hash.update(base64Str);
        var signature=hash.digest('base64');
        // let token=base64Str+"."+signature;
        console.log("base64Str:",base64Str+"."+signature)
        console.log("wodeseesion",req.session)
        res.send({
            message:true,
            token:base64Str+"."+signature
        })
    },
    decodeToken:function(token){
        var decArr=token.split(".");
        if(decArr.length<2){
            //token不合法
            return false;
        }
        var payload={};
        //将payload json字符串 解析为对象
        try{
            payload=JSON.parse(Buffer.from(decArr[0],"base64").toString("utf8"));
            console.log("解析后的token",payload)
        }catch(e){
            return false;
        }
        //检验签名
        var secret="hel.h-five.com";
        var hash=crypto.createHmac('sha256',secret);
        hash.update(decArr[0]);
        var checkSignature=hash.digest('base64');
        return {
            payload:payload,
            signature:decArr[1],
            checkSignature:checkSignature
        }
    },
    checkToken:function(req,res,next){
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        console.log("我是保持的session:",req.session)
        var resDecode=module.exports.decodeToken(token);
        if(!resDecode){
            return false;
        }
        //是否过期
        var expState=(parseInt(Date.now()/1000)-parseInt(resDecode.payload.created))>parseInt(resDecode.payload.exp)?false:true;
        // console.log("resDecode.data:",resDecode.payload.data)
        // expState=false
        if(resDecode.signature===resDecode.checkSignature&&expState){
            next();
        }else {
            res.send({
                success:false,
                message:false
            })
        }
    }
};