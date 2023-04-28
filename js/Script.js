let headLinks = document.querySelectorAll("ul li a");
console.log(headLinks);
// functionsOnclick
headLinks.forEach((a)=> {
    a.addEventListener("click", (e) => {
        headLinks.forEach((a) => {
            a.classList.remove("Active");
        })
        e.currentTarget.classList.add("Active");
    })
})
let menuBar = document.querySelector(".menu");

let headerBar = document.querySelector(".header-list");
menuBar.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("change");
    headerBar.classList.toggle("block-bar");
    
})
