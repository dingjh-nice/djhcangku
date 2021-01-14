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