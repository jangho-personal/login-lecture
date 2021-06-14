"use strict"
const mysql=require("mysql");
const db=mysql.createConnection(
    {
        host:"login-lecture.c45lexvw8uvo.ap-northeast-2.rds.amazonaws.com",
        user:"admin",
        password:"Exlibris1!",
        database:"login_lecture",
    }
)
db.connect();
module.exports=db;