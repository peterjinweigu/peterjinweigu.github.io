/* https://rhhsweb.github.io/ (Thanks Edison :D) */

const typingElement = document.getElementById("typing-animation");
const sentence = "Hey! My name is Peter Gu";
let letter = 0;
const animation = setInterval(()=> {
    typingElement.textContent += sentence[letter++];
    if (letter == sentence.length) {
        clearInterval(animation);
    }
}, 100);

