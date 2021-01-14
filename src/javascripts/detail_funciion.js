
function Magnifier(){
    // focus元素
    this.focus_ele = document.querySelector(".focus");
    // 大图盒子
    this.big_box_ele =document.querySelector(".big-img");
    // 小图图片
    this.small_img_ele = document.querySelector(".small-img img");
    //小图盒子
    this.small_box_ele = document.querySelector(".small-img");
    // 大图图片
    this.big_img_ele = document.querySelector(".big-img img");
    // 按钮盒子
    this.button_box_eles = document.querySelectorAll(".img-bbox");


    // 获取元素的宽高
    this.focus_size = getComputedStyle(this.focus_ele);
    this.big_box_size = getComputedStyle(this.big_box_ele);
    this.small_img_size = getComputedStyle(this.small_img_ele);
    this.small_box_size = getComputedStyle(this.small_box_ele);
    this.big_img_size = {};

    this.init();

    // 计算focus的最大值
    this.focus_max ={
        left : parseInt(this.small_box_size.width) - parseInt(this.focus_size.width),
        top : parseInt(this.small_box_size.height) - parseInt(this.focus_size.height)
    }

    this.big_max ={
        left : parseInt(this.big_img_size.width) - parseInt(this.big_box_size.width),
        top : parseInt(this.big_img_size.height) - parseInt(this.big_box_size.height)
    }
    this.bindEvent();

}
// function $(selector){
//     return document.querySelector(selector);
// }
// function $$(selector){
//     return document.querySelectorAll(selector);
// }


Magnifier.prototype.init = function(){
    this.big_img_size.width = parseInt(parseInt(this.big_box_size.width) * parseInt(this.small_box_size.width) / parseInt(this.focus_size.width));
    this.big_img_size.height = parseInt(parseInt(this.big_box_size.height) * parseInt(this.small_img_size.height) / parseInt(this.focus_size.height));


    this.big_img_ele.style.width = this.big_img_size.width + "px";
    this.big_img_ele.style.height = this.big_img_size.height + "px";

}

Magnifier.prototype.bindEvent = function(){
    var _this = this;
    this.small_box_ele.onmouseover = function(){
        _this.toggle("show");

    }

    this.small_box_ele.onmouseout = function(){
        _this.toggle("hide");
    }

    this.small_box_ele.onmousemove = function(evt){
        // 获取鼠标当前光标位置
        evt = evt || event;
        _this.follow(evt.offsetX , evt.offsetY)
    }

    // 给所有的盒子都绑定一下事件
    for(var i=0;i<this.button_box_eles.length;i++){
        this.button_box_eles[i].onclick = function(){

            _this.change(this);
        }
    }

}


Magnifier.prototype.toggle = function(type){
    var attr = type === "show" ? "block" : "none";
    

    this.focus_ele.style.display = attr;
    this.big_box_ele.style.display = attr;
}

// 跟随功能
Magnifier.prototype.follow = function( x , y){
    var _left = x - parseInt(this.focus_size.width) / 2;
    var _top = y -parseInt(this.focus_size.height) / 2;

    // 边界检测
    _left = _left <=0 ? 0 : _left;
    _left = _left >= this.focus_max.left ? this.focus_max.left : _left;


    _top =  _top <= 0 ? 0 : _top;
    _top = _top >= this.focus_max.top ? this.focus_max.top : _top;

    this.focus_ele.style.left = _left + "px";
    this.focus_ele.style.top = _top + "px";


    // 位移
    // 计算移动的比例

    var left_prop = _left /  this.focus_max.left;
    var top_prop = _top / this.focus_max.top;

    this.big_img_ele.style.left = -this.big_max.left * left_prop + "px";
    this.big_img_ele.style.top = -this.big_max.top * top_prop + "px";

}

Magnifier.prototype.change = function(ele){

    this.small_img_ele.src = ele.getAttribute("data-small");
    this.big_img_ele.src = ele.getAttribute("data-big");

}


var mag = new Magnifier();




// 购买按钮
$(".detail_btn").on("click",function(){
    $("#buy").css({
        display:"block"
    })
})

$(".sp-btn").on("click",function(){
    $("#buy").css({
        display:"none"
    })
})


// 选项卡
$(".buy_date li").on("click",function(){

    // 先清除类名
    $(".buy_date li").removeClass("active");
    $(this).addClass("active");
    $(".buy_count li").removeClass("active");
   
})


$(".buy_count li").on("click",function(){
    $(".buy_count li").removeClass("active");
    $(this).addClass("active");
    $(".price li").removeClass("active");
})


$(".price li").on("click",function(){
    // 先清除类名
    $(".price li").removeClass("active");
    $(this).addClass("active");
   
})

// 选座购买
console.log($(".buy_date li").hasClass("active"));

var user_cookie = getCookie("username");
// console.log( $(".buy_date li").hasClass("active") ,  );
$(".buy_btn").on("click",function(){
    if(!$(".buy_date li").hasClass("active") || !$(".buy_count li").hasClass("active") || !$(".price li").hasClass("active")){
       
        return;
    }
    if(user_cookie){
        $(".buy_box")
        
        .animate({   
            opacity:1
        },2000)

    }else{

        setTimeout(function(){
            location.href = "../logo.html";
        },70);
        
    }
})