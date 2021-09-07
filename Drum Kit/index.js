var b = document.querySelectorAll(".drum");

for (var i = 0; i < b.length; i++) {
    b[i].addEventListener("click", function() {
        var innerString = this.innerHTML;
        makeSound(innerString);
        addAnimation("." + innerString);


    });

}

document.addEventListener("keydown", function(event) {
    var key = event.key;
    console.log(key);
    makeSound(key);
    addAnimation("." + key);

})

function addAnimation(key) {
    var buttonPressed = document.querySelector(key);
    buttonPressed.classList.add("pressed");


    setTimeout(() => {
        buttonPressed.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:
            console.log("INVALID");
            break;
    }
}