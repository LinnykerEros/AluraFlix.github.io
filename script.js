let filme = ["Yesterday", "A chegada", "Escola de Rock"];
let res = document.getElementById("res");
let container = document.getElementById("container1");
let caixa;

let capaFilmes = [
  "https://i.pinimg.com/originals/50/8f/ba/508fba93c5f1b8f1ea1db81dd969e2a0.jpg",
  "https://www.planocritico.com/wp-content/uploads/2021/01/175-Lista-Os-Melhores-Episodios-de-Vikings-1.jpg",
  "https://i.pinimg.com/550x/56/a0/be/56a0bec9ff88fbb573f9bf176e487e0f.jpg",
];

let videos = [
  "https://www.youtube.com/embed/Ro0yIrOKgbM",
  "https://www.youtube.com/embed/dV6p83HRk4o",
  "https://www.youtube.com/embed/iSiqmV13Ffk",
];

function filmeCapa() {
  for (let i = 0; i < filme.length; i++) {
    let video = videos[i];
    let foto = document.createElement("img");
    foto.setAttribute("src", `${capaFilmes[i]}`);
    foto.addEventListener("click", function () {
      createiFrame(video);
    });
    res.appendChild(foto);
  }
}
function createiFrame(video) {
  let iframe;
  console.log("FUICLICADO");
  if (!caixa) {
    caixa = document.createElement("div");
    caixa.setAttribute("id", "video");
    container.appendChild(caixa);
    iframe = document.createElement("iframe");
    caixa.appendChild(iframe);
  }
  console.log(video);
  iframe = document.getElementsByTagName("iframe")[0];
  iframe.setAttribute("src", video);
  iframe.setAttribute("id", "frame");
}


filmeCapa();
