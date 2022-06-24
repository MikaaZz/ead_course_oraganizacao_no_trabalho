const numberButtons = document.querySelectorAll(".content_tipTree--button");
const textButtonOpen = document.querySelectorAll(".content_tipTree--interactionText");

for (let counter = 0; counter <= numberButtons.length; counter++) {

    numberButtons[counter].onclick = () => {

        textButtonOpen[counter].classList.remove("hidden");

        setTimeout(() => {

            textButtonOpen[counter].classList.remove("buttonHeigth");
            numberButtons[counter].classList.add("borderClickedTipTree");

        }, 300);

        if (counter == 0) {

            setTimeout(() => {

                textButtonOpen[counter + 1].classList.add("buttonHeigth");
                textButtonOpen[counter + 2].classList.add("buttonHeigth");
                textButtonOpen[counter + 3].classList.add("buttonHeigth");
                textButtonOpen[counter + 4].classList.add("buttonHeigth");
                textButtonOpen[counter + 5].classList.add("buttonHeigth");

                textButtonOpen[counter + 1].classList.add("hidden");
                textButtonOpen[counter + 2].classList.add("hidden");
                textButtonOpen[counter + 3].classList.add("hidden");
                textButtonOpen[counter + 4].classList.add("hidden");
                textButtonOpen[counter + 5].classList.add("hidden");

                numberButtons[counter + 1].classList.remove("borderClickedTipTree");
                numberButtons[counter + 2].classList.remove("borderClickedTipTree");
                numberButtons[counter + 3].classList.remove("borderClickedTipTree");
                numberButtons[counter + 4].classList.remove("borderClickedTipTree");
                numberButtons[counter + 5].classList.remove("borderClickedTipTree");

            }, 50);
        }
        if (counter == 1) {

            setTimeout(() => {
                textButtonOpen[counter + 1].classList.add("buttonHeigth");
                textButtonOpen[counter + 2].classList.add("buttonHeigth");
                textButtonOpen[counter + 3].classList.add("buttonHeigth");
                textButtonOpen[counter + 4].classList.add("buttonHeigth");
                textButtonOpen[counter - 1].classList.add("buttonHeigth");

                textButtonOpen[counter + 1].classList.add("hidden");
                textButtonOpen[counter + 2].classList.add("hidden");
                textButtonOpen[counter + 3].classList.add("hidden");
                textButtonOpen[counter + 4].classList.add("hidden");
                textButtonOpen[counter - 1].classList.add("hidden");

                numberButtons[counter + 1].classList.remove("borderClickedTipTree");
                numberButtons[counter + 2].classList.remove("borderClickedTipTree");
                numberButtons[counter + 3].classList.remove("borderClickedTipTree");
                numberButtons[counter + 4].classList.remove("borderClickedTipTree");
                numberButtons[counter - 1].classList.remove("borderClickedTipTree");
            }, 200);
        }
        if (counter == 2) {

            setTimeout(() => {
                textButtonOpen[counter + 1].classList.add("buttonHeigth");
                textButtonOpen[counter + 2].classList.add("buttonHeigth");
                textButtonOpen[counter + 3].classList.add("buttonHeigth");
                textButtonOpen[counter - 1].classList.add("buttonHeigth");
                textButtonOpen[counter - 2].classList.add("buttonHeigth");

                textButtonOpen[counter + 1].classList.add("hidden");
                textButtonOpen[counter + 2].classList.add("hidden");
                textButtonOpen[counter + 3].classList.add("hidden");
                textButtonOpen[counter - 1].classList.add("hidden");
                textButtonOpen[counter - 2].classList.add("hidden");

                numberButtons[counter + 1].classList.remove("borderClickedTipTree");
                numberButtons[counter + 2].classList.remove("borderClickedTipTree");
                numberButtons[counter + 3].classList.remove("borderClickedTipTree");
                numberButtons[counter - 1].classList.remove("borderClickedTipTree");
                numberButtons[counter - 2].classList.remove("borderClickedTipTree");
            }, 200)
        }
        if (counter == 3) {

            setTimeout(() => {
                textButtonOpen[counter + 1].classList.add("buttonHeigth");
                textButtonOpen[counter + 2].classList.add("buttonHeigth");
                textButtonOpen[counter - 1].classList.add("buttonHeigth");
                textButtonOpen[counter - 2].classList.add("buttonHeigth");
                textButtonOpen[counter - 3].classList.add("buttonHeigth");

                textButtonOpen[counter + 1].classList.add("hidden");
                textButtonOpen[counter + 2].classList.add("hidden");
                textButtonOpen[counter - 1].classList.add("hidden");
                textButtonOpen[counter - 2].classList.add("hidden");
                textButtonOpen[counter - 3].classList.add("hidden");

                numberButtons[counter + 1].classList.remove("borderClickedTipTree");
                numberButtons[counter + 2].classList.remove("borderClickedTipTree");
                numberButtons[counter - 1].classList.remove("borderClickedTipTree");
                numberButtons[counter - 2].classList.remove("borderClickedTipTree");
                numberButtons[counter - 3].classList.remove("borderClickedTipTree");
            }, 200)
        }
        if (counter == 4) {

            setTimeout(() => {
                textButtonOpen[counter + 1].classList.add("buttonHeigth");
                textButtonOpen[counter - 1].classList.add("buttonHeigth");
                textButtonOpen[counter - 2].classList.add("buttonHeigth");
                textButtonOpen[counter - 3].classList.add("buttonHeigth");
                textButtonOpen[counter - 4].classList.add("buttonHeigth");

                textButtonOpen[counter + 1].classList.add("hidden");
                textButtonOpen[counter - 1].classList.add("hidden");
                textButtonOpen[counter - 2].classList.add("hidden");
                textButtonOpen[counter - 3].classList.add("hidden");
                textButtonOpen[counter - 4].classList.add("hidden");

                numberButtons[counter + 1].classList.remove("borderClickedTipTree");
                numberButtons[counter - 1].classList.remove("borderClickedTipTree");
                numberButtons[counter - 2].classList.remove("borderClickedTipTree");
                numberButtons[counter - 3].classList.remove("borderClickedTipTree");
                numberButtons[counter - 4].classList.remove("borderClickedTipTree");
            }, 200)
        }
        if (counter == 5) {

            setTimeout(() => {
                textButtonOpen[counter - 1].classList.add("buttonHeigth");
                textButtonOpen[counter - 2].classList.add("buttonHeigth");
                textButtonOpen[counter - 3].classList.add("buttonHeigth");
                textButtonOpen[counter - 4].classList.add("buttonHeigth");
                textButtonOpen[counter - 5].classList.add("buttonHeigth");

                textButtonOpen[counter - 1].classList.add("hidden");
                textButtonOpen[counter - 2].classList.add("hidden");
                textButtonOpen[counter - 3].classList.add("hidden");
                textButtonOpen[counter - 4].classList.add("hidden");
                textButtonOpen[counter - 5].classList.add("hidden");

                numberButtons[counter - 1].classList.remove("borderClickedTipTree");
                numberButtons[counter - 2].classList.remove("borderClickedTipTree");
                numberButtons[counter - 3].classList.remove("borderClickedTipTree");
                numberButtons[counter - 4].classList.remove("borderClickedTipTree");
                numberButtons[counter - 5].classList.remove("borderClickedTipTree");
            }, 200)
        }
    }


}