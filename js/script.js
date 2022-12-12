//funcion para cambiar el color del fondo de la pagina
function colorChanger() {
  //3 variables para guardar numeros randmon convertidos a hexadecimales que seran los colores
  let r = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let g = "#" + Math.floor(Math.random() * 16777215).toString(16);
  let b = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // cambia el fondo por una gradiente lineal con los 3 colores random como parametros
  document.getElementById(
    "fondo"
  ).style.backgroundImage = `linear-gradient(to bottom right, ${r}, ${g}, ${b})`;
  //document.getElementById("body").style.backgroundImage = `linear-gradient(to bottom right, ${r}, ${g}, ${b})`;
}


//ejecuta colorChanger cada 5 segundos
function autoChanger() {
  var n = 0;
  //n aumenta constantemente de 1 en 1, si n modulo 5 es 0 entonces cambia ejecuta colorChanger
  window.setInterval(function () { n++;if (n % 5 == 0) {
      colorChanger();
    }
  }, 1000);
}
////////////////////////////////////////////////////////////////////////////////////////////////



// let synth = new Tone.PolySynth(3, Tone.Synth).toDestination();



////////////////////////////////////////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  colorChanger();
  autoChanger();
  // funkyTown();


  document.getElementById("boton3").addEventListener("click", async ()=>{
    await Tone.start();
    console.log('audio is ready');
  })

  // document.getElementById("notaA").addEventListener("click",()=>{
  //   synth.triggerAttackRelease("G4", "16n");
  // })


  document.getElementById("colorChangerBtn").addEventListener("click", () => {
    colorChanger();
  });
  
});
