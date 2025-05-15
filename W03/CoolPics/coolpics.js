function handleResize(){
    const hide_nav = document.querySelector("nav");
    if (window.innerWidth > 1000){
        hide_nav.classList.remove("hide");
    }
    else{
        hide_nav.classList.add("hide");
    }
}
function hideNav(){
    const hide_nav = document.querySelector("nav");
    hide_nav.classList.toggle("hide");
};

function showImage(event){
    const image = event.target.closest("img");
    dialog_image = document.getElementById("viewer_image");
    source = image.src.split("-");
    document.querySelector(".viewer").showModal();
    console.log(dialog_image.src)
}
const modal = document.querySelector(".viewer")
const close_button = document.querySelector(".close-viewer")
const hide_nav_button = document.querySelector("button");
const gallery = document.querySelector(".gallery")
hide_nav_button.addEventListener("click", hideNav);
window.addEventListener("resize", handleResize);
gallery.addEventListener("click", showImage);
modal.addEventListener('click', () =>{
    if (event.target === modal){
        modal.close();
    }
})
close_button.addEventListener('click', () =>{
    modal.close();
})

