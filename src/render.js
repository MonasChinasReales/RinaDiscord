function showPage() {
  setTimeout(() => document.body.classList.remove("js-loading"), 100);
}

function hideRina() {
  window.close();
}

function monasAbout() {
  require("electron").shell.openExternal("https://www.monaschinasreales.xyz/");
}


document.body.classList.add("js-loading");
window.addEventListener("load", showPage, false);