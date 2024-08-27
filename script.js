//your JS code here. If required.
let circles = document.querySelectorAll('.circle')
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');

let currentActiveLine = 1;
nextBtn.addEventListener('click', () => {
    currentActiveLine++;
    if(currentActiveLine > circles.length) {
        currentActiveLine = circles.length;
    }
    update();
})

prevBtn.addEventListener('click', () => {
    currentActiveLine--;
    if(currentActiveLine < 1) {
        currentActiveLine = 1;
    }
    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActiveLine) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    let actives = document.querySelectorAll('.active');

    let progress = document.getElementById('progress-line');
    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';

    if (currentActiveLine === 1) {
        prevBtn.disabled = true;
    } else if (currentActiveLine === circles.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}