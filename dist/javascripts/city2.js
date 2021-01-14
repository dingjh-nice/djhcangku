var xhr1=new XMLHttpRequest()
xhr1.open("GET","/assert/city.json");
xhr1.send(null);

xhr1.onreadystatechange = function(){
    if(xhr1.readyState === 4  && xhr1.status ===200){
        var data1 = JSON.parse(xhr1.responseText)
        var html = data1.data1.map(function(item){
            return `
                        <li class="list_item">
                            <a href="" class="shi">
                            ${item.city}
                                <span>(${item.count})</span>
                            </a>
                        </li>

                    `
        }).join("");
        document.querySelector(".other_city").innerHTML=html;
    }
}