

$(".login-pwd-btn").on("click", function () {
    var user_value = $("#inputUsername").val();
    var pass_value = $("#inputPassword").val();
  
    $.ajax("http://localhost/ex1/jqregister.php", {
        data: {
            username: user_value,   
            password: pass_value,
            type:"emmm"
        },
        dataType:"json",
        success:function(res){
            console.log(res)
           if(res.type==="yes"){
               alert("登陆成功 ,将为您跳转主页面")
               setTimeout(function(){
                   location.href="./index.html"
               })
           }
           if(res.type==="no_password"){
               alert("密码不对呀")
           }
           if(res.type==="noname"){
               alert("没有这个用户呀")
           }
    
        }
    })
 
        
})

