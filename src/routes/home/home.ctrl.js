"use strict"

const home =(req,resp)=>{
    resp.render("home/index");
};

const login=(req,resp)=>{
    resp.render("home/login");
};

module.exports={
    home,
    login,
};