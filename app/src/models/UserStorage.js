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
}

module.exports=UserStorage;