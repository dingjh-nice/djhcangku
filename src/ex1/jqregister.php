<?php
header('Access-Control-Allow-Origin:*');  
// 设置允许的响应类型 
// header('Access-Control-Allow-Methods:POST, GET');  
// 设置允许的响应头 
// header('Access-Control-Allow-Headers:x-requested-with,content-type');


//获取前端数据
$username=$_GET["username"];
$password=$_GET["password"];
$type = $_GET["type"];
// echo $username;
//链接数据库(服务器地址，用户名，密码，数据名字)
//判断是注册还是登陆
if($type==="register"){
$conn=mysqli_connect("localhost","root","123456","bk2002");
//查询数据库里面是否有这个数据
//写sql语句 
$sql = "SELECT * FROM `user_name` WHERE `username`='$username'";
//执行sql语句
$res=mysqli_query($conn,$sql);
// 判断一下数据库里面可否查询到如果没有就是null（false）有的话就是true
if(mysqli_fetch_assoc($res)){
    //没有的话就关闭数据库
    mysqli_close($conn);
    //给前端返回一个内容
    die('{"type":"error","errorType":"用户名重复了"}');
}
//插入sql语句
$sql2="INSERT INTO`user_name`(`username` , `password`) VALUES ('$username','$password')";

//执行
$res2=mysqli_query($conn,$sql2);
echo '{"type":"success"}';
//关闭数据库
mysqli_close($conn);
}
if($type==="emmm"){
    //这是登陆的请求
    //先比对是否有这个用户
    //选择数据库
    $conn=mysqli_connect("localhost","root","123456","bk2002");
    //判断是否有这个用户
    $sql="SELECT * FROM`user_name` WHERE `username`='$username'";
    //执行
    $res=mysqli_query($conn,$sql);
    if(mysqli_fetch_assoc($res)){
        //如果有那么就判断密码
        $sqla="SELECT * FROM`user_name`WHERE `password`='$password'";
        //执行
        $resa=mysqli_query($conn,$sqla);
        if(mysqli_fetch_assoc($resa)){
            die('{"type":"yes","msg":"成功"}');
        }else{
            die('{"type":"no_password","msg":"密码不对"}');
    }

    }else{
        //没有就返回为注册用户
        die('{"type":"noname","msg":"用户名不正确"}');
    }
    
   
   
mysqli_close($conn);
}




