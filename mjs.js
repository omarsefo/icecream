var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

function imgc(bb){
    document.getElementById("star").src = bb;
}
function chang(color){
    var circl1 =document.querySelector('.back');
    var circl2 =document.querySelector('.back2');
    var a =document.getElementById('a');
    circl1.style.background=color;
    circl2.style.background=color;
    h2.style.color=color;
    a.style.background=color;
}
var span =document.querySelector('span');
var h2 =document.getElementById('h2');
var star1 =document.getElementById("vw");
var h4 =document.getElementById("h4");


img1.addEventListener('click',()=>{
    h2.innerHTML="Caramel";
    star1.style.color="#111";
    span.innerHTML="$3.50";
    h4.innerHTML="40.5 K";
});
img2.addEventListener('click',()=>{
    h2.innerHTML="Chocolate";
    star1.style.color="#444";
    span.innerHTML="$2.50";
    h4.innerHTML="33.2 K";

});