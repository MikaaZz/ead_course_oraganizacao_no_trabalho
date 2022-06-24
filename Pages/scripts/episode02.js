const headerMain = document.querySelector(".header_pageTwo");

const mainIcon = document.querySelector(".pageTwo_content--icon");
const mainTitle = document.querySelector(".pageTwo_content--title");
const mainSubTitle = document.querySelector(".pageTwo_content--subtitle");

const mainVideoDiv = document.querySelector(".pageTwo_background--iframe");
const mainVideo = document.querySelector("#video");


function playVideo() {
    headerMain.classList.remove("padding_header");

    mainIcon.classList.add("hidden");
    mainTitle.classList.add("hidden");
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

            popUpsTip.children[counter + 4].classList.add("h-hide");
            popUpsTip.children[counter + 4].classList.add("hidden");

            popUpsTip.children[counter + 5].classList.add("h-hide");
            popUpsTip.children[counter + 5].classList.add("hidden");

            popUpsTip.children[counter + 6].classList.add("h-hide");
            popUpsTip.children[counter + 6].classList.add("hidden");

            popUpsTip.children[counter + 7].classList.add("h-hide");
            popUpsTip.children[counter + 7].classList.add("hidden");
        }

        if (counter == 1) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");
            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");
            popUpsTip.children[counter + 3].classList.add("h-hide");
            popUpsTip.children[counter + 3].classList.add("hidden");
            popUpsTip.children[counter + 4].classList.add("h-hide");
            popUpsTip.children[counter + 4].classList.add("hidden");
            popUpsTip.children[counter + 5].classList.add("h-hide");
            popUpsTip.children[counter + 5].classList.add("hidden");
            popUpsTip.children[counter + 6].classList.add("h-hide");
            popUpsTip.children[counter + 6].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
        }

        if (counter == 2) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");
            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");
            popUpsTip.children[counter + 3].classList.add("h-hide");
            popUpsTip.children[counter + 3].classList.add("hidden");
            popUpsTip.children[counter + 4].classList.add("h-hide");
            popUpsTip.children[counter + 4].classList.add("hidden");
            popUpsTip.children[counter + 5].classList.add("h-hide");
            popUpsTip.children[counter + 5].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
        }

        if (counter == 3) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");
            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");
            popUpsTip.children[counter + 3].classList.add("h-hide");
            popUpsTip.children[counter + 3].classList.add("hidden");
            popUpsTip.children[counter + 4].classList.add("h-hide");
            popUpsTip.children[counter + 4].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
            popUpsTip.children[counter - 3].classList.add("h-hide");
            popUpsTip.children[counter - 3].classList.add("hidden");
        }

        if (counter == 4) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");
            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");
            popUpsTip.children[counter + 3].classList.add("h-hide");
            popUpsTip.children[counter + 3].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
            popUpsTip.children[counter - 3].classList.add("h-hide");
            popUpsTip.children[counter - 3].classList.add("hidden");
            popUpsTip.children[counter - 4].classList.add("h-hide");
            popUpsTip.children[counter - 4].classList.add("hidden");
        }

        if (counter == 5) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");
            popUpsTip.children[counter + 2].classList.add("h-hide");
            popUpsTip.children[counter + 2].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
            popUpsTip.children[counter - 3].classList.add("h-hide");
            popUpsTip.children[counter - 3].classList.add("hidden");
            popUpsTip.children[counter - 4].classList.add("h-hide");
            popUpsTip.children[counter - 4].classList.add("hidden");
            popUpsTip.children[counter - 5].classList.add("h-hide");
            popUpsTip.children[counter - 5].classList.add("hidden");
        }

        if (counter == 6) {

            popUpsTip.children[counter + 1].classList.add("h-hide");
            popUpsTip.children[counter + 1].classList.add("hidden");

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");
            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");
            popUpsTip.children[counter - 3].classList.add("h-hide");
            popUpsTip.children[counter - 3].classList.add("hidden");
            popUpsTip.children[counter - 4].classList.add("h-hide");
            popUpsTip.children[counter - 4].classList.add("hidden");
            popUpsTip.children[counter - 5].classList.add("h-hide");
            popUpsTip.children[counter - 5].classList.add("hidden");
            popUpsTip.children[counter - 6].classList.add("h-hide");
            popUpsTip.children[counter - 6].classList.add("hidden");

        }

        if (counter == 7) {

            popUpsTip.children[counter - 1].classList.add("h-hide");
            popUpsTip.children[counter - 1].classList.add("hidden");

            popUpsTip.children[counter - 2].classList.add("h-hide");
            popUpsTip.children[counter - 2].classList.add("hidden");

            popUpsTip.children[counter - 3].classList.add("h-hide");
            popUpsTip.children[counter - 3].classList.add("hidden");

            popUpsTip.children[counter - 4].classList.add("h-hide");
            popUpsTip.children[counter - 4].classList.add("hidden");

            popUpsTip.children[counter - 5].classList.add("h-hide");
            popUpsTip.children[counter - 5].classList.add("hidden");

            popUpsTip.children[counter - 6].classList.add("h-hide");
            popUpsTip.children[counter - 6].classList.add("hidden");

            popUpsTip.children[counter - 7].classList.add("h-hide");
            popUpsTip.children[counter - 7].classList.add("hidden");
        }
    }

}
