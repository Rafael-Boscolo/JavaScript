const el = document.querySelector('#text');
const text = "Sou desenvolvedor web e possuo conhecimentos em Html, CSS, PHP, Git e JavaScript!";
const interval = 200; // O VALOR DE 300 É REPRESENTADO EM MileSegundos.

function showText(el, text, interval) {

  const char = text.split("").reverse();

  const typer = setInterval(() => {

    if(!char.length){
      return clearInterval(typer);
    }  

    const next = char.pop();

    el.innerHTML += next;

  }, interval);
}

showText(el, text, interval);