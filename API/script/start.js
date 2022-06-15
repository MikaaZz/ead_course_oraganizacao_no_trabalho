let pageCounter = new Array(12);

pageCounter[0] = "../Pages/episode01.html";
pageCounter[1] = "../Pages/episode02.html";
pageCounter[2] = "../Pages/episode03.html";
pageCounter[3] = "../Pages/episode04.html";

let currentPage = null;

let arrivedAtTheEnd = false;
    
let lastPage = 0;

function startCourse() {
    
    startLMS();

    let gettingClassState = getValueLMS("cmi.core.lesson_status");

    if (gettingClassState == "not attempted") {
        gettingClassState = setValueLMS("cmi.core.lesson_status", "incomplete");
    }

    let markPage = getValueLMS("cmi.core.lesson_location");

    if (markPage == "") {
        currentPage = 0;
        setValueLMS("cmi.core.lesson_location", currentPage)
        goPage(currentPage);
    }

    else {
        currentPage = markPage;
        goPage(currentPage);
    }
}