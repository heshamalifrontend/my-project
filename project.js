let section = document.querySelector(".all-skills");
let skill = document.querySelectorAll(".total-area .area")

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 100){
        console.log("hesham ali");
        skill.forEach((area) =>{
            area.style.width = area.dataset.width;
        })
    }
}