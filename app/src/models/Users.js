"use strict"
const UserStorage=require('./UserStorage');
class Users{
    constructor(body){
        this.body=body;
    }

    async login(){
        const client=this.body;
        try{
        const {id,password}= await UserStorage.getUserInfo(client.id);
        if(id)
        {
            if(id===client.id&&password===client.password)
            {
                console.log("Success is True");
                return {success:true};
            }
            else
            {
                console.log("False");
                return {success:false, message:"비밀번호가 틀렸습니다."};
            }
        }
        return{success:false, message:"이용자를 찾을 수 없습니다"};
        }
        catch(err){
            return{success:false, message:err};
        }
    }

    async register(){
        const client= this.body;
        try{
            console.log('register 시작'+client.id);
            const users=await UserStorage.getUserInfo(client.id);
            if(users==undefined)
            {
                console.log("before calling save");
                const returnValue= await UserStorage.save(client);
                console.log("return value"+ returnValue);
                return returnValue;
            }
            else if(users.id.includes(client.id))
                return{success:false, message:"이미 같은 ID가 존재합니다."};

        }
        catch(err)
        {
            console.log("Error comes out"+err);
            return{success:false, message:err};
        }
    }
}

module.exports=Users;