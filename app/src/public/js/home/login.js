'use strict'

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const loginButton = document.querySelector("#submitBtn");
loginButton.addEventListener("click",login);

function login(){
    const req={
        id: id.value,
        password: password.value,
    };
    fetch('/login',
    {
        method: "POST",
        headers: {
            "content-type":"application/json",
        },
        body: JSON.stringify(req),
    }).then((resp)=>{const data=resp.json();
        console.log(data);
        return data;
    }).then((resp)=>{
        if(resp.success==true)
        {
            location.href='/'
        }
        else
        {
            alert(resp.message);
        }
    }).catch((err)=>{
        console.error("로그인 에러");
    });
}
