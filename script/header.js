const header = document.querySelector("header");
const headerBox = document.querySelector(".headerBox");

window.addEventListener("scroll", ()=>{
    const scroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    console.log(scroll);
    if(scroll < 10){
        header.classList.remove("on"); 
        for(let i = 1 ; i <= 10 ; i ++){
            headerBox.style.height = `${75 + i * 7.5}px`;
        }

            
        
        header.style.height = "150px";
    } 
    else if(scroll > 10){
        header.classList.add("on");
        headerBox.style.height = "75px";

        header.style.height = "75px";
    }

    
})