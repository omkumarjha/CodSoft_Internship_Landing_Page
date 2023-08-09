const faq = document.getElementsByClassName("faq");

Array.from(faq).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        element.classList.toggle("active");
    })
})