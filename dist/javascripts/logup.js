$(".logup-pwd-btn").on("click",function(){
    var user_value = $("#inputUsername1").val();
    var pass_value = $("#inputPassword1").val();
    $.ajax("http://localhost/ex1/jqregister.php",{
        data:{
            username:user_value,
            password:pass_value,
            type:"register"
        },
        dataType:"json",
        success:function(res){
        
            console.log(res)
            if(res.type==="error"){
                alert("用户名重复")
            }if(res.type==="success"){
                alert("创建成功,马上为您跳转到登陆")
                $(".main").find("input").val("")
                $(".main").find("input").css({
                    background:"none"
                })
                $(".main").find("span").text("")
                
                setTimeout(function(){
                    location.href="./signin.html"
                })

            }
        }


    })

})