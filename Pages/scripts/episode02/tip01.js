const tipOneButton = document.querySelectorAll(".content_tipOne--button");
const tipOnePopUp = document.querySelectorAll(".content_tipOne--buttoOpen");

for (let counter = 0; counter <= tipOneButton.length; counter++) {

    tipOneButton[counter].onclick = () => {
        
        setTimeout(()=>{tipOnePopUp[counter].classList.remove("buttonWidth");}, 250)
        
        if (counter==0) {
            tipOnePopUp[counter + 1].classList.add("buttonWidth");
            tipOnePopUp[counter + 2].classList.add("buttonWidth");
        }
        if (counter==1) {
            tipOnePopUp[counter + 1].classList.add("buttonWidth");
            tipOnePopUp[counter - 1].classList.add("buttonWidth");
        }
        if (counter==2) {
            tipOnePopUp[counter - 1].classList.add("buttonWidth");
            tipOnePopUp[counter - 2].classList.add("buttonWidth");
        }
    }
}