/*!
 * Moajs Middle
 * Copyright(c) 2015-2019 Alfred Sang <shiren1118@126.com>
 * MIT Licensed
 */
const cookieParser = require("cookie-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
// 检查用户会话
module.exports ={
    check_api_token:function(req, res, next){
        console.log('检查post的信息或者url查询参数或者头信息');
        //检查post的信息或者url查询参数或者头信息
        console.log(req.cookie,req.session)
        let token = req.body.token || req.query.token || req.headers['x-access-token'];
        console.log("我是验证接受的token",JSON.parse(token))
        // 解析 token
        if (token) {
            // 确认token
            jwt.verify(token, 'app.get(superSecret)', function(err, decoded) {
                if (err) {
                    return res.json({ success: false, message: 'token信息错误.' });
                } else {
                    // 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
                    req.api_user = decoded;
                    console.dir(req.api_user);
                    next();
                }
            });
        } else {
            // 如果没有token，则返回错误
            // return res.status(403).send({
            //  res.send({
            //     message:false
            // });
            res.redirect("/")
        }
    },
    generate_api_token:function(req, res, next){

    }
};