var city = document.querySelectorAll(".citybox")
$.ajax("../assert/list-city2.json")
.then(function(res){
    // console.log(res)
    var html = res.data1.map(function(item){
        return `
                
                <a href="##">${item.sel}</a>
                <span class="line">|</span>
                `
                   
    }).join("")
    city[1].innerHTML = html;
})