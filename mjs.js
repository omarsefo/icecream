setTimeout(function() {
    var response = confirm("Do you want to see the real UI/UX images that I copied?\nClick OK to allow pop-ups for this site and reload the page please.");
    if (response) {
        var image = new Image();
        image.src = "./img/img.jpg";
        image.alt = "ice cream";

        var newWindow = window.open("", "_blank");
        
        newWindow.document.write("<!DOCTYPE html><html><head><title>Image Display</title></head><body>");
        newWindow.document.write("<img width='100%' src='" + image.src + "' alt='" + image.alt + "'>");
        newWindow.document.write("</body></html>");
    } else {

    }
  }, 1500);

function imgc(bb){
    document.getElementById("star").src = bb;
}
function chang(color, acolor){
    var circl1 =document.querySelector('.back');
    var circl2 =document.querySelector('.back2');
    circl1.style.background=color;
    circl2.style.background=color;
    a.style.background=acolor;
}
var span =document.querySelector('span');
var h2 =document.getElementById('h2');
var star1 =document.getElementById("vw");
var h4 =document.getElementById("h4");
var a =document.getElementById('a');
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");

img1.addEventListener('click',()=>{
    h2.innerHTML="Blueberry";
    star1.style.color="#111";
    span.innerHTML="$2.50";
    h4.innerHTML="40.5 K";
});
img2.addEventListener('click',()=>{
    h2.innerHTML="Chocolate";
    star1.style.color="#44444496";
    span.innerHTML="$3.50";
    h4.innerHTML="33.2 K";
});
a.addEventListener('click',()=>{
    document.getElementById("star").src="img/photo_2jpg.jpg";
    setTimeout(()=>{
        document.getElementById("star").src="img/bluebery.png";
    },5000)
})

