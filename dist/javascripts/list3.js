var city = document.querySelectorAll(".citybox")
$.ajax("../assert/list-city3.json")
.then(function(res){
    var html = res.data2.map(function(item){
        return `
        
        <a href="##">${item.time}</a>
        <span class="line">|</span>
        `
        
    }).join("")
    // console.log(html)
    city[2].innerHTML = html;
})