window.addEventListener("load",function(){

})
const showCategory =document.querySelector(".category_title")
const category = document.querySelector(".category-list")
var mobiLeScreen = window.matchMedia("(max-width : 1000px")
if(mobiLeScreen.matches){
    category.classList.add("toggle")
}
showCategory.addEventListener("click",function(){
    category.classList.toggle("toggle")

})

const btnfilters = document.querySelectorAll(".btn-toggle")

btnfilters.forEach((btnfilter) => btnfilter.addEventListener("click", function(){
    btnfilters.forEach((el) => el.classList.remove("btn-bgr"))
    btnfilter.classList.add("btn-bgr")
}))

const popup = document.querySelector(".popup")
const closePopup = document.querySelector(".popup_img span")
closePopup.addEventListener("click", function(){
    popup.style.display = "none"
})