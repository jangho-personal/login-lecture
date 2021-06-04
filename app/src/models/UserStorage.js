"use strict"

class UserStorage{
    static #users={
        id:['jjjanghop', 'leesol', 'jongsook'],
        password:['1234','1234','1234'],
        name:['이장호','이솔','오종숙']
    };
    static getUsers(...fields){
        const users=this.#users;
        const newUsers=fields.reduce((newUsers,field)=>{
            if(users.hasOwnProperty(field))
            {
                newUsers[field]=users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    static getUserInfo(id)
    {
        const users=this.#users;
        const idx=users.id.indexOf(id);
        const usersKeys=Object.keys(users);
        const userInfo=usersKeys.reduce((newUserInfo,info)=>{
            newUserInfo[info]=users[info][idx];
            return newUserInfo;
        },{})
        console.log(userInfo);
        return userInfo;
    }
}

module.exports=UserStorage;