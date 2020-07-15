

for(var i=0;i<document.querySelectorAll(".drum").length;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      playkeyboard(this.innerHTML);
      addAnimation(this.innerHTML);

});
}


document.addEventListener("keypress",function(event){
  playkeyboard(event.key);
  addAnimation(event.key);
});


function playkeyboard(key){

  switch(key){
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      case "a":
        var audio = new Audio('sounds/tom-2.mp3');
        audio.play();
      break;
      case "s":
        var audio = new Audio('sounds/tom-3.mp3');
        audio.play();
      break;
      case "d":
        var audio = new Audio('sounds/tom-4.mp3');
        audio.play();
      break;
      case "j":
        var audio = new Audio('sounds/crash.mp3');
        audio.play();
      break;
      case "k":
        var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();
      break;
      case "l":
        var audio = new Audio('sounds/snare.mp3');
        audio.play();
      break;
      defualt:
        alert("cant play sound");
      break;

  }
}


function addAnimation(currentkey){
  var activebutton= document.querySelector("."+ currentkey);

activebutton.classList.add("pressed");
  setTimeout(function(){
    activebutton.classList.remove("pressed");
  },100);
}
