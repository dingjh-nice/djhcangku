var bottom_bar = document.querySelector(".bottom-bar");

//元素距离窗口顶部的距离
var _top = bottom_bar.offsetTop;
window.addEventListener("scroll",function(){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop > _top){
        $(".bottom-bar").addClass("fixed")
        $(".bottom-bar__extra__name").css({
            display:"block"
        })
        $(".bottom-bar__extra__price").css({
            display:"block"
        })
    }else{
        $(".bottom-bar").removeClass("fixed")
        $(".bottom-bar__extra__name").css({
            display:"none"
        })
        $(".bottom-bar__extra__price").css({
            display:"none"
        })
    }
})

//先获取列表页传递过来的数据
var index = location.href.split("#")[1].split("=")[1];

//请求和列表页一样的json数据
$.ajax("../assert/list.json")
.then(function(res){
    var item1 = res.data0[index];
    console.log(item1)
    $(".img").html(`<img src="${item1.src}" alt="">`)
    $(".brief_primary_content-info-warp").html(`<div class="brief_primary_content-info">
                                        ${item1.title}
                                    </div>
                                    <div class="brief_primary_content-info-price">
                                    ￥${item1.price}
                                    </div>`)
    $(".brief__secondary__info").html(`<div class="brief-time"> ${item1.time}&nbsp;></div>
                                        <div class="brief-pro1">
                                        ${item1.brief1}
                                        </div>
                                        <div class="brief-pro2">
                                        ${item1.brief2}
                                        </div>`)
    $(".bottom-bar__extra").html(`<i class="iconfont">&#xe504;</i>
                                        <div class="bottom-bar__extra__name">
                                        ${item1.title}
                                        </div>
                                        <div class="bottom-bar__extra__price">
                                        ￥${item1.price}
                                        </div>
                                    </div>
                                    `)
})



