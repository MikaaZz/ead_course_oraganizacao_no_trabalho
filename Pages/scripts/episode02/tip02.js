const tipTwoButton = document.querySelectorAll(".content_tipTwo--button");
const tipTwoPopUp = document.querySelectorAll(".content_tipTwo--buttoOpen");
const divTwoButtonsOne = document.querySelector(".twoButtons_one");
const divTwoButtonsTwo = document.querySelector(".twoButtons_two");


for (let counter = 0; counter <= tipTwoButton.length; counter++) {

    tipTwoButton[counter].onclick = () => {

        tipTwoPopUp[counter].classList.remove("hidden");
        
        setTimeout(() => {

            tipTwoPopUp[counter].classList.remove("buttonHeigth");

        }, 300);

        if (counter == 0) {
            
            setTimeout(() => {
                tipTwoPopUp[counter + 1].classList.add("buttonHeigth");
                tipTwoPopUp[counter + 2].classList.add("buttonHeigth");
                tipTwoPopUp[counter + 3].classList.add("buttonHeigth");
            }, 200);
        }
        if (counter == 1) {
            
            setTimeout(() => {
                tipTwoPopUp[counter + 1].classList.add("buttonHeigth");
                tipTwoPopUp[counter + 2].classList.add("buttonHeigth");
                tipTwoPopUp[counter - 1].classList.add("buttonHeigth");
            }, 200);
        }
        if (counter == 2) {
            
            setTimeout(() => {
                tipTwoPopUp[counter - 1].classList.add("buttonHeigth");
                tipTwoPopUp[counter - 2].classList.add("buttonHeigth");
                tipTwoPopUp[counter + 1].classList.add("buttonHeigth");
            }, 200)
        }
        if (counter == 3) {
            
            setTimeout(() => {
                tipTwoPopUp[counter - 1].classList.add("buttonHeigth");
                tipTwoPopUp[counter - 2].classList.add("buttonHeigth");
                tipTwoPopUp[counter - 3].classList.add("buttonHeigth");
            }, 200)
        }
    }
}