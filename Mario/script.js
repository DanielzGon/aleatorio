const pipe = document.querySelector('.pipe');
const mario = document.querySelector('.mario');

const jump = () => {
mario.classList.add('jump');

setTimeout(() => { 
mario.classList.remove('jump');
}, 500);
}

const loop = setInterval(() => {

const pipePosition = pipe.offsetLeft;
const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

console.log(marioPosition);


if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;

    pipe.style.animation = 'none';
    pipe.style.bottom = `${marioPosition}px`;

}

}, 10);

document.addEventListener('keydown', jump);

