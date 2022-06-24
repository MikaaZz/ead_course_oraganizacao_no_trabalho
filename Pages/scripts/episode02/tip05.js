const buttonInteraction = document.querySelector(".content_tipFive--button");
const imageInteraction = document.querySelector(".content_tipFive--image");

buttonInteraction.onclick = () => {
    setTimeout(()=>{
        imageInteraction.classList.remove("buttonWidth");

    },200);
}