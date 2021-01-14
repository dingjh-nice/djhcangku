var recom_title_other = document.querySelector(".recom-title-other");
var recom_list = document.querySelector(".recom-list");
recom_title_other.addEventListener("mouseover", function () {
    recom_list.style.display = "block"
})
recom_title_other.addEventListener("mouseout", function () {
    recom_list.style.display = "none"
})
