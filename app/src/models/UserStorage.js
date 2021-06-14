"use strict"
const fs = require('fs').promises;
const db=require("../config/db");

class UserStorage{
    static getUsers(isAll,...fields){

    }
    static getUserInfo(id)
    {
        return new Promise((resolve, reject)=>{
            console.log("getUserInfo 시작"+id);
            db.query("SELECT * FROM users WHERE id=?",[id],(err,data)=>{
                if(err)
                {
                    console.log("this is err");
                    reject(`${err}`);
                }
                console.log(data[0]);
                resolve(data[0]);
            })
        })
    }

    static async save(userInfo)
    {
        console.log("SAVE 시작");
        const query="INSERT INTO users(id, name, password) VALUES(?,?,?);";
        return new Promise((resolve, reject)=>{
            db.query(query,[userInfo.id, userInfo.name, userInfo.password],(err)=>{
                if(err)
                    reject(`${err}`);
                resolve({success:true});
            })
        })
    }
}

module.exports=UserStorage;