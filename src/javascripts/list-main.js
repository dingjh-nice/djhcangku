var ul_ele = document.querySelector(".fadeconSearch ul")
$.ajax("../assert/list.json")
.then(function(res1){
    var list = res1.data0;
    // console.log(res1)
   var html = list.map(function(item , index){
       return `<li class="list-item" data0_index = ${index}>
                    <span class="img">
                    <img class="lazyload" src="https://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif" data-src="${item.src}" alt="" width=202 heihgt=267>
                            <i></i> 
                    </span>
                    <p>${item.title}</p>
                            <div class="time">${item.time}</div>
                            <div class="price">
                                <span class="money">￥</span>
                                <span class="math">${item.price}</span>起
                            </div>
                </li>`
   }).join("")
   ul_ele.innerHTML = html;
   lazyload()
})

$("ul").on("click",".list-item",function(){
    // console.log(this)
    var data0_index = $(this).attr("data0_index");
    // console.log(data0_index)
    location.href = "./detail.html#index="+data0_index;
})



var city = document.querySelectorAll(".citybox")
$.ajax("../assert/list-city.json")
.then(function(res){
    // console.log(res)
    var html = res.data.map(function(item){
        return `
                
                <a href="##">${item.city}</a>
                <span class="line">|</span>
                `
                   
    }).join("")
    city[0].innerHTML = html;
})