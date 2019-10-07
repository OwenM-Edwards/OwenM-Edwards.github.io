// Select h1 and p in parallax to fade out on scroll
const paraH1 = document.querySelector(".parallax h1");
const paraP = document.querySelector(".parallax div h2");
const docMain = document.documentElement;
const navbar = document.querySelector(".navbar");
document.addEventListener('scroll', function(){
    let pageTop = docMain.scrollTop;
    if(pageTop > 110){
        paraH1.classList.remove("visible");
        paraH1.classList.add("fadeElement");
        paraP.classList.remove("visible");
        paraP.classList.add("fadeElement");
    }
    else if(pageTop < 200){
        paraH1.classList.remove("fadeElement");
        paraH1.classList.add("visible");
        paraP.classList.remove("fadeElement");
        paraP.classList.add("visible");
    }
    console.log(pageTop);
})
