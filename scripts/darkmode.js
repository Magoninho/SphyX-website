
let isEnabled = false;

function darkmode() {
    let paragraphs = document.getElementsByClassName('text');

    isEnabled = !isEnabled;

    if (isEnabled) {
        document.body.style.backgroundColor = "#23272A";
        for (let i = 0; i < paragraphs.length; i++) {

            paragraphs[i].style.color = 'white';

        }
    } else {
        document.body.style.backgroundColor = "aliceblue";
        for (let i = 0; i < paragraphs.length; i++) {

            paragraphs[i].style.color = 'black';

        }
    }
    

}