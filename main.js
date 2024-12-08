const massege = document.querySelector(".massege");
const errorMsg = document.querySelector(".error");

massege.innerHTML = '';
const btn = document.querySelector(".btn");
const reset = document.querySelector(".reset-btn");
reset.addEventListener('click',()=>{
massege.innerHTML = '';
});
btn.addEventListener('click',()=>{
    fetch("https://emojihub.yurace.pro/api/random")
    .then(response =>{
        
        return response.json();
    })
    .then(data =>{
        console.log(data);
            massege.innerHTML = `<div class="massege2">
            <h1 style = color:black>
            <span style = color:red>Emoji Name : </span>${data.name.toUpperCase()}</h1>
            <h1 class="emoji" style = color:green>${data.htmlCode}</h1>
            </div>`
            // console.log(data);
            console.log(`emoji name : ${data.name}`);
            console.log(`emoji unicode : ${data.unicode[0]}`);
            // console.log(data.unicode[0]);
            console.log(`Group name : ${data.group}`);
            console.log(`Group name : ${data.category}`);
            console.log("hello");      

    })
    .catch(error =>{

        errorMsg.innerHTML = `<div class="error2">
        <p style=color:#000>Please Try Again${error}</p>
        </div>`;
    })
});

