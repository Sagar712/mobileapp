function swipeleft1(){
    document.getElementById("content1").style.transform="translateX(0%)";
    document.getElementById("content2").style.transform="translateX(100%)";
    document.getElementById("content3").style.transform="translateX(200%)";
    document.getElementById("icon1").style.color="#fff";
    document.getElementById("icon2").style.color="rgb(151, 202, 209)";
    document.getElementById("icon3").style.color="rgb(151, 202, 209)";

}

function swipeleft2(){
    document.getElementById("content1").style.transform="translateX(-100%)";
    document.getElementById("content2").style.transform="translateX(0%)";
    document.getElementById("content3").style.transform="translateX(100%)";
    document.getElementById("icon2").style.color="#fff";
    document.getElementById("icon1").style.color="rgb(151, 202, 209)";
    document.getElementById("icon3").style.color="rgb(151, 202, 209)";
}

function swipeleft3(){
    document.getElementById("content1").style.transform="translateX(-200%)";
    document.getElementById("content2").style.transform="translateX(-100%)";
    document.getElementById("content3").style.transform="translateX(0%)";
    document.getElementById("icon3").style.color="#fff";
    document.getElementById("icon2").style.color="rgb(151, 202, 209)";
    document.getElementById("icon1").style.color="rgb(151, 202, 209)";
}

let chngeicn=0;
const overlay = document.querySelector(".ovelay2");
function changeicon(){
    chngeicn++;
    const drop = document.querySelector(".dropdown");
    if(chngeicn%2!=0){
        document.getElementById("changeiconq").className="fas fa-times";
        drop.classList.toggle("active");
        overlay.classList.toggle("active");
        document.querySelector(".seeting").classList.toggle("active");
    }
        
    else{
        document.getElementById("changeiconq").className="fas fa-bars";
        drop.classList.toggle("active");
        overlay.classList.toggle("active");
        document.querySelector(".seeting").classList.toggle("active");
    }
        
}



function overlayhandle(){
    console.log("overlay clicked");
    chngeicn++;
    const drop = document.querySelector(".dropdown");
    if(chngeicn%2!=0){
        document.getElementById("changeiconq").className="fas fa-times";
        drop.classList.toggle("active");
        overlay.classList.toggle("active");
        document.querySelector(".seeting").classList.toggle("active");
    }
        
    else{
        document.getElementById("changeiconq").className="fas fa-bars";
        drop.classList.toggle("active");
        overlay.classList.toggle("active");
        document.querySelector(".seeting").classList.toggle("active");
    }
}