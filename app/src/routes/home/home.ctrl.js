"use strict"

const home =(req,resp)=>{
    resp.render("../views/home/index");
};

const login=(req,resp)=>{
    resp.render("../views/home/login");
};

module.exports={
    home,
    login,
};