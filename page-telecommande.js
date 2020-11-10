"user strict";

// j'écoute l'évènement "click" de la première touche de ma télécommande
document.querySelector("main > ul > li:nth-of-type(1)").addEventListener("click", (event) => {
  let bruit = new Audio('sons/chat.wav'); // je créé un objet audio appelé "bruit"
  bruit.play(); // je joue ce bruit
});

// même chose avec les autres touches de ma télécommande

document.querySelector("main > ul > li:nth-of-type(2)").addEventListener("click", (event) => {
  let bruit = new Audio('sons/chevre.m4a');
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(3)").addEventListener("click", (event) => {
  let bruit = new Audio('sons/loup.wav');
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(4)").addEventListener("click", (event) => {
  let bruit = new Audio('sons/pigeon.wav');
  bruit.play();
});

document.querySelector("main > ul > li:nth-of-type(5)").addEventListener("click", (event) => {
    let bruit = new Audio('sons/tigre.wav');
    bruit.play();
  });

document.querySelector("main > ul > li:nth-of-type(6)").addEventListener("click", (event) => {
    let bruit = new Audio('sons/vache.wav');
    bruit.play();
  });