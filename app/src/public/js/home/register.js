'use strict'

const id = document.querySelector("#id");
const password = document.querySelector("#password");
const name = document.querySelector('#name');
const confirmPassword= document.querySelector('#confirm-password');
const registerButton = document.querySelector("#button");
registerButton.addEventListener("click",register);

function register(){
    const req={
        id: id.value,
        name: name.value,
        password: password.value,
        confirmPassword: confirmPassword.value,

    };
    if(password.value!=confirmPassword.value)
    {
        return alert("비밀번호가 다릅니다.");
    }
    if(id==='')
    {
        return alert("아이디를 입력해 주세요");
    }
    fetch('/register',
    {
        method: "POST",
        headers: {
            "content-type":"application/json",
        },
        body: JSON.stringify(req),
    }).then((resp)=>{
        const data=resp.json();
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
