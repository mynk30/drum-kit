// Detect Mouse Click

let buttonLength = document.querySelectorAll('button');

for (let i = 0; i < buttonLength.length; i++) {
    document.querySelectorAll('button')[i].addEventListener("click", function () {
        let key = this.innerHTML;
        // console.log(key);
        playSound(key);
        buttonAnimation(key);
    })
}

// Detect Keyboard Button Press

document.addEventListener('keydown', function (event) {
    let key = event.key;
    // console.log(key);
    playSound(key);
    buttonAnimation(key);
})


// Play Music Function 

function playSound(key) {

    switch (key) {

        case 'w':
            let tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;

        case 'a':
            let tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;

        case 'j':
            let snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;

        case 'k':
            let crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;

        case 'l':
            let kickbass = new Audio('./sounds/kick-bass.mp3');
            kickbass.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(key) {

    if (key === 'w' || key === 'a' || key === 's' || key === 'd' || key === 'j' || key === 'k' || key === 'l') {
        let activebutton = document.querySelector("." + key);
        activebutton.classList.add('pressed');

        setTimeout(() => {
            activebutton.classList.remove('pressed');
        }, 100);
    }
}
