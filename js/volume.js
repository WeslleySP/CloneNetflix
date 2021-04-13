/*function trocar() { 
    var x = document.getElementsByClassName("volume");
    x[0].src = "img/volumeativo1.png";
    
  }*/

  /*function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active')
    video.volume();

  }*/

  const icone = document.querySelector("#iconMute");
  const trailer = document.querySelector('.trailer');
  const button = document.querySelector("#buttonMute");

  button.addEventListener("click",()=>{
    if(trailer.muted){
      trailer.muted = false;
      icone.classList.remove("fa-volume-mute");
      icone.classList.add("fa-volume-up");
    }else{
      trailer.muted = true;
      icone.classList.remove("fa-volume-up");
      icone.classList.add("fa-volume-mute");
    }
  });