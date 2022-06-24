const headerMain = document.querySelector(".header_pageTree");

const mainIcon = document.querySelector(".pageTree_content--icon");
const mainTitle = document.querySelector(".pageTree_content--title");
const mainTitleTwo = document.querySelector(".titleTwo");
const mainSubTitle = document.querySelector(".pageTree_content--subtitle");

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