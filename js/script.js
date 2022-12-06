function colorChanger(){
    let r = "#" + Math.floor(Math.random()*16777215).toString(16);
    let g = "#" + Math.floor(Math.random()*16777215).toString(16);
    let b = "#" + Math.floor(Math.random()*16777215).toString(16);
    

document.getElementById("fondo").style.backgroundImage = `linear-gradient(to bottom right, ${r}, ${g}, ${b})`;
//document.getElementById("body").style.backgroundImage = `linear-gradient(to bottom right, ${r}, ${g}, ${b})`;
console.log(r,g,b) ;
}

































document.addEventListener("DOMContentLoaded", ()=>{
    colorChanger();
document.getElementById("colorChangerBtn").addEventListener("click",()=>{
    colorChanger();
})


})