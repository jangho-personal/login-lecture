"use strict"
const UserStorage=require("../../models/UserStorage");
const output={
    home:(req,resp)=>{
        resp.render("../views/home/index");
    },
    login:(req,resp)=>{
        resp.render("../views/home/login");
    },
};


const process={
    login:(req,resp)=>{
        const id=req.body.id;
        const password=req.body.password;
        const response={};
        let users={};
        users=UserStorage.getUsers('id','password');
        if(users.id.includes(id))
        {
            const idx=users.id.indexOf(id);
            if(password==users.password[idx])
            {
                response.success=true;
                return resp.json(response);
            }
        }
        response.success=false;
        response.message="로그인 실패";
        return resp.json(response);
    },
}

module.exports={
    output,
    process,
};