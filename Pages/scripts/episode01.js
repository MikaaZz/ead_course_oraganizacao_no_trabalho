const headerMain = document.querySelector(".header_pageOne");

const mainIcon = document.querySelector(".pageOne_content--icon");
const mainTitle = document.querySelector(".pageOne_content--title");
const mainSubTitle = document.querySelector(".pageOne_content--subtitle");

const mainVideoDiv = document.querySelector(".pageOne_background--iframe");
const mainVideo = document.querySelector("#video");

function playVideo() {
    headerMain.classList.remove("padding_header");

    mainIcon.classList.add("hidden");
    mainTitle.classList.add("hidden");
    mainSubTitle.classList.add("hidden");

    mainVideoDiv.classList.remove("hidden");
    mainVideo.play();

    setTimeout(mainVideoDiv.classList.add("setOpacity"), 500);
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
