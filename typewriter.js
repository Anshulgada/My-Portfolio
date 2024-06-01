// const phrases = ["Cloud Engineer!",
//                         "AI Developer!",
//                         "Frontend Developer!"];
//
// let i = 0;
// let j = 0;
// let currentPhrase = "";
// let isDeleting = false;
//
// function type() {
//     if (i < phrases.length) {
//         if (!isDeleting && j <= phrases[i].length) {
//             currentPhrase = phrases[i].substring(0, j);
//             document.getElementById("typewriter-text").innerHTML = currentPhrase;
//             j++;
//         } else if (isDeleting && j >= 0) {
//             currentPhrase = phrases[i].substring(0, j);
//             document.getElementById("typewriter-text").innerHTML = currentPhrase;
//             j--;
//         }
//
//         if (j === phrases[i].length + 1) {
//             isDeleting = true;
//         }
//
//         if (j === 0 && isDeleting) {
//             isDeleting = false;
//             i++;
//         }
//
//         setTimeout(type, isDeleting ? 75 : 125); // Adjust typing and deleting speeds here
//     }
// }
//
// document.addEventListener("DOMContentLoaded", type);

const phrases = ["Cloud Engineer!",
                        "AI Developer!",
                        "Frontend Developer!"];

let i = 0;
let j = 0;
let currentPhrase = "";
let isDeleting = false;

function type() {
    if (i < phrases.length) {
        if (!isDeleting && j <= phrases[i].length) {
            currentPhrase = phrases[i].substring(0, j);
            document.getElementById("typewriter-text").textContent = currentPhrase || '\u00A0'; // Replace empty text with a non-breaking space
            j++;
        } else if (isDeleting && j >= 0) {
            currentPhrase = phrases[i].substring(0, j);
            document.getElementById("typewriter-text").textContent = currentPhrase || '\u00A0'; // Replace empty text with a non-breaking space
            j--;
        }

        if (j === phrases[i].length + 1) {
            isDeleting = true;
        }

        if (j === 0 && isDeleting) {
            isDeleting = false;
            i++;
            if (i === phrases.length) {
                i = 0; // Loop back to the first phrase
            }
        }

        setTimeout(type, isDeleting ? 75 : 125); // Adjust typing and deleting speeds here
    }
}

document.addEventListener("DOMContentLoaded", type);

