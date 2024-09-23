var next= document.getElementById("front");
var back= document.getElementById("back");
var slider= document.getElementsByClassName("slider");
var backchange= document.getElementById("bg");

var imgpath = new Array(
    "nat.jpg",
    "min.jpg",
    "col.jpg",
    "china.jpg",
    "man.jpg"
);

let i = 0;
next.onclick= function(){

    if(i<4){
    backchange.style.backgroundImage= 'url("'+imgpath[i+1]+'")';
    slider[i+1].classList.add("active");
    slider[i].classList.remove("active");

    i++;
}};

back.onclick= function(){

    if(i>0){
    backchange.style.backgroundImage= 'url("'+imgpath[i-1]+'")';
    slider[i-1].classList.add("active");
    slider[i].classList.remove("active");
    i--;
}};


