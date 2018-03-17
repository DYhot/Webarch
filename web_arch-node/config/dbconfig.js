const mysql = require("mysql");

const dbpool = {
    pool:{},
    config:{
        host:"localhost",
        port:"3306",
        user:"root",
        password:"",
        database:"webarch"
    },
    create(){
        this.pool = mysql.createPool(this.config);
    },
    connect(sql,arr,fn){
        // console.log("peizhicanshu:",sql,arr)
        this.pool.getConnection((err,connection)=>{
            connection.query(sql,arr,fn);
            connection.release();
        });
    }
};

module.exports = dbpool;
dbpool.create();
