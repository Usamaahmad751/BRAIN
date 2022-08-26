var ignitationAudio = new Audio("/audios/ignition.mp3");
var engineAudio = new Audio("/audios/engine.wav");

function  startIgnition(){
    ignitationAudio.play();
    setTimeout(startEngine,1600); 
    console.log("Waiting")  
   
}
function startEngine(){
    engineAudio.play();
    engineAudio.loop = true;
}
function stopIgnition(){
    engineAudio.pause();
    ignitationAudio.pause();
}

function openPopup(message){
    console.log(message)
    document.querySelector(".popup-wrapper").style.display = "flex";
    document.querySelector(".popup-text").innerHTML = message;
}
function closePopup(){
    console.log("close Popup")
    document.querySelector(".popup-wrapper").style.display = "none";
}

