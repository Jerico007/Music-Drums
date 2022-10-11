var drums = document.querySelectorAll(".drum");

for (var i = 0; i < drums.length; i++) {
  drums[i].addEventListener("click", function () {
    var keys = this.innerHTML;
    playsound(keys);
  });
}

document.addEventListener("keydown", function (event) {
  playsound(event.key);
  activeButton(event.key);
});

function playsound(keys) {
  switch (keys) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      activeButton("w");
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      activeButton("a");
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      activeButton("s");
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      activeButton("d");
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      activeButton("j");
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      activeButton("k");
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      activeButton("l");
      break;

    default:
      console.log(keys);
      break;
  }
}

function activeButton(keypress) {
  var active = document.querySelector("." + keypress);
  active.classList.add("pressed");

  setTimeout(function () {
    active.classList.remove("pressed");
  }, 100);
}
