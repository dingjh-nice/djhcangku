var login_ele = document.querySelector(".login");
var signin_ele = document.querySelector(".signin");
var username_cookie = getCookie("username");
var logined = document.querySelector(".logined")
var logout_ele = document.querySelector("#logout");
if(username_cookie){
    console.log(username_cookie)
    logined.style.display = "block";
    logined.children[0].innerHTML =  username_cookie  ;
    login_ele.style.display = "none";
    signin_ele.style.display = "none";
}else{
    login_ele.style.display = "block";
    signin_ele.style.display = "block";
}

logout_ele.onclick = function(){
    removeCookie("username");
    // location.reload(true);
    logined.style.display = "none";
    login_ele.style.display = "block";
    signin_ele.style.display = "block";
    
}
