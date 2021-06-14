"use strict"
const Users=require("../../models/Users");
const output={
    home:(req,resp)=>{
        resp.render("../views/home/index");
    },
    login:(req,resp)=>{
        resp.render("../views/home/login");
    },
    register:(req,resp)=>{
        resp.render("../views/home/register");
    },
};


const process={
    login:async (req,resp)=>{
        const users=new Users(req.body);
        const response = await users.login();
        console.log(response);
        return resp.json(response);
    },
    register:async (req,resp)=>{
        const users=new Users(req.body);
        const response = await users.register();
        return resp.json(response);  
    },
}

module.exports={
    output,
    process,
};