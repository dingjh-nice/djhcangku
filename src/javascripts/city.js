
var xhr=new XMLHttpRequest()
xhr.open("GET","http://www.juooo.com/Index/ajaxGetCityRecommendData");
xhr.send(null)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4  && xhr.status ===200){
        var hotlist= JSON.parse(xhr.responseText)
        // console.log(hotlist)
        var html = hotlist.cityList.map(function(item){
            return `
                        <li class="list_item">${item.name}</li>
                    
                    `
        }).join("");
        document.querySelector(".hot-city").innerHTML+=html;
    }
}

