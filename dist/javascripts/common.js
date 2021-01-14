function setCookie( key , value , options ){
      // 如果在options之中存在某个属性那么我们就直接把这个属性和属性值拼接到字符串，如果没有我们就不用拼接了;
      // 如果options没有传递，那么这个时候options是undefined 会导致程序出问题; 
      // 给 options设置默认参数; 
      options = options || {};
      
      if( options.expires ){
            var d = new Date();
            d.setDate(d.getDate() + options.expires );
      }
      var cookie_string = [
            key + "=" + value,
            options.path ? ";path=" + options.path : "",
            options.expires ? ";expires=" + d : "",
            options.domain ? ";domain=" + options.domain : "",
      ].join("");

      document.cookie = cookie_string;

}

function removeCookie( key , options ){
      // console.log(  { ...options , expires : -1 } ) 
      // 删除为啥要写路径 :
      // 删除的根本其实就是覆盖, 需要精准找到某一条数据然后进行覆盖; 
      setCookie( key , null , { ...options , expires : -1 })
}

function getCookie( key ){
      var cookie_array = document.cookie.split("; ");
      for(var i = 0 ; i < cookie_array.length ; i++){
            var cookie_item_array = cookie_array[i].split("=");
            if(cookie_item_array[0] === key){
                  return cookie_item_array[1];
            }
      }
      return "";
}

function ajax( url , options ){
      // 1. 设置默认的请求方式 : 
      options = Object.assign({
            type : "GET"
      } , options);
      var xhr = new XMLHttpRequest();
      xhr.open( options.type , url );
      // 可以省略大括号但是只能有一行代码; 
      // 如果请求方式为POST那么我们需要加上请求头; 
      if(options.type.toUpperCase() === "POST")
            xhr.setRequestHeader("Content-Type" , "application/x-www-form-urlencoded");
      xhr.send( options.data ? options.data : null );

      // promise对象在封装之中的作用就是包裹异步代码： 
      var promise = new Promise( function( resolve ){
            xhr.onreadystatechange = function(){
                  if( xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
                        typeof options.callback === "function" ?  options.callback(xhr.responseText) : "";
                        // 数据加载完成才算成功; 
                        resolve( xhr.responseText );
                  }
            }
      });
      return promise;
}   

function jsonp( url , callback_feild , callback , data ){
      data = data || "";

      var script = document.createElement("script");
      var fn_name = "_" + Date.now() + (Math.random() + "").replace(/0\./g,"_");
      
      // (data ? "&" : "") : 如果data存在就用 & 拼接 如果data不存在就直接拼接; 
      url += (/\?/.test(url) ? "&" : "?") + data + (data ? "&" : "") + callback_feild + "=" + fn_name;
      console.log(url);
      script.src = url;

      document.body.appendChild(script);                  
      script.onload = function(){
            document.body.removeChild(script);
      }
      // 如果我们写的全局函数名是写死的; 
      // 全局变量可能存在命名空间问题;
      // 别人使用了这个全局变量， 你在封装里面也使用这个全局变量导致程序冲突; 
      // 我们的全局函数不要和别人的全局变量重名; 
      // 时间戳 : 
      // 随机数 : 
      // 确保全局函数命名的唯一性; 
      // var fn_name = "_" + Date.now() + (Math.random() + "").replace(/0\./g,"_");
      // 把全局函数名提前; 

      window[fn_name] = function(res){
            callback(res);
      }
}