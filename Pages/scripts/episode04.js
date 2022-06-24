const headerMain = document.querySelector(".header_pageFour");

const mainIcon = document.querySelector(".pageFour_content--icon");
const mainTitle = document.querySelector(".pageFour_content--title");
const mainTitleTwo = document.querySelector(".titleTwo");
const mainSubTitle = document.querySelector(".pageFour_content--subtitle");

const mainVideoDiv = document.querySelector(".pageOne_background--iframe");
const mainVideo = document.querySelector("#video");

function playVideo() {
    headerMain.classList.remove("padding_header");

    mainIcon.classList.add("hidden");
    mainTitle.classList.add("hidden");
    mainTitleTwo.classList.add("hidden");
    mainSubTitle.classList.add("hidden");

    mainVideoDiv.classList.remove("hidden");
    mainVideo.play();
    
    setTimeout (mainVideoDiv.classList.add("setOpacity"), 500);
}

var videoStatus = true;

mainVideo.onclick = () => {


    if (videoStatus == false) {
        mainVideo.play();

        videoStatus = true;

        return videoStatus;

    } else {
        mainVideo.pause();

        videoStatus = false;

        return videoStatus;
    }
}

const buttonsTip = document.querySelectorAll(".content_interactionButtons--buttons");
const popUpsTip = document.querySelector(".container_interactionButtons--tips");

for (let counter = 0; counter <= buttonsTip.length; counter++) {

    buttonsTip[counter].onclick = () => {

        popUpsTip.children[counter].classList.remove("hidden");
        setTimeout(() => { popUpsTip.children[counter].classList.remove("h-hide") }, 150);

        if (counter == 0) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");

            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");

            popUpsTip.children[counter + 3].classList.add("h-hide");
            popUpsTip.children[counter + 3].classList.add("hidden");
        }

        if (counter == 1) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");
            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
        }

        if (counter == 2) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
        }

        if (counter == 3) {
            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
            popUpsTip.children[counter - 3].classList.add("h-hide");
            popUpsTip.children[counter - 3].classList.add("hidden");
        }

    }

}
