"use strict"
const UserStorage=require('./UserStorage');
class Users{
    constructor(body){
        this.body=body;
    }

    login(){
        console.log(this.body.id);
        const {id,password}=UserStorage.getUserInfo(this.body.id);
        
        if(id)
        {
            if(id===this.body.id&&password===this.body.password)
            {
                return {success:true};
            }
            else
            {
                return {success:false, message:"비밀번호가 틀렸습니다."};
            }
        }
        return{success:false, message:"이용자를 찾을 수 없습니다"};
    }
}

module.exports=Users;