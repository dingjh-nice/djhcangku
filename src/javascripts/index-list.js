//首页列表
var xhr3 = new XMLHttpRequest();
xhr3.open("GET","https://api.juooo.com/Show/Search/getShowList?city_id=0&category=&keywords=&venue_id=&start_time=&page=2&referer_type=index&time=1604301375620&version=6.1.10&referer=2&sign=c2b6418d15188cd97e8bc7e83722d390")

xhr3.send(null);

xhr3.onreadystatechange = function(){
    if(xhr3.readyState === 4 && xhr3.status ===200){
        var data2 = JSON.parse(xhr3.responseText)
        console.log(data2)
        var html = data2.data.list.map(function(item){
            return `<li class="panel-list-item left">
                                <div class="panel-item-img">
                                          <i class="logo-i"></i>
                                          <img class="lazyload" src="" data-src="${item.pic}" alt=""  width=220 height=292>
                                          <div class="panel-item-info">
                                                <div class="panel-didian">
                                                      <span class="iconfont">&#xe61e;</span>
                                                      <a href="#">${item.venue_name}</a>
                                                </div>
                                                <div class="panel-time">
                                                      <span class="iconfont">&#xe604;</span>
                                                      <a href="#">${item.start_show_time}</a>
                                                </div>
                                          </div>
                                    </div>
                                    <div class="panel-item-title">
                                        <a href="">${item.name}</a>
                                    </div>
                                    <div class="panel-item-text">
                                          <div class="panel-item-text-one left">${item.city_name}</div>
                                          <div class="panel-item-text-two right">
                                                <span class="panel-item-text-two-mon">￥</span>
                                                <span class="panel-item-text-two-mons">${item.cate_parent_id}</span>
                                               起
                                          </div>
                                 </div>
                                 </li>
            `
        }).join("");
        document.querySelector(".panel-list").innerHTML= html;
        lazyload()
    }
}

//回到顶部功能

$(".gotop-to").on("click",function(e){
      console.log(1)
      $("body,html").scrollTop( 0 ) ;
  })


//点击跳转列表页
  $(".kind-link").on("click",function(){
      location.href= "./list.html";
  })

//二级菜单显示隐藏的鼠标事件
var t;
$(".kind-link").on("mouseover",function(){
      var index = $(this).index(".kind-link");
      $(".access").hide()
      $(".access").eq(index).show();
      $(".access-warp").show()   
})
$(".kind-list").on("mouseout",function(){
      $(".access-warp").hide()   
})
// $(".access-warp").on("mouseout",function(){
//       $(".access-warp").hide() 
// })


//滚动条事件
function sct(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  var show_ele = document.querySelector(".show")
  window.onscroll = function(){
      var scrollTop = document.body.scrollTop ||  document.documentElement.scrollTop ;
      if(scrollTop >800){
              show_ele.style.display = "block";
      }else{
          show_ele.style.display = "none";
      }
  }

//点击二级菜单

  $(".kind-link").on("click",function(){
      location.href= "./list.html";
  })
