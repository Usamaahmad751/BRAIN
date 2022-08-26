var ignitationAudio = new Audio("/audios/ignition.mp3");
var engineAudio = new Audio("/audios/engine.wav");

function  startIgnition(){
    ignitationAudio.play();
    setTimeout(startEngine,1600);
}

function startEngine(){
    engineAudio.play();
    engineAudio.loop = true;
}
function stepsShow(stepNumber){
    console.log(stepNumber)
    Array.from(document.querySelectorAll(".initial-steps")).forEach( (i) => {
        i.classList.add("hide")
    });
   document.getElementById('step-' + stepNumber).classList.remove("hide");
   }
function stopIgnition(){
    engineAudio.pause();
    ignitationAudio.pause();
}
function openPopup(message){
    document.querySelector(".popup-wrapper").style.display = "flex";
    document.querySelector(".popup-text").innerHTML = message;
}
function closePopup(){
    document.querySelector(".popup-wrapper").style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".initialScreen-wrapper").style.display = "block";
    document.querySelector(".configuration-panel").style.display = "none";
    stepsShow(1)
    setTimeout(function(){stepsShow(2)}, 4000);
    setTimeout(function(){stepsShow(3)}, 9000);
    setTimeout(function(){stepsShow(4)}, 14000);
    setTimeout(showScreen, 17000)  
  });
function showScreen(){
    document.querySelector(".initialScreen-wrapper").style.display = "none";
    document.querySelector(".configuration-panel").style.display = "block";
}