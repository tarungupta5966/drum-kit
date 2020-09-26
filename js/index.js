
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    makeSound();
    makeAnimation(this.innerHTML);
  });
}
document.addEventListener("keypress", function () {
  makeSound();
  makeAnimation(event.key);
});

function makeSound() {
  if(this.innerHTML==="w" || event.key==="w")
    new Audio("sounds/tom1.mp3").play();
  else if(this.innerHTML==="a" || event.key==="a")
    new Audio("sounds/tom2.mp3").play();
  else if(this.innerHTML==="s" || event.key==="s")
    new Audio("sounds/tom3.mp3").play();
  else if(this.innerHTML==="d" || event.key==="d")
    new Audio("sounds/tom4.mp3").play();
  else if(this.innerHTML==="j" || event.key==="j")
    new Audio("sounds/crash.mp3").play();
  else if(this.innerHTML==="k" || event.key==="k")
    new Audio("sounds/kick.mp3").play();
  else if(this.innerHTML==="l" || event.key==="l")
    new Audio("sounds/snare.mp3").play();
}

function makeAnimation(e){
  document.querySelector("."+e).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("."+e).classList.remove("pressed");
  },200);
}
