const header = document.querySelector("header");
const headerBox = document.querySelector(".headerBox");

window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    console.log(scroll);
    if(scroll < 10){
        header.classList.remove("on"); 
        headerBox.style.height = "150px";
        
        header.style.height = "150px";
    } 
    else if(scroll > 10){
        header.classList.add("on");
        headerBox.style.height = "75px";

        header.style.height = "75px";
    }

    
})