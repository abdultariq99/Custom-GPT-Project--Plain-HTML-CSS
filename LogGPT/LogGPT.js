var i = 0;
var txt = 'Experience the power of Generative AI for Advanced System Log Troubleshooting powered by Open AI'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(text) {
  if (i < txt.length) {
    document.getElementById("first-line").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter(txt)