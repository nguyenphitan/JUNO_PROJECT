//-----------------detail product------------------------//

//------su kien click vao thay doi anh----------------//

const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(".product-content-left-small-img img ")

smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

const colourButton1 = document.querySelector(".colour1")
const colourButton2 = document.querySelector(".colour2")
const colourButton3 = document.querySelector(".colour3")
if(colourButton1){
    colourButton1.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "none" 
        document.querySelector(".product-content-left-img3").style.display = "none" 
        document.querySelector(".product-content-left-img1").style.display = "flex"
        document.querySelector(".colour1").style.border = "1px solid #000";
        document.querySelector(".colour2").style.border = "none";
        document.querySelector(".colour3").style.border = "none";
        document.querySelector(".colour1").style.borderRadius = "50%";

    })
}
if(colourButton2){
    colourButton2.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "flex" 
        document.querySelector(".product-content-left-img3").style.display = "none" 
        document.querySelector(".product-content-left-img1").style.display = "none"
        document.querySelector(".colour2").style.border = "1px solid #000";
        document.querySelector(".colour3").style.border = "none";
        document.querySelector(".colour1").style.border = "none";
        document.querySelector(".colour2").style.borderRadius = "50%";


    })
}
if(colourButton3){
    colourButton3.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "none" 
        document.querySelector(".product-content-left-img3").style.display = "flex" 
        document.querySelector(".product-content-left-img1").style.display = "none"
        document.querySelector(".colour3").style.border = "1px solid #000";
        document.querySelector(".colour1").style.border = "none";
        document.querySelector(".colour2").style.border = "none";
        document.querySelector(".colour3").style.borderRadius = "50%";


    })
}

//----------su kien click vao thay doi noi dung---------------//
const mota = document.querySelector(".product-content-right-detail-bottom-title-item-mota");
const chitiet = document.querySelector(".product-content-right-detail-bottom-title-item-chitiet");
if(mota){
    mota.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom-title-item-mota").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-right-detail-bottom-content-chitiet").style.display = "none" 
        document.querySelector(".product-content-right-detail-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-detail-bottom-title-item-chitiet").style.borderBottom = "1px solid #000";
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom-content-chitiet").style.display = "block" 
        document.querySelector(".product-content-right-detail-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-detail-bottom-title-item-chitiet").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-right-detail-bottom-title-item-mota").style.borderBottom = "1px solid #000";
    })
}

//su kien click vao thay doi noi dung//
const huongdan = document.querySelector(".product-content-policy-title-huongdan")
const chinhsach = document.querySelector(".product-content-policy-title-chinhsach")
if(huongdan){
    huongdan.addEventListener("click",function(){
        document.querySelector(".product-content-policy-content-chinhsach").style.display = "none" 
        document.querySelector(".product-content-policy-content-huongdan").style.display = "block"
        document.querySelector(".product-content-policy-title-huongdan").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-policy-title-chinhsach").style.borderBottom = "1px solid #000";
    })
}
if(chinhsach){
    chinhsach.addEventListener("click",function(){
        document.querySelector(".product-content-policy-content-chinhsach").style.display = "block" 
        document.querySelector(".product-content-policy-content-huongdan").style.display = "none"
        document.querySelector(".product-content-policy-title-chinhsach").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-policy-title-huongdan").style.borderBottom = "1px solid #000";
    })
}

//-su kien click thu gon noi dung----//
const buttonDetail = document.querySelector(".product-content-right-detail-top");
if(buttonDetail){
    buttonDetail.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom").classList.toggle("acticeB")
    })
}

// const searchS = document.querySelector("")
const btnsize1 = document.querySelector(".size1")
const btnsize2 = document.querySelector(".size2")
const btnsize3 = document.querySelector(".size3")
const btnsize4 = document.querySelector(".size4")
if(btnsize1){
    btnsize1.addEventListener("click",function(){

        document.querySelector(".size1").style.border = "1px solid #000";
        document.querySelector(".size2").style.border = "none";
        document.querySelector(".size3").style.border = "none";
        document.querySelector(".size4").style.border = "none";
      
   
    })
}
if(btnsize2){
    btnsize2.addEventListener("click",function(){

        document.querySelector(".size2").style.border = "1px solid #000";
        document.querySelector(".size1").style.border = "none";
        document.querySelector(".size3").style.border = "none";
        document.querySelector(".size4").style.border = "none";
      
   
    })
}
if(btnsize3){
    btnsize3.addEventListener("click",function(){

        document.querySelector(".size3").style.border = "1px solid #000";
        document.querySelector(".size2").style.border = "none";
        document.querySelector(".size1").style.border = "none";
        document.querySelector(".size4").style.border = "none";
      
   
    })
}
if(btnsize4){
    btnsize1.addEventListener("click",function(){

        document.querySelector(".size4").style.border = "1px solid #000";
        document.querySelector(".size2").style.border = "none";
        document.querySelector(".size3").style.border = "none";
        document.querySelector(".size1").style.border = "none";
      
   
    })
}

// Sự kiện mua ngay
const cartClick = document.querySelector('.btn1');
const cartOverlay = document.querySelector('.cart__overlay');
const closecartOvelay = document.querySelector('.cart__overlay .fa-times');
cartClick.onclick = () => {
    cartOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

closecartOvelay.onclick = () => {
    cartOverlay.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
}

// footer
const hotlineExtend = document.querySelector('.hotline__extend');
const hotlineClick = document.querySelector('.hotline__extend__click');
const hotlineOverlay = document.querySelector('.hotline__overlay');
const closeHotlineOverlay = document.querySelector('.hotline__overlay .fa-sort-up');
hotlineClick.onclick = () => {
    hotlineOverlay.style.display = 'block';
    hotlineExtend.style.display = 'none';
}

closeHotlineOverlay.onclick = () => {
    hotlineOverlay.style.display = 'none';
    hotlineExtend.style.display = 'block';
}

// Navbar
const bar = document.querySelector('.bar__icon');
const navOverlay = document.querySelector('.nav__overlay'); 
const overlay = document.querySelector('.overlay');

bar.onclick = function() {
    navOverlay.style.transform = 'translateX(0%)';
    bar.style.display = 'none';
    overlay.style.display = 'block';
}

// Menu
const closeMenu = document.querySelector('.nav__overlay__menu .fa-chevron-left');
closeMenu.onclick = function() {
    navOverlay.style.transform = 'translateX(-100%)';
    bar.style.display = 'block';
    overlay.style.display = 'none';
    productOverlay.style.transform = 'translateX(-100%)';
}

// Overlay
overlay.onclick = function() {
    navOverlay.style.transform = 'translateX(-100%)';
    bar.style.display = 'block';
    overlay.style.display = 'none';
    inputOverlay.style.transform = 'translateX(100%)';
    cartOverlay.style.transform = 'translateX(100%)';
    productOverlay.style.transform = 'translateX(-100%)';
}

// Input search overlay
const inputSearch = document.querySelector('.input__search');
const inputOverlay = document.querySelector('.input__overlay');
const closeInputOverlay = document.querySelector('.input__overlay .fa-times');
inputSearch.onclick = function() {
    inputOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

closeInputOverlay.onclick = function() {
    inputOverlay.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
}

// list product overlay
const openProductOverlay = document.querySelector('.nav__item.item2 .fa-chevron-right');
const productOverlay = document.querySelector('.product__overlay');
const titleProductOverlay = document.querySelector('.product__overlay__menu .fa-chevron-left');
openProductOverlay.onclick = function() {
    productOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

titleProductOverlay.onclick = function() {
    productOverlay.style.transform = 'translateX(-100%)';
}