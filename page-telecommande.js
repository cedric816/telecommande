"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio("https://hmz.tf/static/audio-chat.mp3"); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio("https://hmz.tf/static/audio-sncf.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio("https://hmz.tf/static/audio-burp.mp3");
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio("https://hmz.tf/static/audio-bateau.mp3");
  bruit.play();
});
var telecommandeEnfant = document.getElementById('telecommandeEnfant');
var telecommandeAdulte = document.getElementById('telecommandeAdulte');

window.onload = init();
function init(){
    telecommandeAdulte.style.display = "none";
}

function selection(){
    var choix = document.getElementById('choixTelecommande').value;
    if (choix == 'adulte'){
        telecommandeEnfant.style.display = "none";
        telecommandeAdulte.style.display = "block";
    } if (choix == 'enfant'){
        telecommandeAdulte.style.display = "none"
        telecommandeEnfant.style.display = "block";
    }
}
