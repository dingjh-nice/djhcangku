//二级菜单

function Access(kind_link_selector, access_selector,access_warp_selector) {
    this.kind_link = $(kind_link_selector);
    this.access = $(access_selector);
    this.access_warp = $(access_warp_selector)
    this.index = 0;
    this.bindEvent();

}
Access.prototype.bindEvent = function () {
    var _this = this;
    this.kind_link.on("mouseenter", function () {
        _this.changeIndex(this);
        _this.changePage();
        _this.access_warp.show();
    })
    this.kind_link.on("mouseleave",function(){
        _this.access_warp.hide();
    })
}
Access.prototype.changeIndex = function (ele) {
    
    for (var i = 0; i < this.kind_link.length; i++) {
        if (this.kind_link[i] === ele) {
            this.index = $(ele).index()
            // console.log(this.index)
        }
    }
}
Access.prototype.changePage = function () {
    for(var i = 0 ; i<this.access.length ; i++){
        this.access[i].style.display = "none";
        this.kind_link[i].className = this.kind_link[i].className.replace(/\s?active/,"");
    }
        this.access[this.index].style.display = "block";
        this.kind_link[this.index].className += " active";

}

var access = new Access(".kind-link", ".access",".access-warp")
