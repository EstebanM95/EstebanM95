let intervalo;

function colorChanger() {
  let r = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let g = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let b = "#" + Math.floor(Math.random() * 16777215).toString(16);

  document.getElementById(
    "fondo"
  ).style.backgroundImage = `linear-gradient(to bottom right, ${r}, ${g}, ${b})`;
  //document.getElementById("body").style.backgroundImage = `linear-gradient(to bottom right, ${r}, ${g}, ${b})`;
}

function autoChanger() {
  var n = 0;
  window.setInterval(function () { n++;if (n % 5 == 0) {
      colorChanger();
    }
  }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
  colorChanger();
  autoChanger();

  document.getElementById("colorChangerBtn").addEventListener("click", () => {
    colorChanger();
  });
});
