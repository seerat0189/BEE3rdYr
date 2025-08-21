let box = document.querySelector('.box');
let button = document.getElementById('generate');
let stopbtn = document.getElementById('stop');

let colors = ['red', 'blue', 'green', 'orange', 'purple', 'yellow', 'pink', 'cyan', 'lime', 'brown'];

let intervalId = null;

// button.addEventListener('click', () => {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     box.style.backgroundColor = colors[randomIndex];
// });


function randomcolor() {
    let index = Math.floor(Math.random() * 10);
    let color = colors[index];
    return color;
}

button.addEventListener('click', function() {
    // let color = randomcolor();
    // box.style.backgroundColor = color;
    intervalId = setInterval(() => {
        let color = randomcolor();
        box.style.backgroundColor = color;
    }, 500)
})

stopbtn.addEventListener('click', function() {
    if (intervalId) {
        clearInterval(intervalId);
    }
})
